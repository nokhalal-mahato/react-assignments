import Cookies from "js-cookie";
import { Redirect, Route } from "react-router-dom";
import Home from "./Home";

const ProtectedRoute=(props)=>{
    if (!Cookies.get("jwt_token")) {
      return <Redirect to="/NxtTrendz/login" />;
    }
    return <Route {...props}/>;
}

export default ProtectedRoute;