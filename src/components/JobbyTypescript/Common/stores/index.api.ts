import ProfileStore from "../../Profile/stores/ProfileStore/profileStore";
import ProfileServiceApi from "../../Profile/services/ProfileService/index.api";
import LoginFormStore from "../../Profile/stores/LoginFormStore/loginFormStore";
import LoginUserApi from "../../Profile/services/LoginUserService/index.api";
import JobItemServiceApi from "../../Jobs/services/JobItemService/index.api";
import JobItemDetailStore from "../../Jobs/stores/JobItemDetaiStore";
import JobListServiceApi from "../../Jobs/services/JobListService/index.api";
import JobsListStore from "../../Jobs/stores/JobsListStore";

const profileService = new ProfileServiceApi();
const profileStore = new ProfileStore(profileService);

const loginFormService=new LoginUserApi()
const loginFormStore=new LoginFormStore(loginFormService);

const jobItemService=new JobItemServiceApi();
const jobItemDetailStore = new JobItemDetailStore(jobItemService);

const jobListService=new JobListServiceApi();
const jobsListStore=new JobsListStore(jobListService);

export { profileStore, loginFormStore, jobItemDetailStore, jobsListStore };