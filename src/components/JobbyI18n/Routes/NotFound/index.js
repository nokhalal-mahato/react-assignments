import { Component } from "react";
import { withTranslation } from "react-i18next";
import NavBar from "../../Components/NavBar";
import "./index.css";
import '../../i18n';

class NotFound extends Component {
  render() {
    const {t}=this.props;
    return (
      <div className="jobby-notfound-page">
        <NavBar />
        <div className="jobby-notfound-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
            alt="failure"
          />
          <h2 className="jobby-notfound-heading">{t("page_not_found")}</h2>
          <p className="jobby-notfound-text">{t("page_not_found_text")}</p>
        </div>
      </div>
    );
  }
}
export default withTranslation()(NotFound);
