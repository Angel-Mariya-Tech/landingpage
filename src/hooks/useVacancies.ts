import { useQuery } from "@tanstack/react-query";

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
      const response = await fetch("/jobs.csv");
      const text = await response.text();

      // Simple CSV parser
      const rows = text.split("\n").map(row => row.trim()).filter(row => row.length > 0);
      const headers = rows[0].split(",").map(h => h.trim());

      const data = rows.slice(1).map(row => {
        // Handle potential commas in values by respecting quotes if we were using a library,
        // but for simple usage we'll assume no commas in values for now or basic split.
        // A slightly more robust regex split could be used if needed.
        const values = row.split(",");
        const item: any = {};

        headers.forEach((header, index) => {
          item[header] = values[index]?.trim();
        });

        return {
          id: item.id,
          job_title: item.job_title,
          openings: parseInt(item.openings) || 0,
          status: item.status,
          created_at: item.created_at,
          updated_at: item.updated_at,
          provider_id: item.provider_id,
          salary: item.salary,
          salary_type: item.salary_type,
          job_providers: {
            name: item.provider_name,
            location: item.provider_location,
            industry: item.provider_industry,
            contact_number: item.provider_contact_number,
          }
        } as Vacancy;
      });

      return data;
    },
  });
};
