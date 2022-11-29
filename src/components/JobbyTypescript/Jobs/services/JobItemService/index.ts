import { JobType } from "../../stores/types/JobType";

interface JobItemService {
  getJotItemDetails: (token: string,params:string) => Promise<JobType | unknown>;
}

export default JobItemService;
