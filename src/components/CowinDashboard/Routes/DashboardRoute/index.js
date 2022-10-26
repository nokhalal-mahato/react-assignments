import { Component } from "react";
import VaccinationByAge from "../../Components/VaccinationByAge";
import VaccinationByGender from "../../Components/VaccinationByGender";
import VaccinationCoverage from "../../Components/VaccinationCoverage";
import ApiStatusConstant from "../../Constants/ApiStatusConstant";
import "./index.css";
import {ThreeDots} from 'react-loader-spinner';

class DashboardRoute extends Component {
  state = {
    cowinData: {},
    apiStatus: ApiStatusConstant.loading,
  };

  componentDidMount() {
    this.getCowinData();
  }

  getCowinData = async () => {
    const response = await fetch("https://apis.ccbp.in/covid-vaccination-data");
    if (response.ok) {
      const fetchedData = await response.json();
      const updatedData = {
        last7DaysVaccination: fetchedData.last_7_days_vaccination,
        vaccinationByAge: fetchedData.vaccination_by_age,
        vaccinationByGender: fetchedData.vaccination_by_gender,
      };
      this.setState({
        cowinData: updatedData,
        apiStatus: ApiStatusConstant.success,
      });
    } else {
      this.setState({
        apiStatus: ApiStatusConstant.failed,
      });
    }
  };

  renderCowinDetails = () => {
    const { cowinData } = this.state;
    return (
      <div className="cowin-dashboard-details">
        <VaccinationCoverage data={cowinData.last7DaysVaccination} />
        <VaccinationByGender data={cowinData.vaccinationByGender} />
        <VaccinationByAge data={cowinData.vaccinationByAge} />
      </div>
    );
  };

  renderFailureView = () => (
    <div className="cowin-dashboard-failure">
      <div className="cowin-dashboard-failure-image">
        <img
          src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
          alt="something went wrong"
        />
      </div>
      <h1>Something went wrong</h1>
    </div>
  );

  renderLoadingView = () => (
    <div className="cowin-dashboard-loader-container">
      <ThreeDots color="#ffffff" height={80} width={80} />
    </div>
  );

  renderContent = () => {
    const { apiStatus } = this.state;
    switch (apiStatus) {
      case ApiStatusConstant.loading:
        return this.renderLoadingView();
      case ApiStatusConstant.failed:
        return this.renderFailureView();
      case ApiStatusConstant.success:
        return this.renderCowinDetails();
    }
  };

  render() {
    return (
      <div className="cowin-dashboard-page">
        <div className="cowin-dashboard-content">
          <div className="cowin-dashboard-header">
            <img
              src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
              alt="cowin"
            />
            <h2 className="cowin-dashboard-heading">Co-WIN</h2>
          </div>
          <h2 className="cowin-dashboard-main-heading">
            CoWIN Vaccination in India
          </h2>
          {this.renderContent()}
        </div>
      </div>
    );
  }
}
export default DashboardRoute;
