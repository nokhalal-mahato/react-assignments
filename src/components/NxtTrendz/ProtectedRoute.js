import Cookies from "js-cookie";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute=(props)=>{
    if (!Cookies.get("jwt_token")) {
      return <Redirect to="/NxtTrendz/login" />;
    }
    return <Route {...props}/>;
}

export default ProtectedRoute;