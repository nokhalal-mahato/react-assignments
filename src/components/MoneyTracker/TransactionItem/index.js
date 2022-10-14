import { Component } from "react";
import "./index.css";

class TransactionItem extends Component {
  onDeletehandler=()=>{
    const { data, onDeleteTransaction } = this.props;
    onDeleteTransaction(data.id);
  }
  render() {
    const { data } = this.props;
    return (
      <tr className="transaction-item">
        <td>{data.title}</td>
        <td>{data.amount}</td>
        <td>{data.type}</td>
        <td>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            onClick={this.onDeletehandler}
          />
        </td>
      </tr>
    );
  }
}
export default TransactionItem;
