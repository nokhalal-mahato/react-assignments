import { Component } from "react";
import "./index.css";

class MoneyDetails extends Component {
  render() {
      const {data}=this.props;
    return (
      <div
        className="moneydetail-item"
        id={data.id}
        style={{ backgroundColor: data.bgcolor,borderColor:data.bordercolor }}
      >
        <img src={data.imageUrl} />
        <div className="moneydetail-content">
          <p className="moneydetail-item-name">Your {data.text}</p>
          <h2 className="moneydetail-item-balance">Rs {data.balance}</h2>
        </div>
      </div>
    );
  }
}
export default MoneyDetails;
