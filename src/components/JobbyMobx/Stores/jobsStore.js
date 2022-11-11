import { makeAutoObservable } from "mobx";

class jobsStore {
  searchValue = "";
  salary = "";
  employmentFilter = [];
  constructor() {
    makeAutoObservable(this);
  }
  setSearchValue(value) {
    this.searchValue = value;
  }
  setSalary(value) {
    this.salary = value;
  }
  setEmploymentFilter(id) {
    if (this.employmentFilter.find((item) => item === id)) {
      this.employmentFilter = this.employmentFilter.filter(
        (item) => item !== id
      );
      console.log(this.employmentFilter);
    } else {
      this.employmentFilter.push(id);
    }
  }
}

export default new jobsStore();
