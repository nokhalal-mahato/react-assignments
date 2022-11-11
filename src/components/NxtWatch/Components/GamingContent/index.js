import { Component } from "react";
import { ThreeDots } from "react-loader-spinner";
import Cookies from "js-cookie";
import ApiStatusConstant from "../../Constants/ApiStatusConstant";
import {
  GamingFailureContainer,
  GamingFailureHeading,
  GamingFailureImage,
  GamingFailureRetryBtn,
  GamingFailureText,
  GamingLoaderContainer,
  GamingVideoHeaderContainer,
  GamingVideoHeaderIconContainer,
  GamingVideoListContainer,
  GamingVideoSuccessView,
} from "./styledComponent";
import NxtwatchContext from "../../Contexts/NxtwatchContext";
import { IoLogoGameControllerB } from "react-icons/io";
import GameVideoItem from "../GameVideoItem";

class GamingContent extends Component {
  state = {
    videosList: [],
    apiStatus: ApiStatusConstant.loading,
  };

  componentDidMount() {
    this.getGamingVideosList();
  }

  getGamingVideosList = async () => {
    try {
      const jwtToken = Cookies.get("jwt_token");
      const response = await fetch(`https://apis.ccbp.in/videos/gaming`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });
      if (response.ok) {
        const responseData = await response.json();
        const updatedData = responseData.videos.map((video) => ({
          title: video.title,
          id: video.id,
          thumbnailUrl: video.thumbnail_url,
          viewCount: video.view_count,
        }));
        this.setState({
          videosList: updatedData,
          apiStatus: ApiStatusConstant.success,
        });
      } else {
        this.setState({
          apiStatus: ApiStatusConstant.failed,
        });
      }
    } catch (err) {
      console.log(err);
      this.setState({ apiStatus: ApiStatusConstant.failed });
    }
  };

  renderGamingVideosList = (isDarkMode) => {
    const { videosList } = this.state;
    return (
      <GamingVideoSuccessView>
        <GamingVideoHeaderContainer darkMode={isDarkMode}>
          <GamingVideoHeaderIconContainer darkMode={isDarkMode}>
            <IoLogoGameControllerB className="nxtwatch-savedVideo-icons" />
          </GamingVideoHeaderIconContainer>
          <h1>Gaming</h1>
        </GamingVideoHeaderContainer>
        <GamingVideoListContainer>
          {videosList.map((item) => (
            <GameVideoItem key={item.id} data={item} />
          ))}
        </GamingVideoListContainer>
      </GamingVideoSuccessView>
    );
  };

  renderContent = () => {
    const { apiStatus } = this.state;
    return (
      <NxtwatchContext.Consumer>
        {(value) => {
          const { isDarkMode } = value;
          switch (apiStatus) {
            case ApiStatusConstant.loading:
              return (
                <GamingLoaderContainer>
                  <ThreeDots
                    color={isDarkMode ? "white" : "#1e293b"}
                    height={80}
                    width={80}
                  />
                </GamingLoaderContainer>
              );
            case ApiStatusConstant.failed:
              return (
                <GamingFailureContainer darkMode={isDarkMode}>
                  <GamingFailureImage
                    src={
                      isDarkMode
                        ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
                        : "https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
                    }
                    alt="failure"
                  />
                  <GamingFailureHeading>
                    Oops! Something went wrong
                  </GamingFailureHeading>
                  <GamingFailureText darkMode={isDarkMode}>
                    We are having some trouble to complete your request.
                  </GamingFailureText>
                  <GamingFailureText darkMode={isDarkMode}>
                    Please try again.
                  </GamingFailureText>
                  <GamingFailureRetryBtn onClick={this.getGamingVideosList}>
                    Retry
                  </GamingFailureRetryBtn>
                </GamingFailureContainer>
              );
            case ApiStatusConstant.success:
              return this.renderGamingVideosList(isDarkMode);
            default:
              return null;
          }
        }}
      </NxtwatchContext.Consumer>
    );
  };
  render() {
    return <>{this.renderContent()}</>;
  }
}
export default GamingContent;
