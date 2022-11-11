import { makeAutoObservable } from "mobx";
import ApiStatusConstant from "../Constants/ApiStatusConstant";
import Cookies from "js-cookie";

class jobItemDetailStore {
  jobDetail = [];
  apiStatus = ApiStatusConstant.loading;
  constructor(){
    makeAutoObservable(this);
  }
  setApiStatus(value){
    this.apiStatus=value
  }
  setJobDetail(data){
    this.jobDetail=data;
  }
  async fetchJobDetail(params){
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
