import { Component } from "react";
import "./index.css";

class LoginForm extends Component {
  state = {
    username: "",
    password: "",
    error:false,
  };

  onSubmitSuccess = () => {
    const { history } = this.props;
    history.replace("/");
  };
  onSubmitFail = () => {
    this.setState({error:true});
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
    const { username, password ,error} = this.state;
    return (
      <form className="nxttrendz-form-container" onSubmit={this.submitForm}>
        <div className="nxttrendz-login-website-logo">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
        </div>
        <div className="nxttrendz-input-container">
          <label className="nxttrendz-input-label">USERNAME</label>
          <input
            type="text"
            id="username"
            className="nxttrendz-input-filed"
            value={username}
            onChange={this.onChangeUsername}
          />
        </div>
        <div className="nxttrendz-input-container">
          <label className="nxttrendz-input-label">PASSWORD</label>
          <input
            type="password"
            id="password"
            className="nxttrendz-input-filed"
            value={password}
            onChange={this.onChangePassword}
          />
        </div>
        {error && (
          <p className="nxttrendz-error-message">
            *Username and password didn't match
          </p>
        )}
        <button type="submit" className="nxttrendz-login-button">
          Login
        </button>
      </form>
    );
  }
}

export default LoginForm;
