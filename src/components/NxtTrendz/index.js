import  './index.css';
import { Route, Switch ,useRouteMatch} from "react-router-dom";
import Login from './Login';
import Home from './Home';
import NotFound from './NotFound';

const NxtTrendz=()=>{   
  let { path } = useRouteMatch(); 
    return (
      <Switch>
        <Route exact path={path} component={Home} />
        <Route exact path={`${path}/login`} component={Login} />
        <Route component={NotFound} />
      </Switch>
    );

}

export default NxtTrendz;
