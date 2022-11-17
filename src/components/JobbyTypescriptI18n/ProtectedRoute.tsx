import Cookies from "js-cookie";
import { ComponentClass } from "react";

import { Redirect, Route } from "react-router-dom";


type PropsType = {
  exact: boolean;
  path: string;
  component: any ;
};

const ProtectedRoute=(props:PropsType)=>{
    if (!Cookies.get("jwt_token")) {
      return <Redirect to="/JobbyTypescriptI18n/login" />;
    }
    return <Route {...props}/>;
}

export default ProtectedRoute;