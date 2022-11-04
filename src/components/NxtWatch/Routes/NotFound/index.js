import { Component } from "react";
import NavBar from "../../Components/NavBar";
import SideBar from "../../Components/SideBar";
import NxtwatchContext from "../../Contexts/NxtwatchContext";
import { NotFoundEmptyImage } from "./styledComponents";
import { NotFoundEmptyText } from "./styledComponents";
import { NotFoundEmptyHeading } from "./styledComponents";
import { NotFoundEmptyContainer } from "./styledComponents";

import {
  NotFoundPage,
  NotFoundPageContent,
  NotFoundPageRightSection,
} from "./styledComponents";

class NotFound extends Component {
  render() {
    return (
      <NxtwatchContext.Consumer>
        {(value) => {
          const { isDarkMode } = value;
          return (
            <NotFoundPage darkMode={isDarkMode}>
              <NavBar />
              <NotFoundPageContent>
                <SideBar />
                <NotFoundPageRightSection>
                  <NotFoundEmptyContainer darkMode={isDarkMode}>
                    <NotFoundEmptyImage
                      src={
                        isDarkMode
                          ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png"
                          : "https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
                      }
                      alt="empty"
                    />
                    <NotFoundEmptyHeading darkMode={isDarkMode}>
                      Page Not found
                    </NotFoundEmptyHeading>
                    <NotFoundEmptyText darkMode={isDarkMode}>
                      We are sorry, the page you requested could not be found.
                    </NotFoundEmptyText>
                  </NotFoundEmptyContainer>
                </NotFoundPageRightSection>
              </NotFoundPageContent>
            </NotFoundPage>
          );
        }}
      </NxtwatchContext.Consumer>
    );
  }
}

export default NotFound;
