import JobListService from ".";
import resolveApiCall from "../../../Common/utils/resolveApicall";
import { JoblistResponseType } from "../../stores/types/JobListResponseType";

class JobListServiceApi implements JobListService {
  async getJobList(token: string, employmentFilterValue: string, salary: string, searchValue: string):Promise<JoblistResponseType | unknown> {
    const response = await fetch(
    `https://apis.ccbp.in/jobs?employment_type=${employmentFilterValue}&minimum_package=${salary}&search=${searchValue}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
    return resolveApiCall(response);
  }
}

export default JobListServiceApi;

