import { resolveWithTimeout } from "../../../Common/utils/ResolveWithTimeout";
import { JobType } from "../../stores/types/JobType";
import JobItemService from "./index";
import JobItemDetail from'../../fixtures/getJobItemDetail.json'

class JobItemFixture implements JobItemService {
  getJotItemDetails(token: string, params: string): Promise<JobType | unknown> {
    return resolveWithTimeout(JobItemDetail);
  }
}

export default JobItemFixture;
