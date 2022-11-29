import { ProfileResponseType } from "../../stores/types/ProfileRepsonseType";

interface ProfileService {
  getProfileDetails: (token: string) => Promise<ProfileResponseType | unknown>;
}

export default ProfileService;
