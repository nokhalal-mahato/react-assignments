import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./index.css";

class MoneyForm extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.amountRef = React.createRef();
    this.typeRef = React.createRef();
  }

  onSubmithandler = (event) => {
    event.preventDefault();
    const data = {
      id: uuidv4(),
      title: this.inputRef.current.value,
      amount: this.amountRef.current.value,
      type: this.typeRef.current.value,
    };
    this.inputRef.current.value = "";
    this.amountRef.current.value = "";
    this.typeRef.current.value = "Income";
    this.props.onAddTransaction(data);
  };
  render() {
    return (
      <div className="moneytracker-form">
        <form onSubmit={this.onSubmithandler}>
          <label>Title</label>
          <input
            type="title"
            placeholder="Title"
            ref={this.inputRef}
            required
          />
          <label>Amount</label>
          <input ref={this.amountRef} type="number" required />
          <label>Type</label>
          <select
            type="type"
            ref={this.typeRef}
            required
          >
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
          <button type="submit" className="moneytracker-btn">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default MoneyForm;
