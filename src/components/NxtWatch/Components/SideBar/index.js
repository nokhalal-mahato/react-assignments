import { Component } from "react";
import NxtwatchContext from "../../Contexts/NxtwatchContext";
import ContactDetail from "../ContactDetails";
import NavLinks from "../NavLinks";
import { SideBarPage } from "./styledComponent";

class SideBar extends Component {
  render() {
    return (
      <NxtwatchContext.Consumer>
        {(value) => {
          const { isDarkMode } = value;
          return (
            <SideBarPage darkMode={isDarkMode}>
              <NavLinks />
              <ContactDetail/>
            </SideBarPage>
          );
        }}
      </NxtwatchContext.Consumer>
    );
  }
}

export default SideBar;
