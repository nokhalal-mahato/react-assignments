import JobItemService from ".";
import resolveApiCall from "../../../Common/utils/resolveApicall";
import { JobType } from "../../stores/types/JobType";

class JobItemServiceApi implements JobItemService {
  async getJotItemDetails(
    token: string,
    params: string
  ): Promise<JobType | unknown> {
    const response = await fetch(`https://apis.ccbp.in/jobs/${params}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return resolveApiCall(response);
  }
}

export default JobItemServiceApi;
