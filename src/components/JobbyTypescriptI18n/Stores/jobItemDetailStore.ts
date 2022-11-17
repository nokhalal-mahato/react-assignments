import { action, observable } from "mobx";
import ApiStatusConstant from "../Constants/ApiStatusConstant";
import Cookies from "js-cookie";

type JobType={
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

  @action setApiStatus(value:string){
    this.apiStatus=value
  }
  @action setJobDetail(data:JobType){
    this.jobDetail=data;
  }
  @action async fetchJobDetail(params:string){
    try {
      const jwtToken = Cookies.get("jwt_token");
      const response = await fetch(`https://apis.ccbp.in/jobs/${params}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });
      if (response.ok) {
        const responseData = await response.json();
        this.setJobDetail(responseData);
        this.setApiStatus(ApiStatusConstant.success);
      } else {
        this.setApiStatus(ApiStatusConstant.failed);
      }
    } catch (err) {
      console.log(err);
      this.setApiStatus(ApiStatusConstant.failed);
    }
  }
}

export default new jobItemDetailStore();
