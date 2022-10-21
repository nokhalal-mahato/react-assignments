import { Component } from "react";
import "./index.css";

class EventItem extends Component {
    selectEventHandler=()=>{
        const { data, onSelect } = this.props;
        onSelect(data);
    }
  render() {
    const { data, isActive } = this.props;
    return (
      <div className='event-item'>
        <div
          className={`event-item-image ${isActive ? "event-activeEvent" : ""}`}
          onClick={this.selectEventHandler}
        >
          <img src={data.imageUrl} alt={data.title} />
        </div>
        <h3 className="event-item-title">{data.title}</h3>
        <p className="event-item-location">{data.location}</p>
      </div>
    );
  }
}
export default EventItem;
