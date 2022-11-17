import { ChangeEvent, Component, FormEvent } from "react";
import "./index.css";
import Cookies from "js-cookie";
import { Redirect, RouteComponentProps, withRouter } from "react-router-dom";
import LoginFormStore from "../../Stores/LoginFormStore";
import { observer } from "mobx-react";
import { WithTranslation, withTranslation } from "react-i18next";

type PropsType=RouteComponentProps & WithTranslation &{}

@observer
class LoginForm extends Component<PropsType> {
  loginFormStore = LoginFormStore;

  onSubmitSuccess = (jwt_token: string) => {
    Cookies.set("jwt_token", jwt_token, { expires: 1 });
    const { history } = this.props;
    history.replace("/JobbyTypescriptI18n");
  };
  onSubmitFail = (error_msg: string) => {
    this.loginFormStore.setError(true);
    this.loginFormStore.setErrorMsg(error_msg);
  };

  submitForm = async (event: FormEvent) => {
    event.preventDefault();
    const { username, password } = this.loginFormStore;
    try {
      const userDetails = { username, password };
      const response = await fetch("https://apis.ccbp.in/login", {
        method: "POST",
        body: JSON.stringify(userDetails),
      });
      const data = await response.json();
      if (response.ok) {
        this.onSubmitSuccess(data.jwt_token);
      } else {
        this.onSubmitFail(data.error_msg);
      }
    } catch (err: any) {
      console.log(err);
      this.onSubmitFail(err.message);
    }
  };

  onChangeUsername = (event: ChangeEvent<HTMLInputElement>) => {
    this.loginFormStore.setUserName(event.target.value);
  };

  onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    this.loginFormStore.setPassword(event.target.value);
  };

  render() {
    if (Cookies.get("jwt_token")) {
      return <Redirect to="/JobbyTypescriptI18n" />;
    }
    const { username, password, error, error_msg } = this.loginFormStore;
    const { t } = this.props;
    return (
      <form className="jobby-form-container" onSubmit={this.submitForm}>
        <div className="jobby-login-website-logo">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
          />
        </div>
        <label className="jobby-input-label">
          {t("username").toUpperCase()}
        </label>
        <input
          type="text"
          id="username"
          className="jobby-input-field"
          value={username}
          placeholder={t("username")!}
          onChange={this.onChangeUsername}
        />
        <label className="jobby-input-label">
          {t("password").toUpperCase()}
        </label>
        <input
          type="password"
          id="password"
          className="jobby-input-field"
          value={password}
          placeholder={t("password")!}
          onChange={this.onChangePassword}
        />
        <button type="submit" className="jobby-login-button">
          Login
        </button>
        {error && <p className="jobby-error-message">*{error_msg}</p>}
      </form>
    );
  }
}

export default withTranslation()(withRouter(LoginForm));
