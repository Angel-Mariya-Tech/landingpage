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

export const jobs: Vacancy[] = [
  {
    id: "1",
    job_title: "Senior React Developer",
    openings: 1,
    status: "Open",
    created_at: "2024-03-10T10:00:00Z",
    updated_at: "2024-03-10T10:00:00Z",
    provider_id: "p1",
    salary: "120000",
    salary_type: "Yearly",
    job_providers: {
      name: "Tech Solutions Inc.",
      location: "New York, NY",
      industry: "Technology",
      contact_number: "+1234567890"
    }
  },
  {
    id: "2",
    job_title: "Marketing Manager",
    openings: 1,
    status: "Open",
    created_at: "2024-03-09T14:30:00Z",
    updated_at: "2024-03-09T14:30:00Z",
    provider_id: "p2",
    salary: "85000",
    salary_type: "Yearly",
    job_providers: {
      name: "Creative Agency",
      location: "Los Angeles, CA",
      industry: "Marketing",
      contact_number: "+1987654321"
    }
  },
  {
    id: "3",
    job_title: "Customer Support Representative",
    openings: 3,
    status: "Open",
    created_at: "2024-03-08T09:15:00Z",
    updated_at: "2024-03-08T09:15:00Z",
    provider_id: "p3",
    salary: "20",
    salary_type: "Hourly",
    job_providers: {
      name: "Global Services",
      location: "Remote",
      industry: "Customer Service",
      contact_number: "+1122334455"
    }
  },
  {
    id: "4",
    job_title: "Project Manager",
    openings: 1,
    status: "Open",
    created_at: "2024-03-07T11:45:00Z",
    updated_at: "2024-03-07T11:45:00Z",
    provider_id: "p4",
    salary: "95000",
    salary_type: "Yearly",
    job_providers: {
      name: "BuildIt Corp",
      location: "Chicago, IL",
      industry: "Construction",
      contact_number: "+1555666777"
    }
  },
  {
    id: "5",
    job_title: "Graphic Designer",
    openings: 2,
    status: "Open",
    created_at: "2024-03-06T16:20:00Z",
    updated_at: "2024-03-06T16:20:00Z",
    provider_id: "p5",
    salary: "60000",
    salary_type: "Yearly",
    job_providers: {
      name: "Design Studio",
      location: "Austin, TX",
      industry: "Design",
      contact_number: "+1444333222"
    }
  },
  {
    id: "6",
    job_title: "Data Analyst",
    openings: 1,
    status: "Open",
    created_at: "2024-03-05T13:00:00Z",
    updated_at: "2024-03-05T13:00:00Z",
    provider_id: "p6",
    salary: "75000",
    salary_type: "Yearly",
    job_providers: {
      name: "Data Insights",
      location: "Seattle, WA",
      industry: "Data Analytics",
      contact_number: "+1777888999"
    }
  }
];
