import { Component } from "react";
import { AiFillClockCircle } from "react-icons/ai";
import "./index.css";

class CourseTimelineCard extends Component {
  render() {
    const {data}=this.props;
    return (
      <div className="course-timeline-card">
        <div className="course-timeline-title-section">
          <h2 className="course-timeline-title">{data.courseTitle}</h2>
          <div className="course-timeline-clock">
            <AiFillClockCircle />
            <h4 className="course-timeline-duration">{data.duration}</h4>
          </div>
        </div>
        <p className="course-timeline-description">{data.description}</p>
        <div className="course-timeline-taglist">
          {data.tagsList.map((item) => (
            <p className="course-timeline-tagitem" key={item.id}>
              {item.name} 
            </p>
          ))}
        </div>
      </div>
    );
  }
}

export default CourseTimelineCard;
