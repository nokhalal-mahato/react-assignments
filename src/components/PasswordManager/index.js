import { Component } from "react";
import "./index.css";
import PasswordForm from "./PasswordForm";
import PasswordItem from "./PasswordItem";
import PasswordSearch from "./PasswordSearch";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


class PasswordManager extends Component {
  state = {
    passwordCount: 0,
    passwordList: [],
    passwordSearchValue: "",
    showPassword: false,
    isEditing: false,
    website: "",
    username: "",
    password: "",
    passwordId:'',
  };

  onChangeWebsite = (value) => {
    this.setState({ website: value });
  };
  onChangeUserName = (value) => {
    this.setState({ username: value });
  };
  onChangePassword = (value) => {
    this.setState({ password: value });
  };
  onClearInput = () => {
    this.setState({ website: "", username: "", password: "" });
  };
  onStartEditingPassword = (data) => {
    this.setState({
        passwordId:data.id,
      website: data.website,
      username: data.username,
      password: data.password,
      isEditing: true,
    });
  };
  onEditPassword = (data) => {
    console.log(data);
    this.setState((prevState) => ({
      passwordList: prevState.passwordList.map((item) => {
        if (item.id == data.id) {
          return data;
        }
        return item;
      }),
    }));
    this.setState({
      isEditing: false,
      website: "",
      username: "",
      password: "",
    });
  };
  onAddPassword = (data) => {
    this.setState((prevState) => ({
      passwordList: [...prevState.passwordList, data],
      passwordCount: prevState.passwordCount + 1,
    }));
    toast("New Password Added");
  };
  onDelete = (id) => {
    this.setState((prevState) => {
      const filteredArray = prevState.passwordList.filter(
        (item) => item.id !== id
      );
      return {
        passwordList: filteredArray,
        passwordCount: prevState.passwordCount - 1,
      };
    });
    toast("Password Deleted");
    
  };

  onChangePasswordSearch = (value) => {
    this.setState({ passwordSearchValue: value });
  };
  onChangeShowPassword = () => {
    this.setState((prevState) => ({ showPassword: !prevState.showPassword }));
  };
  render() {
    const {
      passwordCount,
      passwordList,
      passwordSearchValue,
      showPassword,
      isEditing,
      website,
      username,
      passwordId,
      password,
    } = this.state;
    const filterPassword = passwordList.filter((item) =>
      item.website
        .toLocaleLowerCase()
        .includes(passwordSearchValue.toLocaleLowerCase())
    );
    return (
      <div className="password-manager-page">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          theme="light"
        />
        <ToastContainer />
        <div className="password-manager-content">
          <div className="password-manager-header">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
              alt="app-logo"
            />
          </div>
          <div className="password-manager-form-container">
            <PasswordForm
              onAddPassword={this.onAddPassword}
              isEditing={isEditing}
              website={website}
              password={password}
              username={username}
              passwordId={passwordId}
              onEditPassword={this.onEditPassword}
              onChangeWebsite={this.onChangeWebsite}
              onChangePassword={this.onChangePassword}
              onChangeUserName={this.onChangeUserName}
              onClearInput={this.onClearInput}
            />
            <div className="password-manager-form-image">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
                alt="password-manager"
              />
            </div>
          </div>
          <div className="password-manager-bottom-section">
            <div className="password-manager-bottom--top-section">
              <div className="your-password">
                <h3>Your Password</h3>
                <h4>{passwordCount}</h4>
              </div>
              <PasswordSearch
                passwordSearchValue={passwordSearchValue}
                onChangePasswordSearch={this.onChangePasswordSearch}
              />
            </div>
            <hr />
            <div className="password-item-container">
              <div className="password-manager-showpassword">
                <input type="checkbox" onChange={this.onChangeShowPassword} />
                <label>Show passwords</label>
              </div>
              <div className="password-container">
                {filterPassword.map((item) => (
                  <PasswordItem
                    key={item.id}
                    data={item}
                    onDelete={this.onDelete}
                    showPassword={showPassword}
                    onStartEditingPassword={this.onStartEditingPassword}
                  />
                ))}
              </div>
              {filterPassword.length === 0 && (
                <div className="nopassword-container">
                  <img src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png" />
                  <h3>No Passwords</h3>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PasswordManager;
