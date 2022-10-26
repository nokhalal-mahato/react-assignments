import {Component} from 'react';
import './index.css';
import { Chrono } from "react-chrono";
import timelineItemsList from '../Constants/timelineItemsList';
import ProjectTimelineCard from '../Components/PojectTimelineCard';
import CourseTimelineCard from '../Components/CourseTimelineCard';

class CcbpTimeline extends Component{
    render(){
        return (
          <div className="ccbpi-timeline">
            <h3 className="ccbpi-timeline-about">MY JOURNEY OF</h3>
            <h2 className="ccbpi-timeline-title">CCBP 4.0</h2>
            <Chrono
              theme={{
                secondary: "white",
              }}
              items={timelineItemsList}
              mode="VERTICAL_ALTERNATING"
            >
              {timelineItemsList.map((item) => {
                if (item.categoryId == "PROJECT") {
                  return <ProjectTimelineCard key={item.id} data={item} />;
                }
                if (item.categoryId == "COURSE") {
                  return <CourseTimelineCard key={item.id} data={item} />;
                }
              })}
            </Chrono>
          </div>
        );
    }
}

export default CcbpTimeline;