import { Component } from "react";
import CartContext from "../../Context/CartContext";
import "./index.css";
import {TiDelete} from 'react-icons/ti';

class CartItem extends Component {

  render() {
    return (
      <CartContext.Consumer>
        {(value) => {
          const { onIncreaseQuantity, onDecreaseQuantity, onDeleteItem } =
            value;
          const { data } = this.props;
          const onDeleteHandler = () => {
            onDeleteItem(data.id);
          };
          const onClickIncreaseQuantity = () => {
            onIncreaseQuantity(data);
          };
          const onClickDecreaseQuantity = () => {
            onDecreaseQuantity(data);
          };
          return (
            <div className="cart-item">
              <div className="cart-item-image">
                <img src={data.imageUrl} alt={data.title} />
              </div>
              <div className="cart-item-container">
                <div className="cart-item-detail">
                  <h3 className="cart-item-title">{data.title}</h3>
                  <p className="cart-item-brand">by {data.brand}</p>
                </div>
                <div className="cart-item-quantity-control">
                  <button
                    className="cart-item-quantity"
                    onClick={onClickDecreaseQuantity}
                  >
                    -
                  </button>
                  <span className="cart-item-quantity-value">
                    {data.quantity}
                  </span>
                  <button
                    className="cart-item-quantity"
                    onClick={onClickIncreaseQuantity}
                  >
                    +
                  </button>
                </div>
                <div className="cart-item-last-section">
                  <h2 className="cart-item-price">
                    Rs {data.quantity * data.price} /-
                  </h2>
                  <button
                    className="cart-item-remove"
                    onClick={onDeleteHandler}
                  >
                    Remove
                  </button>
                </div>
                <TiDelete
                  onClick={onDeleteHandler}
                  className="cart-item-delete-icon"
                />
              </div>
            </div>
          );
        }}
      </CartContext.Consumer>
    );
  }
}

export default CartItem;
