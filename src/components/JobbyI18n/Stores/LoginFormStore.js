import { action, observable } from "mobx";

class loginFormStore {
  @observable username = "";
  @observable password = "";
  @observable error = false;
  @observable error_msg = "";

  @action setUserName(value) {
    this.username = value;
  }
  @action setPassword(value) {
    this.password = value;
  }
  @action setError(value) {
    this.error = value;
  }
  @action setErrorMsg(value) {
    this.error_msg = value;
  }
}

export default new loginFormStore();
