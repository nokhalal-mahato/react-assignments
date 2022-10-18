import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./index.css";

class PasswordForm extends Component {

  onChangeWebsite = (event) => {
    this.props.onChangeWebsite(event.target.value );
  };
  onChangeUserName = (event) => {
    this.props.onChangeUserName(event.target.value );
  };
  onChangePassword = (event) => {
    this.props.onChangePassword(event.target.value );
  };

  onSubmithandler = (event) => {
    event.preventDefault();
    const {
      website,
      username,
      password,
      passwordId,
      isEditing,
      onEditPassword,
      onClearInput,
    } = this.props;

    if (isEditing) {
      onEditPassword({
        id:passwordId,
        website: website,
        username: username,
        password: password,
      });
    } else {
      const data = {
        id: uuidv4(),
        website: website,
        username: username,
        password: password,
      };
      this.props.onAddPassword(data);
    }
    onClearInput({ website: "", username: "", password: "" });
  };
  render() {
    const { website, username, password, isEditing, passwordData } = this.props;
    return (
      <div className="password-form">
        <h3 className="passowrd-form-header">Add New Password</h3>
        <form onSubmit={this.onSubmithandler}>
          <div className="password-manager-field">
            <div className="password-manager-logo">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website logo"
              />
            </div>
            <div className="password-manager-input-container">
              <input
                type="text"
                placeholder="Enter Website"
                className="password-manager-input"
                value={website}
                onChange={this.onChangeWebsite}
              />
            </div>
          </div>
          <div className="password-manager-field">
            <div className="password-manager-logo">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="user logo"
              />
            </div>
            <div className="password-manager-input-container">
              <input
                type="text"
                placeholder="Enter Username"
                className="password-manager-input"
                value={username}
                onChange={this.onChangeUserName}
              />
            </div>
          </div>
          <div className="password-manager-field">
            <div className="password-manager-logo">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password logo"
              />
            </div>
            <div className="password-manager-input-container">
              <input
                type="password"
                placeholder="Enter Password"
                className="password-manager-input"
                value={password}
                onChange={this.onChangePassword}
              />
            </div>
          </div>
          <button type="submit" className="passwordform-btn">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default PasswordForm;
