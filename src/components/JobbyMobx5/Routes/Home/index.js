import { reaction } from "mobx";
import { inject, observer } from "mobx-react";
import { Component } from "react";
import Popup from "reactjs-popup";
import LoginForm from "../../Components/LoginForm";

import NavBar from "../../Components/NavBar";
import "./index.css";

@inject("loginStore")
@observer
class Home extends Component {
  constructor(props) {
    super(props);
    this.reation1=reaction(
      () => this.props.loginStore.isClicked,
      () => {
        console.log("fsfsdfs");
        this.props.loginStore.showPopup = !this.props.loginStore.showPopup;
      }
    );
  }
  componentWillUnmount(){
    this.reation1();
  }
  jobsHandler = () => {
    if (this.props.loginStore.isLogin) {
      this.props.history.push("/JobbyMobx5/jobs");
    } else {
      this.props.loginStore.setClicked();
    }
  };
  render() {
    console.log(
      this.props.loginStore.isLogin,
      this.props.loginStore.showPopup,
      this.props.loginStore.isClicked
    );
    return (
      <div className="jobby-home-page">
        {!this.props.loginStore.isLogin && (
          <Popup
            modal
            className="jobby-popup"
            open={this.props.loginStore.showPopup}
            onClose={this.props.loginStore.closePopup}
          >
            {
              <>
                <LoginForm></LoginForm>
              </>
            }
          </Popup>
        )}

        <NavBar />
        <div className="jobby-home-page-content">
          <h1 className="jobby-home-heading">
            Find The Job That Fits Your Life
          </h1>
          <p className="jobby-home-description">
            Millions of people are searching for jobs, salary information,
            company reviews. Find the job that fits your abilities and
            potential.
          </p>
          {/* <Link to="/JobbyMobx5/jobs"> */}
          <button className="jobby-find-job-button" onClick={this.jobsHandler}>
            Find Jobs
          </button>
        </div>
      </div>
    );
  }
}
export default Home;
