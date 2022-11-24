import {action, observable } from "mobx";
import ApiStatusConstant from "../Constants/ApiStatusConstant";
import Cookies from "js-cookie";
import fetchData from "../services/getProfile/index.api";
import fetchMockData from "../services/getProfile/index.fixture";

export type ProfileType={
  name:string;
  profileImageUrl:string;
  shortBio:string;
}
class ProfileStore {
  @observable profileData = {} as ProfileType;
  @observable apiStatus = ApiStatusConstant.loading;
  isJestRuning = process.env.JEST_WORKER_ID !== undefined;

  @action.bound setApiStatus(value: string) {
    this.apiStatus = value;
  }
  @action.bound setProfileData(data: ProfileType) {
    this.profileData = data;
  }

  @action.bound async fetchProfileData() {
    try {
      const jwtToken = Cookies.get("jwt_token");
      await (this.isJestRuning
        ? fetchMockData(this.onSuccess)
        : fetchData(jwtToken, this.onSuccess, this.onFailure));
    } catch (err) {
      console.log(err);
      this.setApiStatus(ApiStatusConstant.failed);
    }
  }
  @action.bound onSuccess = (responseData: ProfileType) => {
    this.setProfileData(responseData);
    this.setApiStatus(ApiStatusConstant.success);
  };
  @action.bound onFailure = () => {
    this.setApiStatus(ApiStatusConstant.failed);
  };
}

export default new ProfileStore();