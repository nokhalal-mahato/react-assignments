import { action, observable } from "mobx";

class jobsStore {
  @observable searchValue = "";
  @observable salary:string = "";
  @observable employmentFilter:string[] = [];

  
  @action.bound setSearchValue=(value:string)=> {
    this.searchValue = value;
  }
  @action.bound setSalary=(value:string) =>{
    this.salary = value;
  }
  @action.bound setEmploymentFilter=(id:string)=> {
    if (this.employmentFilter.find((item) => item === id)) {
      this.employmentFilter = this.employmentFilter.filter(
        (item) => item !== id
      );
    } else {
      this.employmentFilter.push(id);
    }
  }
}

export default new jobsStore();
