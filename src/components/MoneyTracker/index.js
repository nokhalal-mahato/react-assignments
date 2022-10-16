import { Component } from "react";
import "./index.css";
import moneydetail from "./moneydetail";
import MoneyDetails from "./MoneyDetails";
import MoneyForm from "./MoneyForm";
import TransactionItem from "./TransactionItem";

class MoneyTracker extends Component {
  state = { moneydetailList: moneydetail, transactionList: [] };

  onAddTransaction = (data) => {
    console.log(data);
    this.setState((prevState) => ({
      transactionList: [...prevState.transactionList, data],
    }));
    if (data.type == "Income") {
      this.setState((prevState) => ({
        moneydetailList: prevState.moneydetailList.map((item) => {
          if (item.id == "total") {
            return { ...item, balance: item.balance + +data.amount };
          }
          if (item.id == "income") {
            return { ...item, balance: item.balance + +data.amount };
          }
          return item;
        }),
      }));
    } else {
      this.setState((prevState) => ({
        moneydetailList: prevState.moneydetailList.map((item) => {
          if (item.id == "expense") {
            return { ...item, balance: item.balance + +data.amount };
          }
          if (item.id == "total") {
            return { ...item, balance: item.balance - +data.amount };
          }
          return item;
        }),
      }));
    }
  };

  onRemovetransaction=(data)=>{
    this.setState((prevState) => ({
      transactionList: [...prevState.transactionList, data],
    }));
    if (data.type == "Income") {
      this.setState((prevState) => ({
        moneydetailList: prevState.moneydetailList.map((item) => {
          if (item.id == "total") {
            return { ...item, balance: item.balance - +data.amount };
          }
          if (item.id == "income") {
            return { ...item, balance: item.balance - +data.amount };
          }
          return item;
        }),
      }));
    } else {
      this.setState((prevState) => ({
        moneydetailList: prevState.moneydetailList.map((item) => {
          if (item.id == "expense") {
            return { ...item, balance: item.balance - +data.amount };
          }
          if (item.id == "total") {
            return { ...item, balance: item.balance + +data.amount };
          }
          return item;
        }),
      }));
    }
  }
  onDeleteTransaction = (id) => {
    const {transactionList,moneydetailList}=this.state;
    const tranaction=transactionList.find((item)=>item.id==id);
    this.onRemovetransaction(tranaction);
    this.setState((prevState) => {
      const filteredArray = prevState.transactionList.filter(
        (item) => item.id !== id
      );
      return { transactionList: filteredArray };
    });
  };
  render() {
    const { moneydetailList, transactionList } = this.state;
    return (
      <div className="moneytracker-page">
        <div className="moneytracker-page-content">
          <div className="moneytracker-intro-section">
            <h1 className="moneytracker-header">Hi, Nokhalal</h1>
            <p className="moneytracker-message">
              Welcome back to your{" "}
              <span className="moneytracker-highlighted-message">
                Money Manager
              </span>
            </p>
          </div>
          <div className="money-details-container">
            {moneydetailList.map((item) => (
              <MoneyDetails data={item} key={item.id}/>
            ))}
          </div>
          <div className="moneytracker-bottom-section">
            <div className="moneytracker-form-container">
              <h3 className="moneytracker-form-header">Add Transaction</h3>
              <MoneyForm onAddTransaction={this.onAddTransaction} />
            </div>
            <div className="moneytracker-transaction-section">
              <h3 className="moneytracker-tranaction-header">History</h3>
              <table className="moneytracker-transaction-container">
                <thead>
                  <th>Title</th>
                  <th>Amount</th>
                  <th>Type</th>
                  <th ></th>
                </thead>
                <tbody>
                  {transactionList.map((item) => (
                    <TransactionItem
                      data={item}
                      onDeleteTransaction={this.onDeleteTransaction}
                      key={item.id}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MoneyTracker;
