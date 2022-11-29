import { JoblistItemResponseType } from "../../types/jobListItemResponseType";

class JobListItem {
  id: string;
  title: string;
  companyLogoUrl: string;
  rating: number;
  location: string;
  employmentType: string;
  packagePerAnnum: string;
  jobDescription: string;
  constructor(job: JoblistItemResponseType) {
    this.title = job.title;
    this.id = job.id;
    this.rating = job.rating;
    this.packagePerAnnum = job.package_per_annum;
    this.location = job.location;
    this.jobDescription = job.job_description;
    this.employmentType = job.employment_type;
    this.companyLogoUrl = job.company_logo_url;
  }
}

export default JobListItem;
