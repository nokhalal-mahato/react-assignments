import Cookies from "js-cookie";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute=(props)=>{
    if (!Cookies.get("jwt_token")) {
      return <Redirect to="/JobbyI18n/login" />;
    }
    return <Route {...props}/>;
}

export default ProtectedRoute;