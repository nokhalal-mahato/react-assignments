import { useState } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import CartContext from "./Context/CartContext";
import ProtectedRoute from "./ProtectedRoute";
import Cart from "./Routes/Cart";
import Home from "./Routes/Home";
import Login from "./Routes/Login";
import NotFound from "./Routes/NotFound";
import Product from "./Routes/Product";
import ProductDetails from "./Routes/ProductDetails";

const NxtTrendz = () => {
  const [cartList, setCartList] = useState([]);

  const onAddItem = (product) => {
    const productInList = cartList.find((item) => item.id == product.id);
    if (productInList) {
      setCartList((cartList) =>
        cartList.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + product.quantity };
          }
          return item;
        })
      );
      return;
    }
    setCartList((cartList) => [...cartList, product]);
  };
  const onDeleteItem = (id) => {
    setCartList((cartList) => cartList.filter((item) => item.id !== id));
  };
  const onClearCartList = () => {
    setCartList([]);
  };

  const onIncreaseQuantity = (product) => {
    setCartList((cartList) =>
      cartList.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      })
    );
  };
  const onDecreaseQuantity = (product) => {
    if (product.quantity === 1) {
      return onDeleteItem(product.id);
    }
    setCartList((cartList) =>
      cartList.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
    );
    
  };
  return (
    <CartContext.Provider
      value={{
        cartList,
        onAddItem,
        onDeleteItem,
        onClearCartList,
        onDecreaseQuantity,
        onIncreaseQuantity,
      }}
    >
      <Switch>
        <Route exact path="/NxtTrendz/login" component={Login} />
        <ProtectedRoute exact path="/NxtTrendz" component={Home} />
        <ProtectedRoute
          exact
          path={`/NxtTrendz/products`}
          component={Product}
        />
        <ProtectedRoute exact path={`/NxtTrendz/cart`} component={Cart} />
        <ProtectedRoute
          exact
          path={`/NxtTrendz/products/:id`}
          component={withRouter(ProductDetails)}
        />
        {/* <Route exact path="/NxtTrendz" component={Home} />
        <Route exact path="/NxtTrendz/products" component={Product} />
        <Route exact path="/NxtTrendz/cart" component={Cart} /> */}
        <Route component={NotFound} />
      </Switch>
    </CartContext.Provider>
  );
};

export default NxtTrendz;
