import resolveApiCall from "../../../Common/utils/ResolveApiCall";
import { UserDetailType } from "../../stores/types/UserDetailTypes";
import LoginUserService from "./";

class LoginUserApi implements LoginUserService {
  async loginUser(userDetails: UserDetailType): Promise<Response | unknown> {
    const response = await fetch("https://apis.ccbp.in/login", {
      method: "POST",
      body: JSON.stringify(userDetails),
    });
    return resolveApiCall(response);
  }
}

export default LoginUserApi;
