import { action, observable } from "mobx";

class jobsStore {
  @observable searchValue = "";
  @observable salary = "";
  @observable employmentFilter = [];
  @action setSearchValue(value) {
    this.searchValue = value;
  }
  @action setSalary(value) {
    this.salary = value;
  }
  @action setEmploymentFilter(id) {
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
