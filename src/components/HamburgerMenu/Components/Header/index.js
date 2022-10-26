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
        <Popup modal trigger={<GiHamburgerMenu className="hamburger-icon" />}>
          {(close) => (
            <PopupContent/>
            // <div>
            //   <div>
            //     <p>React is a popular and widely used programming language</p>
            //   </div>
            //   <button
            //     type="button"
            //     className="trigger-button"
            //     onClick={() => close()}
            //   >
            //     Close
            //   </button>
            // </div>
          )}
        </Popup>
      </div>
    );
  }
}

export default Header;
