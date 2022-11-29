import { Component } from "react";
import { inject, observer } from "mobx-react";
import { RouteComponentProps } from "react-router-dom";

import "./index.css";
import ApiStatusConstant from "../../../Common/constants/ApiStatusConstant";
import JobDetail from "../../components/JobDetail";
import NavBar from "../../../Common/components/NavBar";
import FailureView from "../../../Common/components/FailureView";
import Loading from "../../../Common/components/LoadingView";
import { JobType } from "../../stores/types/JobType";

type PropsType = RouteComponentProps & {
  history: RouteComponentProps;
  match: {
    params: {
      id: string;
    };
  };
  jobItemDetailStore?: {
    setApiStatus: (value: string) => {};
    fetchJobDetail: (params: string) => {};
    jobDetail: JobType;
    apiStatus: string;
  };
};

@inject("jobItemDetailStore")
@observer
class JobDetailRoute extends Component<PropsType> {
  jobItemDetailStore = this.props.jobItemDetailStore;

  componentDidMount() {
    this.getJobDetail();
  }

  componentDidUpdate(prevProps: PropsType) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.getJobDetail();
    }
  }

  getJobDetail = () => {
    this.jobItemDetailStore?.setApiStatus(ApiStatusConstant.loading);
    const params = this.props.match.params.id;
    this.jobItemDetailStore?.fetchJobDetail(params);
  };

  renderJobsList = () => {
    const { jobDetail } = this.jobItemDetailStore!;
    return (
      <div className="jobby-jobDetail-container">
        <JobDetail data={jobDetail} />
      </div>
    );
  };

  renderContent = () => {
    const { apiStatus } = this.jobItemDetailStore!;
    switch (apiStatus) {
      case ApiStatusConstant.loading:
        return <Loading />;
      case ApiStatusConstant.failed:
        return <FailureView fetchingMethod={this.getJobDetail} />;
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
