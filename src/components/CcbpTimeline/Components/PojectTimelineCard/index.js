import { Component } from "react";
import { AiFillCalendar } from "react-icons/ai";
import "./index.css";

class ProjectTimelineCard extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="project-timeline-card">
        <div className="project-timeline-image">
          <img src={data.imageUrl} alt={data.projectTitle} />
        </div>
        <div className="project-timeline-title-section">
          <h2 className="project-timeline-title">{data.projectTitle}</h2>
          <div className="project-timeline-clock">
            <AiFillCalendar />
            <h4 className="project-timeline-duration">{data.duration}</h4>
          </div>
        </div>
        <p className="project-timeline-description">{data.description}</p>
        <a href={data.projectUrl} target="_blank" className="project-timeline-link">
          Visit
        </a>
      </div>
    );
  }
}

export default ProjectTimelineCard;
