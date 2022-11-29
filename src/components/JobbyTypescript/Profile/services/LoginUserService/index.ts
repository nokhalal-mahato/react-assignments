import { UserDetailType } from "../../stores/types/UserDetailTypes";

interface LoginUserService {
  loginUser: (userDetails:UserDetailType) => Promise<Response| unknown>;
}

export default LoginUserService;
