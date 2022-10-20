import { Component } from "react";
import "./index.css";

class LoginForm extends Component {
  state = {
    username: "",
    password: "",
  };

  onSubmitSuccess = () => {
    const { history } = this.props;
    history.replace("/");
  };
  onSubmitFail = () => {};

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
        this.onSubmitSuccess();
      } else {
        this.onSubmitFail();
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
    const { username, password } = this.state;
    return (
      <div className="nxttrendz-login-form-container">
        <form className="nxttrendz-form-container" onSubmit={this.submitForm}>
          <div className="nxttrendz-login-website-logo">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />
          </div>
          <div className="input-container">
            <label className="input-label" htmlFor="username">
              USERNAME
            </label>
            <input
              type="text"
              id="username"
              className="username-input-filed"
              value={username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="input-container">
            <label className="input-label" htmlFor="password">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              className="password-input-filed"
              value={password}
              onChange={this.onChangePassword}
            />
          </div>
          <button type="submit" className="nxttrendz-login-button">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
