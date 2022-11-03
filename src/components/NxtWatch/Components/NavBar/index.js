import { Component } from "react";
import NxtwatchContext from "../../Contexts/NxtwatchContext";
import {withRouter } from "react-router-dom";
import Cookies from "js-cookie";
import { FiLogOut } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import Popup from "reactjs-popup";
import "./index.css";
import {
  Avatar,
  DarkModeImage,
  HamburgerBtn,
  LogoutBtn,
  MobileLogoutBtn,
  Nav,
  NavContent,
  NavLinkContainer,
  NavRightSection,
  WebsiteLogo,
} from "./styledComponent";
import LogoutPopup from "../LogoutPopUp";
import NavLinks from "../NavLinks";

class NavBar extends Component {
  logoutHandler = () => {
    Cookies.remove("jwt_token");
    this.props.history.replace("/Nxtwatch/login");
  };
  render() {
    return (
      <NxtwatchContext.Consumer>
        {(value) => {
          const { isDarkMode, toggleDarkMode } = value;
          return (
            <Nav darkMode={isDarkMode}>
              <NavContent>
                <WebsiteLogo
                  src={
                    isDarkMode
                      ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                      : "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  }
                  alt="website logo"
                />
                <NavRightSection>
                  <div onClick={toggleDarkMode}>
                    {isDarkMode ? (
                      <DarkModeImage
                        src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                        alt="dark"
                      />
                    ) : (
                      <DarkModeImage
                        src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                        alt="light"
                      />
                    )}
                  </div>
                  <Popup
                    modal
                    trigger={
                      <HamburgerBtn darkMode={isDarkMode}>
                        <GiHamburgerMenu className="nxtwatch-hamberger-menu" />
                      </HamburgerBtn>
                    }
                    className={`nxtwatch-ham-popup ${
                      isDarkMode ? "dark-nxtwatch-ham-popup" : ""
                    }`}
                  >
                    {(close) => (
                      <>
                        <HamburgerBtn darkMode={isDarkMode}>
                          <IoMdClose
                            onClick={() => close()}
                            className="hamburger-close-icon"
                          />
                        </HamburgerBtn>
                        <NavLinkContainer>
                          <NavLinks/>
                        </NavLinkContainer>
                      </>
                    )}
                  </Popup>
                  <Avatar src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png" />
                  <Popup
                    modal
                    trigger={
                      <LogoutBtn darkMode={isDarkMode}>Logout</LogoutBtn>
                    }
                    className={`nxtwatch-logout-popup ${
                      isDarkMode ? "dark-nxtwatch-logout-popup" : ""
                    }`}
                  >
                    {(close) => (
                      <LogoutPopup
                        onClose={close}
                        onConfirm={this.logoutHandler}
                      />
                    )}
                  </Popup>
                  <Popup
                    modal
                    trigger={
                      <MobileLogoutBtn darkMode={isDarkMode}>
                        <FiLogOut className="mobile-logout-btn" />
                      </MobileLogoutBtn>
                    }
                    className={`nxtwatch-logout-popup ${
                      isDarkMode ? "dark-nxtwatch-logout-popup" : ""
                    }`}
                  >
                    {(close) => (
                      <LogoutPopup
                        onClose={close}
                        onConfirm={this.logoutHandler}
                      />
                    )}
                  </Popup>
                </NavRightSection>
              </NavContent>
            </Nav>
          );
        }}
      </NxtwatchContext.Consumer>
    );
  }
}

export default withRouter(NavBar);
