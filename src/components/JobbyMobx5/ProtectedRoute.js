import Cookies from "js-cookie";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute=(props)=>{
    if (!Cookies.get("jwt_token")) {
      return <Redirect to="/JobbyMobx5/login" />;
    }
    return <Route {...props}/>;
}

export default ProtectedRoute;