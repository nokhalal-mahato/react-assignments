import { action, observable } from "mobx";
import ApiStatusConstant from "../Constants/ApiStatusConstant";
import Cookies from "js-cookie";

class jobItemDetailStore {
  @observable jobDetail = [];
  @observable apiStatus = ApiStatusConstant.loading;

  @action setApiStatus(value){
    this.apiStatus=value
  }
  @action setJobDetail(data){
    this.jobDetail=data;
  }
  @action async fetchJobDetail(params){
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
