import { Component } from "react";
import "./index.css";
import { AiFillStar } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import { BsBriefcaseFill } from "react-icons/bs";
import { Link } from "react-router-dom";

type propsType = {
  data: {
    company_logo_url: string;
    employment_type: string;
    id: string;
    job_description: string;
    location: string;
    rating: number;
    title: string;
  };
};

class SimilarJob extends Component<propsType>  {
  render() {
    const { data } = this.props;
    return (
      <Link
        className="jobby-similarJob-link"
        to={`/JobbyTypescript/jobs/${data.id}`}
      >
        <div className="jobby-similarJob">
          <div className="jobby-similarJob-top-section">
            <img src={data.company_logo_url} alt={data.title} />
            <div className="jobby-similarJob-top-right-section">
              <h2 className="jobby-similarJob-title">{data.title}</h2>
              <div className="jobby-similarJob-rating-container">
                <AiFillStar className="jobby-similarJob-rating-icon" />
                <h2 className="jobby-similarJob-rating">{data.rating}</h2>
              </div>
            </div>
          </div>
          <h3 className="jobby-similarJob-description-heading">Description</h3>
          <p className="jobby-similarJob-description">{data.job_description}</p>
          <div className="jobby-similarJob-middle-left-section">
            <div className="jobby-similarJob-location-container">
              <MdLocationPin className="jobby-similarJob-location-icon" />
              <p className="jobby-similarJob-location-text">{data.location}</p>
            </div>
            <div className="jobby-similarJob-employment-container">
              <BsBriefcaseFill className="jobby-similarJob-employment-icon" />
              <p className="jobby-similarJob-employment-text">
                {data.employment_type}
              </p>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default SimilarJob;
