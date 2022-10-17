import React, { Component } from "react";
import DigitalTimer from ".";
import { v4 as uuidv4 } from "uuid";

class DigitalTimerPage extends Component {
  constructor() {
    super();
    const id = uuidv4();
    this.state = { timerArray: [{ time: 25 * 60, start: true, timer: 0,id:id }] };
  }
  addTimerHandler = () => {
    const id = uuidv4();
    this.setState((prevState) => ({
      timerArray: [
        ...prevState.timerArray,
        { time: 25 * 60, start: true, timer: 0,id:id },
      ],
    }));
  };
  onDeleteTimer=(id)=>{
    console.log(id)
    this.setState((prevState)=>({timerArray:prevState.timerArray.filter((item)=>item.id!==id)}));
  }
  render() {
    const { timerArray } = this.state;
    return (
      <div>
        {timerArray.map((item)=><DigitalTimer key={item.id} time={item.time} start={item.start} timer={item.timer} id={item.id} onDeleteTimer={this.onDeleteTimer}/>)}
        <button onClick={this.addTimerHandler} className="add-timer-btn">Add Timer</button>
      </div>
    );
  }
}

export default DigitalTimerPage;
