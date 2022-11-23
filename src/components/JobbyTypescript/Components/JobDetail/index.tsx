import { Component } from "react";
import "./index.css";
import { AiFillStar } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import { BsBriefcaseFill } from "react-icons/bs";
import {BiLinkExternal } from "react-icons/bi";
import SimilarJob from "../SimilarJobs";

type propsType={
  data:{
    id:string,
    similar_jobs:[],
    job_details:{
      company_logo_url:string,
      title:string,
      rating:number,
      location:string,
      employment_type:string,
      package_per_annum:string,
      company_website_url:string,
      job_description:string,
      skills:[{name:string,image_url:string}]
      life_at_company:{
        image_url:string,
        description:string,
      }
    },
  }
}
type similarJobs ={
company_logo_url:string,
      employment_type:string,
      id:string,
      job_description: string,
      location: string,
      rating: number,
      title: string
}

class JobDetail extends Component<propsType> {
  render() {
    const { data } = this.props;
    const jobDetail=data.job_details;
    const similarJobs=data.similar_jobs;
    return (
      <div className="jobby-jobDetail-page">
        <div className="jobby-jobDetail">
          <div className="jobby-jobDetail-top-section">
            <img src={jobDetail.company_logo_url} alt={jobDetail.title} />
            <div className="jobby-jobDetail-top-right-section">
              <h3 className="jobby-jobDetail-title" data-testid="title">
                {jobDetail.title}
              </h3>
              <div className="jobby-jobDetail-rating-container">
                <AiFillStar className="jobby-jobDetail-rating-icon" />
                <h3 className="jobby-jobDetail-rating" data-testid="rating">
                  {jobDetail.rating}
                </h3>
              </div>
            </div>
          </div>
          <div className="jobby-jobDetail-middle-section">
            <div className="jobby-jobDetail-middle-left-section">
              <div className="jobby-jobDetail-location-container">
                <MdLocationPin className="jobby-jobDetail-location-icon" />
                <p className="jobby-jobDetail-location-text">
                  {jobDetail.location}
                </p>
              </div>
              <div className="jobby-jobDetail-employment-container">
                <BsBriefcaseFill className="jobby-jobDetail-employment-icon" />
                <p className="jobby-jobDetail-employment-text">
                  {jobDetail.employment_type}
                </p>
              </div>
            </div>
            <h3 className="jobby-jobDetail-salary">
              {jobDetail.package_per_annum}
            </h3>
          </div>
          <hr className="jobby-item-divider" />
          <div className="jobby-jobDetail-description-heading-container">
            <h2 className="jobby-jobDetail-description-heading">Description</h2>
            <a
              href={jobDetail.company_website_url}
              className="jobby-jobDetail-link"
            >
              Visit <BiLinkExternal className="jobby-external-link" />
            </a>
          </div>
          <p className="jobby-jobDetail-description">
            {jobDetail.job_description}
          </p>
          <h2>Skills</h2>
          <div className="jobby-jobDetail-skill-container">
            {jobDetail.skills.map((item) => (
              <div className="jobby-jobDetail-skill-item" key={item.name}>
                <img src={item.image_url} />
                <h4>{item.name}</h4>
              </div>
            ))}
          </div>
          <h2>Life at Company</h2>
          <div className="jobby-jobDetail-life-container">
            <p className="jobby-jobDetail-life-text">
              {jobDetail.life_at_company.description}
            </p>
            <div className="jobby-jobDetail-life-image">
              <img
                src={jobDetail.life_at_company.image_url}
                alt={jobDetail.title}
              />
            </div>
          </div>
        </div>
        <h1>Similar Jobs</h1>
        <div className="similar-job-container">
          {similarJobs.map((item: similarJobs) => (
            <SimilarJob key={item.id} data={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default JobDetail;