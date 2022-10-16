import { Component } from "react";
import AppointmentForm from "./AppointmentForm";
import AppointmentItem from "./AppointmentItem";
import "./index.css";

class Appointment extends Component {
  state = { appointmentList: [], starfilter: false };

  onfilterStar = () => {
    this.setState((prevState) => ({ starfilter: !prevState.starfilter }));
  };

  onStar = (id) => {
    this.setState((prevState) => ({
      appointmentList: prevState.appointmentList.map((item) => {
        if (item.id == id) {
          return { ...item, star: !item.star };
        }
        return item;
      }),
    }));
  };
  onAddAppointment = (data) => {
    console.log(data);
    this.setState((prevState) => ({
      appointmentList: [...prevState.appointmentList, data],
    }));
  };
  render() {
    const { appointmentList, starfilter } = this.state;
    const appointmentList1 = appointmentList.map((item) => (
      <AppointmentItem data={item} onStar={this.onStar} key={item.id}/>
    ));
    const appointmentList2 = appointmentList
      .filter((item) => item.star === true)
      .map((item) => <AppointmentItem data={item} onStar={this.onStar} />);
    return (
      <div className="appointment-page">
        <div className="appointment-page-content">
          <div className="appointment-top-section">
            <div className="appointment-topleft-section">
              <h1 className="appointment-page-header">Add Appointments</h1>
              <AppointmentForm onAddAppointment={this.onAddAppointment} />
            </div>
            <div className="appointment-main-image">
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
              />
            </div>
          </div>
          <hr />
          <div className="appointment-contianer-header">
            <h2>Appointments</h2>
            <button
              onClick={this.onfilterStar}
              className={`appointment-starfilter-btn ${
                starfilter ? "appointment-starfilter-active" : ""
              }`}
            >
              Starred
            </button>
          </div>
          <div className="appointment-contianer">
            {starfilter ? appointmentList2 : appointmentList1}
          </div>
        </div>
      </div>
    );
  }
}
export default Appointment;
