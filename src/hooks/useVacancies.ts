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
      const response = await fetch(`/jobs.csv?v=${Date.now()}`);
      const text = await response.text();

      // CSV parser that handles quoted values with commas
      const parseCSVRow = (row: string): string[] => {
        const result: string[] = [];
        let current = '';
        let inQuotes = false;

        for (let i = 0; i < row.length; i++) {
          const char = row[i];
          if (char === '"') {
            inQuotes = !inQuotes;
          } else if (char === ',' && !inQuotes) {
            result.push(current.trim());
            current = '';
          } else {
            current += char;
          }
        }
        result.push(current.trim());
        return result;
      };

      const rows = text.split("\n").map(row => row.trim()).filter(row => row.length > 0);
      const headers = parseCSVRow(rows[0]);

      const data = rows.slice(1).map(row => {
        const values = parseCSVRow(row);
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
      }).sort((a, b) => {
        const dateA = new Date(a.updated_at).getTime();
        const dateB = new Date(b.updated_at).getTime();
        return dateB - dateA;
      });

      return data;
    },
  });
};
