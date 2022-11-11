import { makeAutoObservable } from "mobx";
import ApiStatusConstant from "../Constants/ApiStatusConstant";

class profileStore {
  profileData = {};
  apiStatus = ApiStatusConstant.loading;
  constructor() {
    makeAutoObservable(this);
  }
  setApiStatus(value) {
    this.apiStatus = value;
  }
  setProfileData(data) {
    this.profileData = data;
  }
}

export default new profileStore();
