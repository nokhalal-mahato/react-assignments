import { action, observable } from "mobx";
import fetchData from "../services/loginUser/index.api";
import fetchMockData from "../services/loginUser/index.fixture";

class loginFormStore {
  @observable username = "";
  @observable password = "";
  @observable error = false;
  @observable error_msg = "";

  @action setUserName(value: string) {
    this.username = value;
  }
  @action setPassword(value: string) {
    this.password = value;
  }
  @action setError(value: boolean) {
    this.error = value;
  }
  @action setErrorMsg(value: string) {
    this.error_msg = value;
  }
  @action submitForm = async (onSubmitSuccess: Function) => {
    const { username, password } = this;
    const isJestRuning = process.env.JEST_WORKER_ID !== undefined;

    try {
      const userDetails = { username, password };
      {
        !isJestRuning
          ? fetchData(userDetails, onSubmitSuccess, this.onSubmitFail)
          : fetchMockData(onSubmitSuccess);
      }
    } catch (err: any) {
      console.log(err);
      this.onSubmitFail(err.message);
    }
  };
  @action.bound onSubmitFail = (error_msg: string) => {
    this.setError(true);
    this.setErrorMsg(error_msg);
  };
}

export default new loginFormStore();
