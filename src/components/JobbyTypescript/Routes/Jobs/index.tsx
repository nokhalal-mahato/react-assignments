import { toJS } from "mobx";
import { inject, observer, Provider } from "mobx-react";
import { Component } from "react";
import JobFilter from "../../Components/JobFilter";
import JobList from "../../Components/jobsList";
import NavBar from "../../Components/NavBar";
import Profile from "../../Components/Profile";
import SearchBar from "../../Components/SearchBar";
import "./index.css";

type PropsType = {
  jobsStore?: {
    setSearchValue: (value: string) => {};
    setEmploymentFilter: (id: string) => {};
    searchValue: string;
    setSalary: (value: string) => {};
    employmentFilter: [];
    salary: string;
  };
};
@inject("jobsStore")
@observer
class Jobs extends Component<PropsType> {
  jobsStore = this.props.jobsStore;

  onChangeSearch = (value: string) => {
    this.jobsStore?.setSearchValue(value);
  };
  onClearInput = () => {
    this.jobsStore?.setSearchValue("");
  };
  onChangeEmploymentFilter = (id: string) => {
    this.jobsStore?.setEmploymentFilter(id);
  };
  onChangeSalaryFilter = (value: string) => {
    this.jobsStore?.setSalary(value);
  };
  render() {
    const { searchValue, employmentFilter, salary } = this.jobsStore!;
    return (
      <div className="jobby-jobs-page">
        <NavBar />
        <div className="jobby-jobs-content">
          <div className="jobby-jobs-left-section">
            <SearchBar
              searchValue={searchValue}
              onChangeSearch={this.onChangeSearch}
              clearInput={this.onClearInput}
            />
            <Profile />
            <hr className="jobby-filter-divider" />
            <JobFilter
              onChangeEmploymentFilter={this.onChangeEmploymentFilter}
              onChangeSalaryFilter={this.onChangeSalaryFilter}
            />
          </div>
          <div className="jobby-jobs-right-section">
            <SearchBar
              searchValue={searchValue}
              onChangeSearch={this.onChangeSearch}
              className="jobby-search-fixed"
              clearInput={this.onClearInput}
            />
            <JobList
              searchValue={searchValue}
              employmentFilter={toJS(employmentFilter)}
              salary={salary}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Jobs;
