export type JobType = {
  id: string;
  similar_jobs: [];
  job_details: {
    company_logo_url: string;
    title: string;
    rating: number;
    location: string;
    employment_type: string;
    package_per_annum: string;
    company_website_url: string;
    job_description: string;
    skills: [{ name: string; image_url: string }];
    life_at_company: {
      image_url: string;
      description: string;
    };
  };
};
