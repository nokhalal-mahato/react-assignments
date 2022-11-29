import { action, observable } from "mobx";
import Cookies from "js-cookie";

import ApiStatusConstant from "../../../Common/constants/ApiStatusConstant";
import ProfileService from "../../services/ProfileService";
import { bindPromiseWithOnSuccess } from "../../../Common/utils/bindPromiseWithOnSuccess";
import { ProfileResponseType } from "../types/ProfileRepsonseType";
import Profile from "../models/ProfileModel";


class ProfileStore {
  @observable profileData = {} as Profile;
  @observable apiStatus = ApiStatusConstant.loading;
  profileService;

  constructor(profileService: ProfileService) {
    this.profileService = profileService;
  }

  @action.bound setApiStatus(value: string) {
    this.apiStatus = value;
  }
  @action.bound setProfileData(data: Profile) {
    this.profileData = data;
  }

  @action.bound async fetchProfileData() {
      const jwtToken = Cookies.get("jwt_token");
      const response = this.profileService.getProfileDetails(jwtToken!);
      bindPromiseWithOnSuccess(response, this.onSuccess, this.onFailure);
  }
  @action.bound onSuccess = (responseData: ProfileResponseType) => {
    const updatedData = new Profile(responseData);
    this.setProfileData(updatedData);
    this.setApiStatus(ApiStatusConstant.success);
  };
  @action.bound onFailure = (err:any) => {
    this.setApiStatus(ApiStatusConstant.failed);
  };
}

export default ProfileStore;
