import { Route, Switch} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Cart from "./Routes/Cart";
import Home from "./Routes/Home";
import Login from "./Routes/Login";
import NotFound from "./Routes/NotFound";
import Product from "./Routes/Product";

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
