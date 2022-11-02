import { Component } from "react";
import Cookies from "js-cookie";
import { Redirect, withRouter } from "react-router-dom";
import NxtwatchContext from "../../Contexts/NxtwatchContext";
import {
  ErrorMessage,
  FormContainer,
  InputField,
  InputLabel,
  LoginButton,
  PasswordLabel,
  WebsiteImage,
} from "./styledComponent";

class LoginForm extends Component {
  state = {
    username: "",
    password: "",
    showPassword: false,
    error: false,
    error_msg: "",
  };

  onSubmitSuccess = (jwt_token) => {
    Cookies.set("jwt_token", jwt_token, { expires: 1 });
    const { history } = this.props;
    history.replace("/Nxtwatch");
  };
  onSubmitFail = (error_msg) => {
    this.setState({ error: true, error_msg: error_msg });
  };
  onShowPassword = () => {
    this.setState((prevState) => ({ showPassword: !prevState.showPassword }));
  };
  submitForm = async (event) => {
    event.preventDefault();
    const { username, password } = this.state;
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
    } catch (err) {
      console.log(err);
      this.onSubmitFail();
    }
  };

  onChangeUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    const {showPassword}=this.state;
    if (Cookies.get("jwt_token")) {
      return <Redirect to="/Nxtwatch" />;
    }
    const { username, password, error, error_msg } = this.state;
    return (
      <NxtwatchContext.Consumer>
        {(value) => {
          const { isDarkMode } = value;
          return (
            <FormContainer onSubmit={this.submitForm} darkMode={isDarkMode}>
              <WebsiteImage
                src={
                  isDarkMode
                    ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                    : "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                }
                alt="website logo"
              />
              <InputLabel darkMode={isDarkMode}>USERNAME</InputLabel>
              <InputField
                type="text"
                id="username"
                value={username}
                placeholder="Username"
                onChange={this.onChangeUsername}
                darkMode={isDarkMode}
              />
              <InputLabel darkMode={isDarkMode}>PASSWORD</InputLabel>
              <InputField
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                placeholder="Password"
                onChange={this.onChangePassword}
                darkMode={isDarkMode}
              />
              <div>
                <input type="checkbox" onChange={this.onShowPassword} />
                <PasswordLabel darkMode={isDarkMode}>
                  Show password
                </PasswordLabel>
              </div>
              <LoginButton type="submit">Login</LoginButton>
              {error && <ErrorMessage>*{error_msg}</ErrorMessage>}
            </FormContainer>
          );
        }}
      </NxtwatchContext.Consumer>
    );
  }
}

export default withRouter(LoginForm);
