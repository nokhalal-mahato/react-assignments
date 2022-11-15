import { action, observable } from "mobx";
import ApiStatusConstant from "../Constants/ApiStatusConstant";
import Cookies from "js-cookie";

type jobtype = {
  id: string;
  title: string;
  company_logo_url: string;
  rating: number;
  location: string;
  employment_type: string;
  package_per_annum: string;
  job_description: string;
};

type JoblistType = {
  id: string;
  title: string;
  companyLogoUrl: string;
  rating: number;
  location: string;
  employmentType: string;
  packagePerAnnum: string;
  jobDescription: string;
};

class jobsListStore {
  @observable jobsList: JoblistType[] = [];
  @observable apiStatus = ApiStatusConstant.loading;

  @action setApiStatus(value: string) {
    this.apiStatus = value;
  }
  @action setJobsList(data: JoblistType[]) {
    this.jobsList = data;
  }
  @action async fetchJobsList(
    employmentFilterValue: string,
    salary: string,
    searchValue: string
  ) {
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
        const updatedData = responseData.jobs.map((job: jobtype) => ({
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
