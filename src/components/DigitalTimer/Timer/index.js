import { Component } from "react";
import './index.css';

class Timer extends Component{
    render(){
        const {time,start,timer}=this.props;
        const minute = Math.floor((time - timer) / 60);
        const second= (time-timer) - (minute*60);
        return (
          <div className="digital-timer">
            <div className="digitalTimer-content">
              <h1 className="digitaltimer-time">
                {minute < 10 ? "0" + minute : minute}:
                {second < 10 ? "0" + second : second}
              </h1>
              <h3 className="digitaltimer-status">{start ? "Running" : "Paused"}</h3>
            </div>
          </div>
        );
    }
}
export default Timer;