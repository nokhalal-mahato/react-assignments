import { cleanup, render, screen } from "@testing-library/react";
import Enzyme, { shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Jobs from "../Routes/Jobs";

Enzyme.configure({ adapter: new Adapter() });

afterEach(cleanup);

test("checking search input", () => {
  const JobsPage = shallow(<Jobs />);
  const JobsInstance = JobsPage.instance();
  JobsInstance.onChangeSearch("nokhalal");
  expect(JobsInstance.jobsStore.searchValue).toBe("nokhalal");
  JobsInstance.onClearInput();
  expect(JobsInstance.jobsStore.searchValue).toBe("");
});

test("checking employment filter", () => {
  const JobsPage = shallow(<Jobs />);
  const JobsInstance = JobsPage.instance();
  JobsInstance.onChangeEmploymentFilter("nokhalal");
  expect(JobsInstance.jobsStore.employmentFilter[0]).toBe("nokhalal");
  JobsInstance.onChangeEmploymentFilter("mahato");
  expect(JobsInstance.jobsStore.employmentFilter[1]).toBe("mahato");
  JobsInstance.onChangeEmploymentFilter("nokhalal");
  expect(JobsInstance.jobsStore.employmentFilter[0]).toBe("mahato");
});

test("checking salary filter", () => {
  const JobsPage = shallow(<Jobs />);
  const JobsInstance = JobsPage.instance();
  JobsInstance.onChangeSalaryFilter("nokhalal");
  expect(JobsInstance.jobsStore.salary).toBe("nokhalal");
});

