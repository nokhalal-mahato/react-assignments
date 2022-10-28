import { Component } from "react";
import { ThreeDots } from "react-loader-spinner";
import Cookies from "js-cookie";
import "./index.css";
import ApiStatusConstant from "../../Constants/ApiStatusConstant";
import JobDetail from "../../Components/JobDetail";
import NavBar from "../../Components/NavBar";

class JobDetailRoute extends Component {
  state = {
    jobDetail: [],
    apiStatus: ApiStatusConstant.loading,
  };

  componentDidMount() {
    this.getJobDetail();
  }

  getJobDetail = async () => {
    const params = this.props.match.params.id;
    try {
      const jwtToken = Cookies.get("jwt_token");
      const response = await fetch(`https://apis.ccbp.in/jobs/${params}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });
      if (response.ok) {
        const responseData = await response.json();
        this.setState({
          jobDetail: responseData,
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
    const { jobDetail } = this.state;
    return (
      <div className="jobby-jobDetail-container">
        <JobDetail data={jobDetail} />
      </div>
    );
  };

  renderContent = () => {
    const { apiStatus } = this.state;
    switch (apiStatus) {
      case ApiStatusConstant.loading:
        return (
          <div className="jobby-jobDetail-loader-container">
            <ThreeDots color="white" height={80} width={80} />
          </div>
        );
      case ApiStatusConstant.failed:
        return (
          <div className="jobby-jobDetail-failure-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
              alt="failure"
            />
            <h2 className="jobby-jobDetail-failure-heading">
              Oops! Something went wrong
            </h2>
            <p className="jobby-jobDetail-failure-text">
              We cannot seem to find the page you are looking for.
            </p>
            <button
              className="jobby-jobDetail-retry-btn"
              onClick={this.getJobsList}
            >
              Retry
            </button>
          </div>
        );
      case ApiStatusConstant.success:
        return this.renderJobsList();
      default:
        return null;
    }
  };
  render() {
    return (
      <div className="jobby-jobDetail-page">
        <NavBar />
        {this.renderContent()}
      </div>
    );
  }
}
export default JobDetailRoute;
