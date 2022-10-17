import { Component } from "react";
import "./index.css";

class TimerActionBtn extends Component {

    startBtnHandler=()=>{
        this.props.onStart()
    }

    resetBtnHandler=()=>{
        this.props.onReset()
    }
  render() {
    const {start}=this.props;
    return (
      <div className="timer-action-btns">
        <div className="digital-timer-start-field">
          {start ? (
            <>
              <img
                src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
                onClick={this.startBtnHandler}
              />
              <h3>Pause</h3>
            </>
          ) : (
            <>
              <img
                src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                onClick={this.startBtnHandler}
              />
              <h3>Start</h3>
            </>
          )}
        </div>
        <div className="digital-timer-Reset-field">
          <img
            src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
            onClick={this.resetBtnHandler}
          />
          <h3>Reset</h3>
        </div>
      </div>
    );
  }
}
export default TimerActionBtn;
