import { makeAutoObservable } from "mobx";
import ApiStatusConstant from "../Constants/ApiStatusConstant";

class jobsListStore {
  jobsList = [];
  apiStatus = ApiStatusConstant.loading;
  constructor() {
    makeAutoObservable(this);
  }
  setApiStatus(value) {
    this.apiStatus = value;
  }
  setJobsList(data) {
    this.jobsList = data;
  }
}

export default new jobsListStore();
