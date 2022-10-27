import { Component } from "react";
import "./index.css";
import {GiHamburgerMenu} from 'react-icons/gi'
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import PopupContent from "../Popup";


class Header extends Component {
  render() {
    return (
      <div className="hamburger-header">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="logo"
        />
        <Popup
          modal
          trigger={
            <div>
              <GiHamburgerMenu className="hamburger-icon" />
            </div>
          }
          className="hamburger"
        >
          {(close) => (
            <div className="hamburger-popup-content">
              <PopupContent onClose={close} />
            </div>
          )}
        </Popup>
      </div>
    );
  }
}

export default Header;
