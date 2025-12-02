import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Save, Trash2, MessageSquarePlus, Calendar } from 'lucide-react';
import { format } from 'date-fns';

interface Remark {
  id: string;
  remark: string;
  created_at: string;
}

interface Application {
  id: string;
  vacancy_id: string;
  status: string;
  applied_at: string;
  notes: string | null;
  vacancies: {
    job_title: string;
    job_providers: {
      name: string;
    };
  };
}

interface CustomerEditDialogProps {
  customerId: string | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
}

export function CustomerEditDialog({ customerId, open, onOpenChange, onSuccess }: CustomerEditDialogProps) {
  const { user } = useAuth();
  const { toast } = useToast();
  const isNew = customerId === 'new';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    qualification: '',
    status: 'New',
  });
  const [newRemark, setNewRemark] = useState('');
  const [initialRemark, setInitialRemark] = useState('');
  const [remarks, setRemarks] = useState<Remark[]>([]);
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (open && customerId && !isNew) {
      fetchCustomer();
      fetchRemarks();
      fetchApplications();
    } else if (open && isNew) {
      // Reset form for new customer
      setFormData({
        name: '',
        phone: '',
        location: '',
        qualification: '',
        status: 'New',
      });
      setRemarks([]);
      setApplications([]);
      setNewRemark('');
      setInitialRemark('');
    }
  }, [open, customerId]);

  const fetchCustomer = async () => {
    try {
      const { data, error } = await supabase
        .from('customers')
        .select('*')
        .eq('id', customerId)
        .single();

      if (error) throw error;
      if (data) {
        setFormData({
          name: data.name,
          phone: data.phone,
          location: data.location,
          qualification: data.qualification || '',
          status: data.status,
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

  const fetchRemarks = async () => {
    try {
      const { data, error } = await supabase
        .from('customer_remarks')
        .select('*')
        .eq('customer_id', customerId)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setRemarks(data || []);
    } catch (error: any) {
      // Silently handle error - remarks will remain empty
    }
  };

  const fetchApplications = async () => {
    try {
      const { data, error } = await supabase
        .from('applications')
        .select(`
          *,
          vacancies (
            job_title,
            job_providers (
              name
            )
          )
        `)
        .eq('customer_id', customerId)
        .order('applied_at', { ascending: false });

      if (error) throw error;
      setApplications(data || []);
    } catch (error: any) {
      // Silently handle error - applications will remain empty
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const dataToSave = {
        ...formData,
        last_contacted: formData.status === 'Called' ? new Date().toISOString() : null,
      };

      if (isNew) {
        const { data: newCustomer, error } = await supabase
          .from('customers')
          .insert([dataToSave])
          .select()
          .single();
        
        if (error) throw error;

        // Add initial remark if provided
        if (initialRemark.trim() && user) {
          await supabase.from('customer_remarks').insert([
            {
              customer_id: newCustomer.id,
              remark: initialRemark,
              created_by: user.id,
            },
          ]);
        }

        toast({
          title: "Success",
          description: "Customer created successfully",
        });
      } else {
        const { error } = await supabase
          .from('customers')
          .update(dataToSave)
          .eq('id', customerId);
        if (error) throw error;
        toast({
          title: "Success",
          description: "Customer updated successfully",
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

  const addRemark = async () => {
    if (!newRemark.trim() || !user) return;

    try {
      const { error } = await supabase.from('customer_remarks').insert([
        {
          customer_id: customerId,
          remark: newRemark,
          created_by: user.id,
        },
      ]);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Remark added successfully",
      });

      setNewRemark('');
      fetchRemarks();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const deleteRemark = async (remarkId: string) => {
    if (!confirm('Are you sure you want to delete this remark?')) return;

    try {
      const { error } = await supabase
        .from('customer_remarks')
        .delete()
        .eq('id', remarkId);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Remark deleted successfully",
      });

      fetchRemarks();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const updateApplicationStatus = async (applicationId: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from('applications')
        .update({ status: newStatus })
        .eq('id', applicationId);

      if (error) throw error;

      toast({
        title: 'Success',
        description: 'Application status updated',
      });

      // Refresh applications
      fetchApplications();
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{isNew ? 'Add New Customer' : 'Edit Customer'}</DialogTitle>
          <DialogDescription>
            {isNew ? 'Add a new customer to the database' : 'Update customer information'}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone *</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>
            <div className="col-span-2">
              <Label htmlFor="location">Location *</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                required
              />
            </div>
            <div className="col-span-2">
              <Label htmlFor="qualification">Qualification</Label>
              <Input
                id="qualification"
                value={formData.qualification}
                onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                placeholder="e.g., High School, Bachelor's Degree"
              />
            </div>
            <div className="col-span-2">
              <Label htmlFor="status">Status</Label>
              <Select value={formData.status} onValueChange={(value) => setFormData({ ...formData, status: value })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="New">New</SelectItem>
                  <SelectItem value="Called">Called</SelectItem>
                  <SelectItem value="Do Not Call">Do Not Call</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {isNew && (
            <Card className="border-accent/20 bg-accent/5">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2">
                  <MessageSquarePlus className="w-5 h-5 text-accent" />
                  <CardTitle className="text-lg font-semibold">Initial Remark (Optional)</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Add an initial note about this customer..."
                  value={initialRemark}
                  onChange={(e) => setInitialRemark(e.target.value)}
                  className="min-h-[80px] resize-none border-accent/20 focus:border-accent"
                  rows={3}
                />
              </CardContent>
            </Card>
          )}

          {!isNew && (
            <Card className="border-accent/20 bg-accent/5">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2">
                  <MessageSquarePlus className="w-5 h-5 text-accent" />
                  <CardTitle className="text-lg font-semibold">Remarks & Notes</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Textarea
                    placeholder="Add a remark or note about this customer..."
                    value={newRemark}
                    onChange={(e) => setNewRemark(e.target.value)}
                    className="min-h-[80px] resize-none border-accent/20 focus:border-accent"
                    rows={3}
                  />
                  <Button 
                    type="button" 
                    onClick={addRemark} 
                    disabled={!newRemark.trim()}
                    className="w-full"
                  >
                    <MessageSquarePlus className="h-4 w-4 mr-2" />
                    Add Remark
                  </Button>
                </div>

                {remarks.length > 0 ? (
                  <div className="space-y-3 max-h-64 overflow-y-auto pr-2">
                    {remarks.map((remark, index) => (
                      <div 
                        key={remark.id} 
                        className="group relative bg-card border border-border/50 p-4 rounded-lg shadow-sm hover:shadow-md hover:border-accent/30 transition-all"
                      >
                        <div className="flex justify-between items-start gap-3">
                          <div className="flex-1 space-y-2">
                            <p className="text-sm leading-relaxed text-foreground">
                              {remark.remark}
                            </p>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Calendar className="w-3 h-3" />
                              <time>{format(new Date(remark.created_at), 'PPp')}</time>
                            </div>
                          </div>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => deleteRemark(remark.id)}
                            className="text-muted-foreground hover:bg-destructive/10 hover:text-destructive shrink-0"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <MessageSquarePlus className="w-12 h-12 mx-auto mb-2 opacity-20" />
                    <p className="text-sm">No remarks yet. Add one to get started.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {!isNew && applications.length > 0 && (
            <Card className="border-primary/20 bg-primary/5">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-semibold">
                  Job Applications ({applications.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {applications.map((app) => (
                    <div
                      key={app.id}
                      className="p-4 rounded-lg border bg-card"
                    >
                      <div className="flex items-start justify-between mb-2 gap-4">
                        <div className="flex-1">
                          <h4 className="font-semibold">{app.vacancies.job_title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {app.vacancies.job_providers.name}
                          </p>
                        </div>
                        <Select
                          value={app.status}
                          onValueChange={(value) => updateApplicationStatus(app.id, value)}
                        >
                          <SelectTrigger className="w-[140px] h-8">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-background z-50">
                            <SelectItem value="New">New</SelectItem>
                            <SelectItem value="Reviewing">Reviewing</SelectItem>
                            <SelectItem value="Shortlisted">Shortlisted</SelectItem>
                            <SelectItem value="Interview">Interview</SelectItem>
                            <SelectItem value="Hired">Hired</SelectItem>
                            <SelectItem value="Rejected">Rejected</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      {app.notes && (
                        <div className="mt-2 p-3 rounded bg-muted/50">
                          <p className="text-sm whitespace-pre-wrap">{app.notes}</p>
                        </div>
                      )}
                      <p className="text-xs text-muted-foreground mt-2">
                        Applied: {new Date(app.applied_at).toLocaleString()}
                      </p>
                    </div>
                  ))}
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
