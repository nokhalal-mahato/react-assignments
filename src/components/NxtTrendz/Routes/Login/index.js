import { Component } from "react";
import LoginForm from "../../Components/LoginForm";

import "./index.css";

class Login extends Component{
    render(){
        return (
          <div className="nxttrendz-login-page">
            <div className="nxttrendz-login">
              <div className="nxttrendz-login-iamge">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
                  alt="website login"
                />
              </div>
              <LoginForm />
            </div>
          </div>
        );
    }
}

export default Login;