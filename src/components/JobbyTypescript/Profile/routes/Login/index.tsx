import { Component } from "react";
import LoginForm from "../../components/LoginForm";

import "./index.css";

class Login extends Component {
  render() {
    return (
      <div className="jobby-login-page">
          <LoginForm />
      </div>
    );
  }
}

export default Login;
