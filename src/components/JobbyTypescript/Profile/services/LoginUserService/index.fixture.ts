import LoginUserService from ".";
import { resolveWithTimeout } from "../../../Common/utils/ResolveWithTimeout";
import { UserDetailType } from "../../stores/types/UserDetailTypes";

class LoginUserFixture implements LoginUserService {
  loginUser(userDetails: UserDetailType): Promise<Response | unknown> {
    return resolveWithTimeout(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InByYW5lZXRoYSIsInJvbGUiOiJQUklNRV9VU0VSIiwiaWF0IjoxNjIzMDY1NTMyfQ.68FuDFraHW7GplQiXVUrnsU1goYgmwd0tXNk6-HxCok"
    );
  }
}

export default LoginUserFixture;
