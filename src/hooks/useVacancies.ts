import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface Vacancy {
  id: string;
  job_title: string;
  openings: number;
  status: string;
  created_at: string;
  updated_at: string;
  provider_id: string;
  salary: string;
  salary_type: string;
  job_providers: {
    name: string;
    location: string;
    industry: string;
    contact_number: string;
  };
}

export const useVacancies = () => {
  return useQuery({
    queryKey: ["vacancies"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("vacancies")
        .select(`
          *,
          job_providers (
            name,
            location,
            industry,
            contact_number
          )
        `)
        .eq("status", "Open")
        .order("updated_at", { ascending: false });

      if (error) throw error;
      return data as Vacancy[];
    },
  });
};
