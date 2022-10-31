import NxtTrendzNav from "../NxtTrendzNav";
import { Component } from "react";
import "./index.css";
import CartContext from "../../Context/CartContext";
import EmptyCartView from "../../Components/EmptyCartView";
import CartListView from "../../Components/CartListView";

class Cart extends Component {
  render() {
    return (
      <CartContext.Consumer>
        {(value) => {
          const { cartList } = value;
          return (
            <div className="nxttrendz-cart-page">
              <NxtTrendzNav />
              <div className="nxttrendz-cart-container">
                {cartList.length === 0 ? <EmptyCartView /> : <CartListView />}
              </div>
            </div>
          );
        }}
      </CartContext.Consumer>
    );
  }
}
export default Cart;
