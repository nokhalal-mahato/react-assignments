import { Component } from "react";
import "./index.css";
import { format } from "date-fns";

class AppointmentItem extends Component {

    onStarHandler=()=>{
        const {data,onStar}=this.props;
        onStar(data.id);
    }
  render() {
    const {data}=this.props;
    return (
      <div className="appointItem">
        <div className="appointer-item-head">
          <h3>{data.title}</h3>
          {data.star ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png"
              onClick={this.onStarHandler}
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png"
              onClick={this.onStarHandler}
            />
          )}
        </div>
        <p className="appointment-item-date">
          Date: {format(data.date, "d MMMM Y")}, {format(data.date, "EEEE")}
        </p>
      </div>
    );
  }
}
export default AppointmentItem;
