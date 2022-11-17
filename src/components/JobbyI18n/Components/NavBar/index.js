import { Component } from "react";
import "./index.css";
import { Link, withRouter } from "react-router-dom";
import Cookies from "js-cookie";
import {AiFillHome} from 'react-icons/ai';
import { BsFillBriefcaseFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { withTranslation } from "react-i18next";
import "../../i18n";

class NavBar extends Component {
  logoutHandler = () => {
    Cookies.remove("jwt_token");
    this.props.history.replace("/JobbyI18n/login");
  };
  render() {
    const { t } = this.props;
    return (
      <nav className="jobby-nav-header">
        <div className="jobby-nav-content">
          <img
            className="jobby-website-logo"
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
          />
          <div className="jobby-nav-middle">
            <ul className="jobby-nav-menu">
              <Link to="/JobbyI18n" className="jobby-nav-link">
                <li>{t('home')}</li>
              </Link>
              <Link to="/JobbyI18n/Jobs" className="jobby-nav-link">
                <li>{t('jobs')}</li>
              </Link>
            </ul>
          </div>

          <button
            type="button"
            className="jobby-logout-desktop-btn"
            onClick={this.logoutHandler}
          >
            {t('logout')}
          </button>
          <div className="jobby-mobile-nav">
            <Link to="/JobbyI18n">
              <AiFillHome className="jobby-mobile-nav-icon" />
            </Link>

            <Link to="/JobbyI18n/Jobs">
              <BsFillBriefcaseFill className="jobby-mobile-nav-icon" />
            </Link>
            <FiLogOut
              onClick={this.logoutHandler}
              className="jobby-mobile-nav-icon"
            />
          </div>
        </div>
      </nav>
    );
  }
}
export default withTranslation()(withRouter(NavBar));
