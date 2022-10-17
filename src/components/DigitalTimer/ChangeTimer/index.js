import { Component } from "react";
import "./index.css";

class ChangeTimer extends Component {

    increaseTimerHandler=()=>{
        this.props.increaseTimer();
    }

    decreaseTimerHandler=()=>{
        this.props.decreaseTimer();
    }
  render() {
    const {time}=this.props;
    return (
      <div className="changeTimer-container">
        <p>Set Timer Limit</p>
        <div className="changeTimer-content">
          <h1 onClick={this.decreaseTimerHandler}>-</h1>
          <div className="changeTimer">
            <h2>{time / 60}</h2>
          </div>
          <h1 onClick={this.increaseTimerHandler}>+</h1>
        </div>
      </div>
    );
  }
}
export default ChangeTimer;
