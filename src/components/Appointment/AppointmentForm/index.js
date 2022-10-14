import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./index.css";

class AppointmentForm extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.dateRef = React.createRef();
  }

  onSubmithandler = (event) => {
    event.preventDefault();
    const data = {
      id: uuidv4(),
      title: this.inputRef.current.value,
      date: new Date(this.dateRef.current.value),
      star: false,
    };
    this.inputRef.current.value = "";
    this.dateRef.current.value = "";
    this.props.onAddAppointment(data);
  };
  render() {
    return (
      <div className="appointment-form">
        <form onSubmit={this.onSubmithandler}>
          <label>Title</label>
          <input
            type="title"
            placeholder="Title"
            ref={this.inputRef}
            required
          />
          <br/>
          <label>Date</label>
          <input ref={this.dateRef} type="date" required />
          <button type="submit" className="appointment-btn">
            Add
          </button>
        </form>
      </div>
    );
  }
}
export default AppointmentForm;
