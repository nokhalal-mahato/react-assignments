import { action, observable } from "mobx";
import ApiStatusConstant from "../Constants/ApiStatusConstant";
import Cookies from "js-cookie";
import fetchData from "../services/getJobList/index.api";
import fetchMockData from "../services/getJobList/index.fixture";

type jobtype = {
  id: string;
  title: string;
  company_logo_url: string;
  rating: number;
  location: string;
  employment_type: string;
  package_per_annum: string;
  job_description: string;
};

type JoblistType = {
  id: string;
  title: string;
  companyLogoUrl: string;
  rating: number;
  location: string;
  employmentType: string;
  packagePerAnnum: string;
  jobDescription: string;
};

class jobsListStore {
  @observable jobsList: JoblistType[] = [];
  @observable apiStatus = ApiStatusConstant.loading;
  isJestRuning = process.env.JEST_WORKER_ID !== undefined;

  @action setApiStatus(value: string) {
    this.apiStatus = value;
  }
  @action setJobsList(data: JoblistType[]) {
    this.jobsList = data;
  }
  @action async fetchJobsList(
    employmentFilterValue: string,
    salary: string,
    searchValue: string
  ) {
    try {
      const jwtToken = Cookies.get("jwt_token");
      await (this.isJestRuning
        ? fetchMockData(this.onSuccess)
        : fetchData(
            jwtToken,
            employmentFilterValue,
            salary,
            searchValue,
            this.onSuccess,
            this.onFailure,
            this.onEmpty
          ));
    } catch (err) {
      console.log(err);
      this.setApiStatus(ApiStatusConstant.failed);
    }
  }
  @action onSuccess = (responseData: JoblistType[]) => {
    this.setJobsList(responseData);
    this.setApiStatus(ApiStatusConstant.success);
  };
  @action onFailure = () => {
    this.setApiStatus(ApiStatusConstant.failed);
  };
  @action onEmpty = (responseData: JoblistType[]) => {
    this.setJobsList(responseData);
    this.setApiStatus(ApiStatusConstant.empty);
  };
}

export default new jobsListStore();
