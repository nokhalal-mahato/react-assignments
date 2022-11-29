import { ProfileResponseType } from "../../types/ProfileRepsonseType";

class Profile {
  name: string;
  profileImageUrl: string;
  shortBio: string;

  constructor(data:ProfileResponseType) {
      this.name= data.profile_details.name;
      this.profileImageUrl= data.profile_details.profile_image_url;
      this.shortBio= data.profile_details.short_bio;
  }
}

export default Profile;
