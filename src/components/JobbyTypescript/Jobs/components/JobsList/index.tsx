import { Component } from "react";
import { inject, observer } from "mobx-react";

import "./index.css";
import ApiStatusConstant from "../../../Common/constants/ApiStatusConstant";
import JobItem from "../JobItem";
import Loading from "../../../Common/components/LoadingView";
import FailureView from "../../../Common/components/FailureView";
import EmptyView from "../../../Common/components/EmptyView";

type PropsType = {
  salary: string;
  searchValue: string;
  employmentFilter: string[];
  jobsListStore?: {
    apiStatus: string;
    fetchJobsList: (
      employmentFilterValue: string,
      salary: string,
      searchValue: string
    ) => {};
    jobsList:[];
  };
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
@inject("jobsListStore")
@observer
class JobList extends Component<PropsType> {
  jobsListStore = this.props.jobsListStore;

  componentDidMount() {
    this.getJobsList();
  }
  componentDidUpdate(prevProps: PropsType) {
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
    this.jobsListStore?.fetchJobsList(
      employmentFilterValue,
      salary,
      searchValue
    );
  };

  renderJobsList = () => {
    const { jobsList } = this.jobsListStore!;
    return (
      <div className="jobby-jobslist-container">
        {jobsList.map((job: JobsType) => (
          <JobItem key={job.id} jobData={job} />
        ))}
      </div>
    );
  };

  renderContent = () => {
    const { apiStatus } = this.jobsListStore!;
    switch (apiStatus) {
      case ApiStatusConstant.loading:
        return (
          <Loading/>
        );
      case ApiStatusConstant.failed:
        return <FailureView fetchingMethod={this.getJobsList}/>;
      case ApiStatusConstant.success:
        return this.renderJobsList();
      case ApiStatusConstant.empty:
        return (
          <EmptyView/>
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
