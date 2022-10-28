import { Component } from "react";
import { ThreeDots } from "react-loader-spinner";
import Cookies from "js-cookie";
import "./index.css";
import ApiStatusConstant from "../../Constants/ApiStatusConstant";
import JobItem from "../JobItem";

class JobList extends Component {
  state = {
    jobsList: [],
    apiStatus: ApiStatusConstant.loading,
  };

  componentDidMount() {
    this.getJobsList();
  }
  componentDidUpdate(prevProps) {
    if (
      prevProps.salary !== this.props.salary ||
      prevProps.searchValue !== this.props.searchValue ||
      prevProps.employmentFilter !== this.props.employmentFilter
    ) {
      this.getJobsList();
    }
  }
  getJobsList = async () => {
    const { searchValue, employmentFilter, salary } = this.props;
    const employmentFilterValue = employmentFilter.join(",").toUpperCase();
    try {
      const jwtToken = Cookies.get("jwt_token");
      const response = await fetch(
        `https://apis.ccbp.in/jobs?employment_type=${employmentFilterValue}&minimum_package=${salary}&search=${searchValue}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );
      if (response.ok) {
        const responseData = await response.json();
        const updatedData = responseData.jobs.map((job) => ({
          title: job.title,
          id: job.id,
          rating: job.rating,
          packagePerAnnum: job.package_per_annum,
          location: job.location,
          jobDescription: job.job_description,
          employmentType: job.employment_type,
          companyLogoUrl: job.company_logo_url,
        }));
        if (responseData.total === 0) {
          this.setState({
            jobsList: updatedData,
            apiStatus: ApiStatusConstant.empty,
          });
          return;
        }
        this.setState({
          jobsList: updatedData,
          apiStatus: ApiStatusConstant.success,
        });
      } else {
        this.setState({
          apiStatus: ApiStatusConstant.failed,
        });
      }
    } catch (err) {
      console.log(err);
      this.setState({ apiStatus: ApiStatusConstant.failed });
    }
  };

  renderJobsList = () => {
    const { jobsList } = this.state;
    return (
      <div className="jobby-jobslist-container">
        {jobsList.map((job) => (
          <JobItem key={job.id} data={job} />
        ))}
      </div>
    );
  };

  renderContent = () => {
    const { apiStatus } = this.state;
    switch (apiStatus) {
      case ApiStatusConstant.loading:
        return (
          <div className="jobby-joblists-loader-container">
            <ThreeDots color="white" height={80} width={80} />
          </div>
        );
      case ApiStatusConstant.failed:
        return (
          <div className="jobby-joblists-failure-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
              alt="failure"
            />
            <h2 className="jobby-joblists-failure-heading">
              Oops! Something went wrong
            </h2>
            <p className="jobby-joblists-failure-text">
              We cannot seem to find the page you are looking for.
            </p>
            <button
              className="jobby-joblists-retry-btn"
              onClick={this.getJobsList}
            >
              Retry
            </button>
          </div>
        );
      case ApiStatusConstant.success:
        return this.renderJobsList();
      case ApiStatusConstant.empty:
        return (
          <div className="jobby-joblists-empty-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
              alt="no product"
            />
            <h2>No Jobs Found</h2>
            <p className="jobby-joblists-empty-text">
              We could not find any jobs. Try other filters
            </p>
          </div>
        );
      default:
        return null;
    }
  };
  render() {
    return <>{this.renderContent()}</>;
  }
}
export default JobList;
