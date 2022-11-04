import { Component } from "react";
import NavBar from "../../Components/NavBar";
import SideBar from "../../Components/SideBar";
import NxtwatchContext from "../../Contexts/NxtwatchContext";
import { SavedVideoFilledContainer } from "./styledComponents";
import { SavedVideoHeaderIconContainer } from "./styledComponents";
import { SavedVideoHeaderContainer } from "./styledComponents";
import { SavedVideoListContainer } from "./styledComponents";
import { SavedVideoEmptyImage } from "./styledComponents";
import { SavedVideoEmptyText } from "./styledComponents";
import { SavedVideoEmptyHeading } from "./styledComponents";
import { SavedVideoEmptyContainer } from "./styledComponents";
import { MdLocalFireDepartment } from "react-icons/md";
import './index.css';

import {
  SavedVideoPage,
  SavedVideoPageContent,
  SavedVideoPageRightSection,
} from "./styledComponents";
import SavedVideoItem from "../../Components/SavedVideoItem";

class SavedVideoRoute extends Component {
  renderEmptyView = (isDarkMode) => {
    return (
      <SavedVideoEmptyContainer darkMode={isDarkMode}>
        <SavedVideoEmptyImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
          alt="empty"
        />
        <SavedVideoEmptyHeading darkMode={isDarkMode}>
          No saved videos found
        </SavedVideoEmptyHeading>
        <SavedVideoEmptyText darkMode={isDarkMode}>
          You can save your video while watching them
        </SavedVideoEmptyText>
      </SavedVideoEmptyContainer>
    );
  };
  renderSavedVideoList=(savedVideo,isDarkMode)=>{
    return (
      <SavedVideoFilledContainer>
        <SavedVideoHeaderContainer darkMode={isDarkMode}>
          <SavedVideoHeaderIconContainer darkMode={isDarkMode}>
            <MdLocalFireDepartment className="nxtwatch-savedVideo-icons" />
          </SavedVideoHeaderIconContainer>
          <h1>Saved Videos</h1>
        </SavedVideoHeaderContainer>
        <SavedVideoListContainer>
            {savedVideo.map((item)=><SavedVideoItem key={item.id} data={item}/>)}
        </SavedVideoListContainer>
      </SavedVideoFilledContainer>
    );
  }
  render() {
    return (
      <NxtwatchContext.Consumer>
        {(value) => {
          const { isDarkMode, savedVideo } = value;
          const empty = savedVideo.length > 0 ? false : true;
          return (
            <SavedVideoPage darkMode={isDarkMode}>
              <NavBar />
              <SavedVideoPageContent>
                <SideBar />
                <SavedVideoPageRightSection>
                  {empty && this.renderEmptyView(isDarkMode)}
                  {!empty && this.renderSavedVideoList(savedVideo,isDarkMode)}
                </SavedVideoPageRightSection>
              </SavedVideoPageContent>
            </SavedVideoPage>
          );
        }}
      </NxtwatchContext.Consumer>
    );
  }
}

export default SavedVideoRoute;
