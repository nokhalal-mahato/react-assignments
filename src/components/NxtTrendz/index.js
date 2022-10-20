import  './index.css';
import { Route, Switch } from "react-router-dom";
import Login from './Login';
import Home from './Home';
import NotFound from './NotFound';

const NxtTrendz=()=>{    
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    );

}

export default NxtTrendz;
