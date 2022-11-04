import { Component } from "react";
import GamingContent from "../../Components/GamingContent";
import NavBar from "../../Components/NavBar";
import SideBar from "../../Components/SideBar";
import NxtwatchContext from "../../Contexts/NxtwatchContext";

import {
  GamingPage,
  GamingPageContent,
  GamingPageRightSection,
} from "./styledComponents";

class GamingRoute extends Component {
  render() {
    return (
      <NxtwatchContext.Consumer>
        {(value) => {
          const { isDarkMode } = value;
          return (
            <GamingPage darkMode={isDarkMode}>
              <NavBar />
              <GamingPageContent>
                <SideBar />
                <GamingPageRightSection darkMode={isDarkMode}>
                  <GamingContent/>
                </GamingPageRightSection>
              </GamingPageContent>
            </GamingPage>
          );
        }}
      </NxtwatchContext.Consumer>
    );
  }
}

export default GamingRoute;
