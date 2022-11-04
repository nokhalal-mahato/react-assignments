import { Component } from "react";
import LoginForm from "../../Components/LoginForm";
import NxtwatchContext from "../../Contexts/NxtwatchContext";
import { LoginPage } from "./styleComponent";

class Login extends Component {
  render() {
    return (
      <NxtwatchContext.Consumer>
        {(value) => {
          const { isDarkMode } = value;
          return <LoginPage darkMode={isDarkMode}><LoginForm/></LoginPage>;
        }}
      </NxtwatchContext.Consumer>
    );
  }
}

export default Login;
