import { Component } from "react";
import employmentList from "../../Constants/employmentTypeList";
import salaryList from "../../Constants/salaryRange";
import "./index.css";
import "../../i18n";
import { withTranslation } from "react-i18next";

class JobFilter extends Component {
  onChangeEmployment = (event) => {
    this.props.onChangeEmploymentFilter(event.target.id);
  };
  onChangeSalary=(event)=>{
    this.props.onChangeSalaryFilter(event.target.value);
  }
  render() {
    const {t}=this.props;
    return (
      <div className="job-filter">
        <h3>{t("type_of_employment")}</h3>
        {employmentList.map((item) => (
          <div className="jobby-checkbox-item" key={item.id}>
            <input
              type="checkbox"
              id={item.id}
              value={item.value}
              onChange={this.onChangeEmployment}
            />
            <label className="jobby-employment-text">{t(item.id)}</label>
          </div>
        ))}
        <hr className="jobby-filter-divider" />
        <h3>{t('salary_range')}</h3>
        {salaryList.map((item) => (
          <div className="jobby-radio-item" key={item.id}>
            <input
              type="radio"
              id={item.id}
              name="salary-item"
              value={item.value}
              onChange={this.onChangeSalary}
            />
            <label className="jobby-salary-text">{t(item.id)}</label>
          </div>
        ))}
      </div>
    );
  }
}

export default withTranslation()(JobFilter);
