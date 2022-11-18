import { observable, action,reaction } from "mobx";
import Cookies from "js-cookie";

class LoginStore {
  @observable isLogin = false;
  @observable isClicked = false;
  @observable showPopup=false;
  constructor() {
    this.isLogin = Cookies.get("jwt_token") ? true : false;
    // reaction(
    //   () => this.isClicked,
    //   () => {
    //     console.log("fsfsdfs");
    //     this.showPopup = !this.showPopup;
    //   }
    // );
  }
  @action.bound setLogin() {
    this.isLogin = !this.isLogin;
  }

  @action.bound triggerPopup() {
    
  }
  @action.bound setClicked(){
    if (!this.isLogin) {
      this.isClicked = true;
    }
  }
  @action.bound closePopup() {
      this.isClicked = false;
  }
}


export default new LoginStore();
