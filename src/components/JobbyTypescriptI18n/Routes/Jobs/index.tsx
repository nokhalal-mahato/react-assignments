import { toJS } from "mobx";
import { observer } from "mobx-react";
import { Component } from "react";
import JobFilter from "../../Components/JobFilter";
import JobList from "../../Components/jobsList";
import NavBar from "../../Components/NavBar";
import Profile from "../../Components/Profile";
import SearchBar from "../../Components/SearchBar";
import jobsStore from "../../Stores/jobsStore";
import "./index.css";


class Jobs extends Component {
  jobsStore = jobsStore;

  onChangeSearch = (value:string) => {
    this.jobsStore.setSearchValue(value);
  };
  onClearInput = () => {
    this.jobsStore.setSearchValue("");
  };
  onChangeEmploymentFilter = (id: string) => {
    this.jobsStore.setEmploymentFilter(id);
  };
  onChangeSalaryFilter = (value: string) => {
    this.jobsStore.setSalary(value);
  };
  render() {
    const { searchValue, employmentFilter, salary } = this.jobsStore;
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

export default observer(Jobs);
