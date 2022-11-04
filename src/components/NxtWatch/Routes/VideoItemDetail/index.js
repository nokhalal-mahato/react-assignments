import { Component } from "react";
import NavBar from "../../Components/NavBar";
import SideBar from "../../Components/SideBar";
import VideoDetail from "../../Components/VideoDetail";
import NxtwatchContext from "../../Contexts/NxtwatchContext";

import { VideoPage, VideoPageContent, VideoPageRightSection } from "./styledComponents";

class VideoDetailRoute extends Component {
  render() {
    const params = this.props.match.params.id;
    return (
      <NxtwatchContext.Consumer>
        {(value) => {
          const { isDarkMode } = value;
          return (
            <VideoPage darkMode={isDarkMode}>
              <NavBar />
              <VideoPageContent>
                <SideBar />
                <VideoPageRightSection darkMode={isDarkMode}>
                    <VideoDetail id={params}/>
                </VideoPageRightSection>
              </VideoPageContent>
            </VideoPage>
          );
        }}
      </NxtwatchContext.Consumer>
    );
  }
}

export default VideoDetailRoute;
