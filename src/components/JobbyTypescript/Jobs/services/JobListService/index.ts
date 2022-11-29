import { JoblistResponseType } from "../../stores/types/JobListResponseType";

interface JobListService {
  getJobList: (
    token: string,
    employmentFilterValue:string,
    salary:string,
    searchValue:string
  ) => Promise<JoblistResponseType | unknown>;
}

export default JobListService;
