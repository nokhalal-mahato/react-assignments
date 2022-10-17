import { Component } from "react";
import ChangeTimer from "./ChangeTimer";
import './index.css'
import Timer from "./Timer";
import TimerActionBtn from "./TimerActionBtn";

class DigitalTimer extends Component {
  constructor(props) {
    super(props);
    this.state = { time: props.time, start: props.start, timer: props.timer };
  }
  componentDidMount() {
    this.timerInterval = setInterval(this.tick, 1000);
    //     const localData = JSON.parse(localStorage.getItem("timerData"));
    //     if (localData) {
    //       this.setState({
    //         time: localData.time,
    //         start: true,
    //         timer: localData.timer,
    //       });
    //     }
    //     window.addEventListener("beforeunload", () => {
    //         const { start, time, timer } = this.state;
    //       console.log("Before Unload");
    //       localStorage.setItem(
    //         "timerData",
    //         JSON.stringify({ time: time, start: start, timer: timer })
    //       );
    //     });
  }
  componentWillUnmount() {
    clearInterval(this.timerInterval);
  }
  onStart = () => {
    const { start, time, timer } = this.state;
    clearInterval(this.timerInterval);
    this.setState((prevState) => ({ start: !prevState.start }));
    console.log(start);
    if (time - timer == 0) {
      this.setState({ timer: 0 });
    }
    if (!start) {
      this.timerInterval = setInterval(this.tick, 1000);
    }
  };
  tick = () => {
    const { time, timer } = this.state;
    if (time - timer - 1 === 0) {
      this.setState({ start: false });
      clearInterval(this.timerInterval);
    }
    this.setState((prevState) => ({ timer: prevState.timer + 1 }));
  };
  onReset = () => {
    this.setState({ timer: 0, start: false });
    clearInterval(this.timerInterval);
  };

  decreaseTimer = () => {
    if (!this.state.start) {
      this.setState((prevState) => ({ time: prevState.time - 60 }));
    }
  };

  increaseTimer = () => {
    if (!this.state.start) {
      this.setState((prevState) => ({
        time: prevState.time + 60,
      }));
    }
  };

  deleteTimerHandler=()=>{
    const {onDeleteTimer,id}=this.props;
    onDeleteTimer(id);
  }
  render() {
    const { time, start, timer } = this.state;
    return (
      <div className="digital-timer-page">
        <h1>Digital Timer</h1>
        <div className="digital-timer-content">
          <Timer time={time} start={start} timer={timer} />
          <div className="digital-timer-controls">
            <TimerActionBtn
              start={start}
              onStart={this.onStart}
              onReset={this.onReset}
            />
            <ChangeTimer
              time={time}
              increaseTimer={this.increaseTimer}
              decreaseTimer={this.decreaseTimer}
            />
          </div>
        </div>
        <button onClick={this.deleteTimerHandler} className="delete-timer-btn">Delete Timer</button>
      </div>
    );
  }
}

export default DigitalTimer;