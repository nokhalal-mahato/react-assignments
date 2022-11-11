import { makeAutoObservable } from "mobx";
import ApiStatusConstant from "../Constants/ApiStatusConstant";
import Cookies from "js-cookie";

class jobsListStore {
  jobsList = [];
  apiStatus = ApiStatusConstant.loading;
  constructor() {
    makeAutoObservable(this);
  }
  setApiStatus(value) {
    this.apiStatus = value;
  }
  setJobsList(data) {
    this.jobsList = data;
  }
  async fetchJobsList(employmentFilterValue, salary, searchValue) {
    try {
      const jwtToken = Cookies.get("jwt_token");
      const response = await fetch(
        `https://apis.ccbp.in/jobs?employment_type=${employmentFilterValue}&minimum_package=${salary}&search=${searchValue}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );
      if (response.ok) {
        const responseData = await response.json();
        const updatedData = responseData.jobs.map((job) => ({
          title: job.title,
          id: job.id,
          rating: job.rating,
          packagePerAnnum: job.package_per_annum,
          location: job.location,
          jobDescription: job.job_description,
          employmentType: job.employment_type,
          companyLogoUrl: job.company_logo_url,
        }));
        if (responseData.total === 0) {
          this.setJobsList(updatedData);
          this.setApiStatus(ApiStatusConstant.empty);
          return;
        }
        this.setJobsList(updatedData);
        this.setApiStatus(ApiStatusConstant.success);
      } else {
        this.setApiStatus(ApiStatusConstant.failed);
      }
    } catch (err) {
      console.log(err);
      this.setApiStatus(ApiStatusConstant.failed);
    }
  }
}

export default new jobsListStore();
