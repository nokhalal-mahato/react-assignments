import { makeAutoObservable } from "mobx";
import ApiStatusConstant from "../Constants/ApiStatusConstant";

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
}

export default new jobItemDetailStore();
