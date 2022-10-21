import { Component } from "react";
import EventItem from "../../Components/EventItem";
import EventRegistrationDetail from "../../Components/EventRegistrationDetail";
import EventList from "../../Constants/EventList";
import "./index.css";

class EventsApp extends Component {
  state = {
    eventList: EventList,
    selectedEvent: {},
    registrationStatus:'INITIAL'
  };

  onSelectEvent = (event) => {
    this.setState({ selectedEvent: event });
    this.setState({registrationStatus:event.registrationStatus})
  };
  onRegisterEvent = (id) => {
    console.log(id);
    this.setState((prevState) => ({
      eventList: prevState.eventList.map((item) => {
        if (item.id === id) {
          return { ...item, registrationStatus: "REGISTERED" };
        }
        return item;
      }),
    }));
    this.setState({ registrationStatus: "REGISTERED" });
  };
  render() {
    const { eventList, selectedEvent, registrationStatus } = this.state;
    return (
      <div className="event-page">
        <div className="event-content">
          <h1 className="event-heading">Event</h1>
          <div className="event-item-container">
            {eventList.map((item) => (
              <EventItem
                key={item.id}
                data={item}
                onSelect={this.onSelectEvent}
                isActive={selectedEvent.id === item.id}
              />
            ))}
          </div>
        </div>
        <EventRegistrationDetail
          event={selectedEvent}
          registrationStatus={registrationStatus}
          registerEvent={this.onRegisterEvent}
        />
      </div>
    );
  }
}
export default EventsApp;
