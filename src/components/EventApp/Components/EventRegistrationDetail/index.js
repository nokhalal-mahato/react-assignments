import { Component } from "react";
import "./index.css";
import ApiStatusConstant from "../../Constants/ApiStatusConstant";

class EventRegistrationDetail extends Component {
  regsiterEvntHandler = () => {
    const { event, registerEvent } = this.props;
    registerEvent(event.id);
  };
  renderClosedRegistration = () => {
    return (
      <div className="event-registration-detail">
        <div className="registration-closed-image">
          <img src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png" />
        </div>
        <h2 className="event-registration-title">
          Registrations Are closed Now!
        </h2>
        <p className="event-registration-close-description">
          Stay tuned. We will reopen the registration soon!
        </p>
      </div>
    );
  };
  renderRegisteredRegistration = () => {
    return (
      <div className="event-registration-detail">
        <div className="registration-registered-image">
          <img src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png" />
        </div>
        <h2 className="event-registration-title">
          You have already registered for the event
        </h2>
      </div>
    );
  };
  renderNoEvent = () => {
    return (
      <div className="event-no-event">
        <h2 className="event-registration-title">
          Click an event to view its registration details
        </h2>
      </div>
    );
  };
  renderYetToRegistration = () => {
    return (
      <div className="event-registration-detail">
        <div className="registration-open-image">
          <img src="https://assets.ccbp.in/frontend/react-js/events-register-img.png" />
        </div>
        <p className="event-registration-description">
          A live performance brings so much to your relationship with dance.
          Seeing dance live can ofthen make you fall totally in love with this
          beautiful art form
        </p>
        <button
          className="event-register-btn"
          onClick={this.regsiterEvntHandler}
        >
          Register Here
        </button>
      </div>
    );
  };
  render() {
    const { registrationStatus } = this.props;
    switch (registrationStatus) {
      case ApiStatusConstant.initial:
        return this.renderNoEvent();
      case ApiStatusConstant.yetToRegisteer:
        return this.renderYetToRegistration();
      case ApiStatusConstant.registered:
        return this.renderRegisteredRegistration();
      case ApiStatusConstant.registrationClosed:
        return this.renderClosedRegistration();
      default:
        return null;
    }
  }
}
export default EventRegistrationDetail;
