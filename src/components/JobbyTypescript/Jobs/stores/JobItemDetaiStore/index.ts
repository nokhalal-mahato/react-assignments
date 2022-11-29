import { action, observable } from "mobx";
import Cookies from "js-cookie";

import ApiStatusConstant from "../../../Common/constants/ApiStatusConstant";
import { JobType } from "./../types/JobType";
import JobItemService from "../../services/JobItemService";
import { bindPromiseWithOnSuccess } from "../../../Common/utils/bindPromiseWithOnSuccess";


class JobItemDetailStore {
  @observable jobDetail = <JobType>{};
  @observable apiStatus = ApiStatusConstant.loading;
  jobItemService;

  constructor(jobItemService:JobItemService){
    this.jobItemService=jobItemService;
  };

  @action.bound setApiStatus(value: string) {
    this.apiStatus = value;
  }
  @action.bound setJobDetail(data: JobType) {
    this.jobDetail = data;
  }
  @action.bound async fetchJobDetail(params: string) {
    const jwtToken = Cookies.get("jwt_token");
    const response = this.jobItemService.getJotItemDetails(jwtToken!,params);
    bindPromiseWithOnSuccess(response, this.onSuccess, this.onFailure);
  }
  @action.bound onSuccess = (responseData: JobType) => {
    this.setJobDetail(responseData);
    this.setApiStatus(ApiStatusConstant.success);
  };
  @action.bound onFailure = () => {
    this.setApiStatus(ApiStatusConstant.failed);
  };
}

export default JobItemDetailStore;
