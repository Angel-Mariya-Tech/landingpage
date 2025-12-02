import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Save, Plus, Trash2, Briefcase } from 'lucide-react';

interface Vacancy {
  id: string;
  job_title: string;
  openings: number;
  status: string;
  salary: string | null;
  salary_type: string | null;
}

interface VacancyForm {
  job_title: string;
  openings: number;
  status: string;
  salary: string;
  salary_type: string;
}

interface ProviderEditDialogProps {
  providerId: string | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
}

export function ProviderEditDialog({ providerId, open, onOpenChange, onSuccess }: ProviderEditDialogProps) {
  const { toast } = useToast();
  const isNew = providerId === 'new';

  const [formData, setFormData] = useState({
    name: '',
    industry: '',
    location: '',
    contact_number: '',
    notes: '',
  });
  const [vacancies, setVacancies] = useState<Vacancy[]>([]);
  const [loading, setLoading] = useState(false);
  const [vacancySaving, setVacancySaving] = useState(false);
  const [showVacancyDialog, setShowVacancyDialog] = useState(false);
  const [vacancyForm, setVacancyForm] = useState<VacancyForm>({
    job_title: '',
    openings: 1,
    status: 'Open',
    salary: '',
    salary_type: 'Monthly',
  });

  useEffect(() => {
    if (open && providerId && !isNew) {
      fetchProvider();
      fetchVacancies();
    } else if (open && isNew) {
      // Reset form for new provider
      setFormData({
        name: '',
        industry: '',
        location: '',
        contact_number: '',
        notes: '',
      });
      setVacancies([]);
    }
  }, [open, providerId]);

  const fetchProvider = async () => {
    try {
      const { data, error } = await supabase
        .from('job_providers')
        .select('*')
        .eq('id', providerId)
        .single();

      if (error) throw error;
      if (data) {
        setFormData({
          name: data.name,
          industry: data.industry,
          location: data.location,
          contact_number: data.contact_number,
          notes: data.notes || '',
        });
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const fetchVacancies = async () => {
    try {
      const { data, error } = await supabase
        .from('vacancies')
        .select('*')
        .eq('provider_id', providerId)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setVacancies(data || []);
    } catch (error: any) {
      // Silently handle error - vacancies will remain empty
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isNew) {
        const { error } = await supabase.from('job_providers').insert([formData]);
        if (error) throw error;
        toast({
          title: "Success",
          description: "Job provider created successfully",
        });
      } else {
        const { error } = await supabase
          .from('job_providers')
          .update(formData)
          .eq('id', providerId);
        if (error) throw error;
        toast({
          title: "Success",
          description: "Job provider updated successfully",
        });
      }

      onSuccess();
      onOpenChange(false);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const deleteVacancy = async (vacancyId: string) => {
    if (!confirm('Are you sure you want to delete this vacancy?')) return;

    try {
      const { error } = await supabase
        .from('vacancies')
        .delete()
        .eq('id', vacancyId);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Vacancy deleted successfully",
      });

      fetchVacancies();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleSaveVacancy = async () => {
    if (vacancySaving) return; // Prevent multiple submissions
    
    setVacancySaving(true);
    try {
      const { error } = await supabase.from('vacancies').insert([
        {
          ...vacancyForm,
          provider_id: providerId,
        },
      ]);

      if (error) throw error;

      toast({ title: "Vacancy added successfully" });
      setShowVacancyDialog(false);
      setVacancyForm({ job_title: '', openings: 1, status: 'Open', salary: '', salary_type: 'Monthly' });
      fetchVacancies();
    } catch (error: any) {
      toast({
        title: "Error saving vacancy",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setVacancySaving(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{isNew ? 'Add New Job Provider' : 'Edit Job Provider'}</DialogTitle>
          <DialogDescription>
            {isNew ? 'Add a new job provider to the database' : 'Update job provider information'}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Company Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="industry">Industry *</Label>
              <Input
                id="industry"
                value={formData.industry}
                onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="location">Location *</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="contact_number">Contact Number *</Label>
              <Input
                id="contact_number"
                value={formData.contact_number}
                onChange={(e) => setFormData({ ...formData, contact_number: e.target.value })}
                required
              />
            </div>
            <div className="col-span-2">
              <Label htmlFor="notes">Notes</Label>
              <Textarea
                id="notes"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                rows={3}
              />
            </div>
          </div>

          {!isNew && (
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Vacancies</CardTitle>
                  <Dialog open={showVacancyDialog} onOpenChange={setShowVacancyDialog}>
                    <DialogTrigger asChild>
                      <Button
                        type="button"
                        size="sm"
                        onClick={() => {
                          setVacancyForm({ job_title: "", openings: 1, status: "Open", salary: "", salary_type: "Monthly" });
                        }}
                      >
                        <Plus className="h-4 w-4 mr-1" />
                        Add Vacancy
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Add New Vacancy</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="job_title">Job Title</Label>
                          <Input
                            id="job_title"
                            value={vacancyForm.job_title}
                            onChange={(e) =>
                              setVacancyForm({ ...vacancyForm, job_title: e.target.value })
                            }
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="openings">Number of Openings</Label>
                          <Input
                            id="openings"
                            type="number"
                            min="1"
                            value={vacancyForm.openings}
                            onChange={(e) =>
                              setVacancyForm({ ...vacancyForm, openings: parseInt(e.target.value) || 1 })
                            }
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="status">Status</Label>
                          <Select
                            value={vacancyForm.status}
                            onValueChange={(value) =>
                              setVacancyForm({ ...vacancyForm, status: value })
                            }
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Open">Open</SelectItem>
                              <SelectItem value="Closed">Closed</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="salary">Salary</Label>
                          <Input
                            id="salary"
                            value={vacancyForm.salary}
                            onChange={(e) =>
                              setVacancyForm({ ...vacancyForm, salary: e.target.value })
                            }
                            placeholder="e.g., 5000 or Negotiable"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="salary_type">Salary Type</Label>
                          <Select
                            value={vacancyForm.salary_type}
                            onValueChange={(value) =>
                              setVacancyForm({ ...vacancyForm, salary_type: value })
                            }
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Hourly">Hourly</SelectItem>
                              <SelectItem value="Monthly">Monthly</SelectItem>
                              <SelectItem value="Yearly">Yearly</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <Button onClick={handleSaveVacancy} className="w-full" disabled={vacancySaving}>
                          {vacancySaving ? 'Adding...' : 'Add Vacancy'}
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {vacancies.length === 0 ? (
                    <p className="text-sm text-muted-foreground text-center py-4">
                      No vacancies yet
                    </p>
                  ) : (
                    vacancies.map((vacancy) => (
                      <div key={vacancy.id} className="bg-muted p-3 rounded-lg flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Briefcase className="h-4 w-4 text-primary" />
                          <div>
                            <p className="text-sm font-medium">{vacancy.job_title}</p>
                            <p className="text-xs text-muted-foreground">
                              {vacancy.openings} opening{vacancy.openings !== 1 ? 's' : ''} • {vacancy.status}
                            </p>
                          </div>
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => deleteVacancy(vacancy.id)}
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          )}

          <div className="flex gap-2 justify-end">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              <Save className="h-4 w-4 mr-2" />
              {loading ? 'Saving...' : 'Save'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
