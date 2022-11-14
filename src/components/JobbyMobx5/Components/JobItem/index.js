import { Component } from "react";
import "./index.css";
import {AiFillStar} from 'react-icons/ai';
import  {MdLocationPin} from 'react-icons/md'
import {BsBriefcaseFill} from 'react-icons/bs'
import {Link} from 'react-router-dom';

class JobItem extends Component {
  render() {
    const {data}=this.props;
    return (
      <Link className="jobby-jobItem-link" to={`/JobbyMobx5/jobs/${data.id}`}>
        <div className="jobby-jobItem">
          <div className="jobby-jobItem-top-section">
            <img src={data.companyLogoUrl} alt={data.title} />
            <div className="jobby-jobItem-top-right-section">
              <h2 className="jobby-jobItem-title">{data.title}</h2>
              <div className="jobby-jobItem-rating-container">
                <AiFillStar className="jobby-jobItem-rating-icon" />
                <h2 className="jobby-jobItem-rating">{data.rating}</h2>
              </div>
            </div>
          </div>
          <div className="jobby-jobItem-middle-section">
            <div className="jobby-jobItem-middle-left-section">
              <div className="jobby-jobItem-location-container">
                <MdLocationPin className="jobby-jobItem-location-icon" />
                <p className="jobby-jobItem-location-text">{data.location}</p>
              </div>
              <div className="jobby-jobItem-employment-container">
                <BsBriefcaseFill className="jobby-jobItem-employment-icon" />
                <p className="jobby-jobItem-employment-text">
                  {data.employmentType}
                </p>
              </div>
            </div>
            <h3 className="jobby-jobItem-salary">{data.packagePerAnnum}</h3>
          </div>
          <hr className="jobby-item-divider" />
          <h3 className="jobby-jobItem-description-heading">Description</h3>
          <p className="jobby-jobItem-description">{data.jobDescription}</p>
        </div>
      </Link>
    );
  }
}

export default JobItem;
