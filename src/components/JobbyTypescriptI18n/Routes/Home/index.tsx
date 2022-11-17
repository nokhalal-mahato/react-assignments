import { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../Components/NavBar";
import "./index.css";import "../../i18n";
import { WithTranslation, withTranslation } from "react-i18next";

interface Proptype extends WithTranslation{}

class Home extends Component<Proptype> {
  render() {
    const { t } = this.props;
    return (
      <div className="jobby-home-page">
        <NavBar />
        <div className="jobby-home-page-content">
          <h1 className="jobby-home-heading">{t("home_heading")}</h1>
          <p className="jobby-home-description">{t("home_description")}</p>
          <Link to="/JobbyTypescript/jobs">
            <button className="jobby-find-job-button">{t("find_job")}</button>
          </Link>
        </div>
      </div>
    );
  }
}
export default withTranslation()(Home);
