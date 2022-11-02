import { Component } from "react";
import { NavLinksContainer, NavLinkText } from "./styledComponent";
import { NavLink } from "react-router-dom";
import "./index.css";
import { AiFillHome, AiFillFire } from "react-icons/ai";
import { IoLogoGameControllerB } from "react-icons/io";
import { RiPlayListAddFill } from "react-icons/ri";
import NxtwatchContext from "../../Contexts/NxtwatchContext";

class NavLinks extends Component {
  render() {
    return (
        <NxtwatchContext.Consumer>
            {value=>{
                const {isDarkMode}=value;
                return (
                  <NavLinksContainer>
                    <NavLink
                      to="/Nxtwatch"
                      activeClassName="active-navlink"
                      className="nxtwatch-navlink"
                    >
                      <AiFillHome className="nxtwatch-navlink-icons" />
                      <NavLinkText darkMode={isDarkMode}>Home</NavLinkText>
                    </NavLink>
                  </NavLinksContainer>
                );
            }}
        </NxtwatchContext.Consumer>
      
    );
  }
}

export default NavLinks;
