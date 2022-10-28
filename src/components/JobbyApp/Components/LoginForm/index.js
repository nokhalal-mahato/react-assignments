import { Component } from "react";
import "./index.css";
import Cookies from "js-cookie";
import { Redirect, withRouter } from "react-router-dom";

class LoginForm extends Component {
  state = {
    username: "",
    password: "",
    error: false,
    error_msg: "",
  };

  onSubmitSuccess = (jwt_token) => {
    Cookies.set("jwt_token", jwt_token, { expires: 1 });
    const { history } = this.props;
    history.replace("/JobbyApp");
  };
  onSubmitFail = (error_msg) => {
    this.setState({ error: true, error_msg: error_msg });
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
    if (Cookies.get("jwt_token")) {
      return <Redirect to="/JobbyApp" />;
    }
    const { username, password, error, error_msg } = this.state;
    return (
      <form className="jobby-form-container" onSubmit={this.submitForm}>
        <div className="jobby-login-website-logo">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
          />
        </div>
        <label className="jobby-input-label">USERNAME</label>
        <input
          type="text"
          id="username"
          className="jobby-input-field"
          value={username}
          placeholder="Username"
          onChange={this.onChangeUsername}
        />
        <label className="jobby-input-label">PASSWORD</label>
        <input
          type="password"
          id="password"
          className="jobby-input-field"
          value={password}
          placeholder="Password"
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

export default withRouter(LoginForm);
