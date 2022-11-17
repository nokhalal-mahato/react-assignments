import { Component } from "react";
import { ThreeDots } from "react-loader-spinner";
import "./index.css";
import ApiStatusConstant from "../../Constants/ApiStatusConstant";
import JobItem from "../JobItem";
import jobsListStore from "../../Stores/jobsListStore";
import { observer } from "mobx-react";
import { WithTranslation, withTranslation } from "react-i18next";
import "../../i18n";

type PropsType =WithTranslation & {
  salary: string;
  searchValue: string;
  employmentFilter:string[];
};

type JobsType = {
    id: string;
    title: string;
    companyLogoUrl: string;
    rating: number;
    location: string;
    employmentType: string;
    packagePerAnnum: string;
    jobDescription: string;
};

@observer
class JobList extends Component<PropsType> {
  jobsListStore = jobsListStore;

  componentDidMount() {
    this.getJobsList();
  }
  componentDidUpdate(prevProps:PropsType) {
    if (
      prevProps.salary !== this.props.salary ||
      prevProps.searchValue !== this.props.searchValue ||
      prevProps.employmentFilter !== this.props.employmentFilter
    ) {
      this.getJobsList();
    }
  }
  getJobsList = () => {
    const { searchValue, employmentFilter, salary } = this.props;
    const employmentFilterValue = employmentFilter.join(",").toUpperCase();
    this.jobsListStore.fetchJobsList(
      employmentFilterValue,
      salary,
      searchValue
    );
  };

  renderJobsList = () => {
    const { jobsList } = this.jobsListStore;
    return (
      <div className="jobby-jobslist-container">
        {jobsList.map((job:JobsType) => (
          <JobItem key={job.id} data={job} />
        ))}
      </div>
    );
  };

  renderContent = () => {
    const { apiStatus } = this.jobsListStore;
    const { t } = this.props;
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
              {t("failure_heading")}
            </h2>
            <p className="jobby-joblists-failure-text">{t("failure_text")}</p>
            <button
              className="jobby-joblists-retry-btn"
              onClick={this.getJobsList}
            >
              {t("retry")}
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
            <h2>{t("empty_heading")}</h2>
            <p className="jobby-joblists-empty-text">{t("empty_text")}</p>
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
export default withTranslation()(JobList);
