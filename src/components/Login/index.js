import { Component } from "react";
import './index.css'
class Login extends Component{
    state={loginState:false};

    loginHandler=()=>{
        this.setState((prevState)=>({loginState:!prevState.loginState}));
    }
    render(){
        const {loginState}=this.state;
        return(
            <div className="login-page">
                <div className="login-content">
                    <h1 className="login-header">{loginState ? 'Welcome User' : 'Please Login'}</h1>
                    <button className="login-btn" onClick={this.loginHandler}>{loginState ? 'Logout' : 'Login'}</button>
                </div>
            </div>
        );
    }
}

export default Login;