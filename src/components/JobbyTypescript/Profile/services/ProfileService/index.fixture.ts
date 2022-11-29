import ProfileDetail from '../../fixtures/getProfileDetials.json'
import { ProfileResponseType } from '../../stores/types/ProfileRepsonseType';
import { resolveWithTimeout } from '../../../Common/utils/ResolveWithTimeout';
import ProfileService from "./index";

class ProfileServiceFixture implements ProfileService {
  getProfileDetails(token: string): Promise<ProfileResponseType> {
    return resolveWithTimeout(ProfileDetail);
  }
}

export default ProfileServiceFixture;
