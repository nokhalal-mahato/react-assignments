import { Route, Switch} from "react-router-dom";
import Login from './Login';
import Home from './Home';
import NotFound from './NotFound';

import Cart from './Cart';
import Product from "./Product";
import ProtectedRoute from "./ProtectedRoute";

const NxtTrendz=()=>{   
    return (
      <Switch>
        <Route exact path="/NxtTrendz/login" component={Login} />
        <ProtectedRoute exact path="/NxtTrendz" component={Home} />
        <ProtectedRoute
          exact
          path={`/NxtTrendz/products`}
          component={Product}
        />
        <ProtectedRoute exact path={`/NxtTrendz/cart`} component={Cart} />
        {/* <Route exact path="/NxtTrendz" component={Home} />
        <Route exact path="/NxtTrendz/products" component={Product} />
        <Route exact path="/NxtTrendz/cart" component={Cart} /> */}
        <Route component={NotFound} />
      </Switch>
    );

}

export default NxtTrendz;
