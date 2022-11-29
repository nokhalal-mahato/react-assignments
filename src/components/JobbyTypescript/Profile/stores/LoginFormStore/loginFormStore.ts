import { action, observable } from "mobx";
import { bindPromiseWithOnSuccess } from "../../../Common/utils/bindPromiseWithOnSuccess";
import LoginUserService from "../../services/LoginUserService";

class LoginFormStore {
  @observable username = "";
  @observable password = "";
  @observable error = false;
  @observable error_msg = "";
  loginUserService;

  constructor(loginUserService:LoginUserService){
    this.loginUserService=loginUserService;
  };

  @action.bound setUserName(value: string) {
    this.username = value;
  }
  @action.bound setPassword(value: string) {
    this.password = value;
  }
  @action.bound setError(value: boolean) {
    this.error = value;
  }
  @action.bound setErrorMsg(value: string) {
    this.error_msg = value;
  }
  @action.bound onSubmitForm = (onSubmitSuccess: (data:string)=>void) => {
    const { username, password } = this;
    const userDetails = { username, password };
    const response=this.loginUserService.loginUser(userDetails);
    bindPromiseWithOnSuccess(response,onSubmitSuccess,this.onSubmitFail)
  };
  @action.bound onSubmitFail = (error_msg: string) => {
    this.setError(true);
    this.setErrorMsg(error_msg);
  };
}

export default LoginFormStore;
