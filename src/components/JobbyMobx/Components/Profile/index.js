import { Component } from "react";
import Cookies from "js-cookie";
import { ThreeDots } from "react-loader-spinner";
import "./index.css";
import ApiStatusConstant from "../../Constants/ApiStatusConstant";
import profileStore from "../../Stores/profileStore";
import {observer} from 'mobx-react';

class Profile extends Component {
  constructor(){
    super();
    this.profileStore=profileStore;
  }

  componentDidMount() {
    this.getProfile();
  }

  getProfile = async () => {
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
      this.profileStore.setApiStatus(ApiStatusConstant.success);
      this.profileStore.setProfileData(updatedData);
    } else {
      this.profileStore.setApiStatus(ApiStatusConstant.failed);
    }
  };

  renderProfile = () => {
    const { profileData } = this.profileStore;
    return (
      <div className="jobby-profile">
        <img src={profileData.profileImageUrl} />
        <h3 className="jobby-profile-name">{profileData.name}</h3>
        <p className="jobby-profile-bio">{profileData.shortBio}</p>
      </div>
    );
  };

  renderFailureView = () => (
    <div className="jobby-profile-detail-failure">
      <button className="profile-retry-btn" onClick={this.getProfile}>
        Retry
      </button>
    </div>
  );

  renderLoadingView = () => (
    <div className="jobby-profile-loader-container">
      <ThreeDots color="white" height={50} width={50} />
    </div>
  );

  render() {
    const { apiStatus } = this.profileStore;
    switch (apiStatus) {
      case ApiStatusConstant.loading:
        return this.renderLoadingView();
      case ApiStatusConstant.failed:
        return this.renderFailureView();
      case ApiStatusConstant.success:
        return this.renderProfile();
      default:
        return null;
    }
  }
}

export default observer(Profile);
