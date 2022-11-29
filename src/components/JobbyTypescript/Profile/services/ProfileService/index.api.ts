import ProfileService from "./";
import { ProfileResponseType } from "../../stores/types/ProfileRepsonseType";
import resolveApiCall from "../../../Common/utils/ResolveApiCall";

class ProfileServiceApi implements ProfileService {
  async getProfileDetails(token:string): Promise<ProfileResponseType | unknown> {
    const response =await fetch("https://apis.ccbp.in/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "GET",
    });
    return resolveApiCall(response);
  }
}

export default ProfileServiceApi;
