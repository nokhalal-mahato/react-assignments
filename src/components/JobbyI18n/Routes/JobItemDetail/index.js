import { Component } from "react";
import { ThreeDots } from "react-loader-spinner";
import "./index.css";
import ApiStatusConstant from "../../Constants/ApiStatusConstant";
import JobDetail from "../../Components/JobDetail";
import NavBar from "../../Components/NavBar";
import { observer } from "mobx-react";
import jobItemDetailStore from "../../Stores/jobItemDetailStore";
import "../../i18n";
import { withTranslation } from "react-i18next";

class JobDetailRoute extends Component {
  constructor(){
    super();
    this.jobItemDetailStore=jobItemDetailStore;
  }
  componentDidMount() {
    this.getJobDetail();
  }

  getJobDetail = () => {
    this.jobItemDetailStore.setApiStatus(ApiStatusConstant.loading);
    const params = this.props.match.params.id;
    this.jobItemDetailStore.fetchJobDetail(params);
  };

  renderJobsList = () => {
    const {jobDetail}  = this.jobItemDetailStore;
    return (
      <div className="jobby-jobDetail-container">
        <JobDetail data={jobDetail} />
      </div>
    );
  };

  renderContent = () => {
    const { apiStatus } = this.jobItemDetailStore;
    const {t}=this.props;
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
              {t('failure_heading')}
            </h2>
            <p className="jobby-jobDetail-failure-text">
              {t('failure_text')}
            </p>
            <button
              className="jobby-jobDetail-retry-btn"
              onClick={this.getJobsList}
            >
              {t("retry")}
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
export default withTranslation()(observer(JobDetailRoute));
