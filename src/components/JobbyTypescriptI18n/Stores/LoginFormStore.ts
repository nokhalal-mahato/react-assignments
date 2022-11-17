import { action, observable } from "mobx";

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
}

export default new loginFormStore();
