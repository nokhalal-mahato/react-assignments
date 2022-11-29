import JobListService from ".";
import { resolveWithTimeout } from "../../../Common/utils/resolveWithTimeout";
import JobListData from '../../fixtures/getJobDetail.json'
import { JoblistResponseType } from "../../stores/types/JobListResponseType";


class JobListServiceFixture implements JobListService {
  getJobList(
    token: string,
    employmentFilterValue: string,
    salary: string,
    searchValue: string
  ): Promise<JoblistResponseType | unknown> {
    return resolveWithTimeout(JobListData);
  }
}

export default JobListServiceFixture;
