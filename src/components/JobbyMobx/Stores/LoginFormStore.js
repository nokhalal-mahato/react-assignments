import { makeAutoObservable } from "mobx";

class loginFormStore {
  username = "";
  password = "";
  error = false;
  error_msg = "";
  constructor() {
    makeAutoObservable(this);
  }
  setUserName(value) {
    this.username = value;
  }
  setPassword(value) {
    this.password = value;
  }
  setError(value) {
    this.error = value;
  }
  setErrorMsg(value) {
    this.error_msg = value;
  }
}

export default new loginFormStore();
