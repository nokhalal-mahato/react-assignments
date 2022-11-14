import { Component } from "react";
import employmentList from "../../Constants/employmentTypeList";
import salaryList from "../../Constants/salaryRange";
import "./index.css";

class JobFilter extends Component {
  onChangeEmployment = (event) => {
    this.props.onChangeEmploymentFilter(event.target.id);
  };
  onChangeSalary=(event)=>{
    this.props.onChangeSalaryFilter(event.target.value);
  }
  render() {
    return (
      <div className="job-filter">
        <h3>Type of Employment</h3>
        {employmentList.map((item) => (
          <div className="jobby-checkbox-item" key={item.id}>
            <input
              type="checkbox"
              id={item.id}
              value={item.value}
              onChange={this.onChangeEmployment}
            />
            <label className="jobby-employment-text">{item.value}</label>
          </div>
        ))}
        <hr className="jobby-filter-divider" />
        <h3>Salary Range</h3>
        {salaryList.map((item) => (
          <div className="jobby-radio-item" key={item.id}>
            <input
              type="radio"
              id={item.id}
              name="salary-item"
              value={item.value}
              onChange={this.onChangeSalary}
            />
            <label className="jobby-salary-text">{item.displayText}</label>
          </div>
        ))}
      </div>
    );
  }
}

export default JobFilter;
