import { action, observable } from "mobx";

class jobsStore {
  @observable searchValue = "";
  @observable salary:string = "";
  @observable employmentFilter:string[] = [];
  @action setSearchValue(value:string) {
    this.searchValue = value;
  }
  @action setSalary(value:string) {
    this.salary = value;
  }
  @action setEmploymentFilter(id:string) {
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
