import { action, observable } from "mobx";
import ApiStatusConstant from "../Constants/ApiStatusConstant";
import Cookies from "js-cookie";
import fetchData from "../services/getJobItemDetails/index.api";
import fetchMockData from "../services/getJobItemDetails/index.fixture";

export type JobType={
    id:string,
    similar_jobs:[],
    job_details:{
      company_logo_url:string,
      title:string,
      rating:number,
      location:string,
      employment_type:string,
      package_per_annum:string,
      company_website_url:string,
      job_description:string,
      skills:[{name:string,image_url:string}]
      life_at_company:{
        image_url:string,
        description:string,
      }
    }
}
class jobItemDetailStore {
  @observable jobDetail = <JobType>{};
  @observable apiStatus = ApiStatusConstant.loading;
  isJestRuning = process.env.JEST_WORKER_ID !== undefined;

  @action setApiStatus(value: string) {
    this.apiStatus = value;
  }
  @action setJobDetail(data: JobType) {
    this.jobDetail = data;
  }
  @action async fetchJobDetail(params: string) {
    try {
      const jwtToken = Cookies.get("jwt_token");
      await (this.isJestRuning
        ? fetchMockData(this.onSuccess)
        : fetchData(params, jwtToken, this.onSuccess, this.onFailure));
    } catch (err) {
      console.log(err);
      this.setApiStatus(ApiStatusConstant.failed);
    }
  }
  @action onSuccess=(responseData:JobType) =>{
    this.setJobDetail(responseData);
    this.setApiStatus(ApiStatusConstant.success);
  }
  @action onFailure=()=> {
    this.setApiStatus(ApiStatusConstant.failed);
  }
}

export default new jobItemDetailStore();
