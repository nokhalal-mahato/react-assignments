import { Component } from "react";
import CartContext from "../../Context/CartContext";
import CartItem from "../CartItem";
import './index.css';

class CartListView extends Component {
  render() {
    return (
      <CartContext.Consumer>
        {(value) => {
          const { cartList, onClearCartList } = value;
          const totalamount = () => {
            let amount = 0;
            for (let item of cartList) {
              amount += item.price * item.quantity;
            }
            return amount;
          };
          return (
            <div className="cart-list-view">
              <h1 className="cart-list-view-header-heading">My Cart</h1>
              <button className="cart-remove-all" onClick={onClearCartList}>
                Remove All
              </button>
              <div className="cart-list-view-container">
                {cartList.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </div>
              <div className="nxttrendz-order-total">
                <p className="nxttrendz-order-total-amount">
                  Order Total: 
                  <span className="cart-list-total-amount">
                     Rs {totalamount()} /-
                  </span>
                </p>
                <p className="total-item-in-cart">
                  {cartList.length} items in cart
                </p>
                <button className="nxttrendz-checkout-btn">Checkout</button>
              </div>
            </div>
          );
        }}
      </CartContext.Consumer>
    );
  }
}

export default CartListView;