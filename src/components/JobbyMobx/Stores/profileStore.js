import { makeAutoObservable } from "mobx";
import ApiStatusConstant from "../Constants/ApiStatusConstant";
import Cookies from "js-cookie";

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

  async fetchProfileData() {
    try {
      const jwtToken = Cookies.get("jwt_token");
      const response = await fetch("https://apis.ccbp.in/profile", {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        method: "GET",
      });
      if (response.ok) {
        const fetchedData = await response.json();
        const updatedData = {
          name: fetchedData.profile_details.name,
          profileImageUrl: fetchedData.profile_details.profile_image_url,
          shortBio: fetchedData.profile_details.short_bio,
        };
        this.setApiStatus(ApiStatusConstant.success);
        this.setProfileData(updatedData);
      } else {
        this.setApiStatus(ApiStatusConstant.failed);
      }
    } catch (err) {
      console.log(err);
      this.setApiStatus(ApiStatusConstant.failed);
    }
  }
}

export default new profileStore();
