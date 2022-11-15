import Cookies from "js-cookie";
import { ComponentClass } from "react";
import { Redirect, Route } from "react-router-dom";


type PropsType = {
  exact: boolean;
  path: string;
  component: ComponentClass;
};

const ProtectedRoute=(props:PropsType)=>{
    if (!Cookies.get("jwt_token")) {
      return <Redirect to="/JobbyTypescript/login" />;
    }
    return <Route {...props}/>;
}

export default ProtectedRoute;