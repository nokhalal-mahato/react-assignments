import { action, observable } from "mobx";
import Cookies from "js-cookie";

import ApiStatusConstant from "../../../Common/constants/ApiStatusConstant";
import JobListService from "../../services/JobListService";
import { bindPromiseWithOnSuccess } from "../../../Common/utils/BindPromiseWithOnSuccess";
import { JoblistResponseType } from "./../types/JobListResponseType";
import JobListItem from "./../models/JobItemModel";


class JobsListStore {
  @observable jobsList: JobListItem[] = [];
  @observable apiStatus = ApiStatusConstant.loading;
  jobListService;

  constructor(jobListService: JobListService) {
    this.jobListService = jobListService;
  }

  @action.bound setApiStatus(value: string) {
    this.apiStatus = value;
  }
  @action.bound setJobsList(data: JobListItem[]) {
    this.jobsList = data;
  }
  @action.bound fetchJobsList(
    employmentFilterValue: string,
    salary: string,
    searchValue: string
  ) {
    const jwtToken = Cookies.get("jwt_token");
    const response = this.jobListService.getJobList(
      jwtToken!,
      employmentFilterValue,
      salary,
      searchValue
    );
    bindPromiseWithOnSuccess(response, this.onSuccess, this.onFailure);
  }
  @action.bound onSuccess = (responseData: JoblistResponseType) => {
    const updatedData = responseData.jobs.map((job) => new JobListItem(job));
    this.setJobsList(updatedData);
    if (responseData.total === 0) {
      return this.onEmpty(updatedData);
    }
    this.setApiStatus(ApiStatusConstant.success);
  };
  @action.bound onFailure = () => {
    this.setApiStatus(ApiStatusConstant.failed);
  };
  @action.bound onEmpty = (responseData: JobListItem[]) => {
    this.setApiStatus(ApiStatusConstant.empty);
  };
}

export default JobsListStore;
