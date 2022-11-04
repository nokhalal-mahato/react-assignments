import { Component } from "react";
import { ThreeDots } from "react-loader-spinner";
import Cookies from "js-cookie";
import ApiStatusConstant from "../../Constants/ApiStatusConstant";
import {
  TrendingFailureContainer,
  TrendingFailureHeading,
  TrendingFailureImage,
  TrendingFailureRetryBtn,
  TrendingFailureText,
  TrendingLoaderContainer,
  TrendingVideoHeaderContainer,
  TrendingVideoHeaderIconContainer,
  TrendingVideoListContainer,
  TrendingVideoSuccessView,
} from "./styledComponent";
import NxtwatchContext from "../../Contexts/NxtwatchContext";
import SavedVideoItem from "../SavedVideoItem";
import { MdLocalFireDepartment } from "react-icons/md";

class TrendingContent extends Component {
  state = {
    videosList: [],
    apiStatus: ApiStatusConstant.loading,
  };

  componentDidMount() {
    this.getTrendingVideosList();
  }

  getTrendingVideosList = async () => {
    try {
      const jwtToken = Cookies.get("jwt_token");
      const response = await fetch(`https://apis.ccbp.in/videos/trending`, {
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
          channel: video.channel,
          viewCount: video.view_count,
          publishedAt: video.published_at,
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

  renderTrendingVideosList = (isDarkMode) => {
    const { videosList } = this.state;
    return (
      <TrendingVideoSuccessView>
        <TrendingVideoHeaderContainer darkMode={isDarkMode}>
          <TrendingVideoHeaderIconContainer darkMode={isDarkMode}>
            <MdLocalFireDepartment className="nxtwatch-savedVideo-icons" />
          </TrendingVideoHeaderIconContainer>
          <h1>Trending</h1>
        </TrendingVideoHeaderContainer>
        <TrendingVideoListContainer>
          {videosList.map((item) => (
            <SavedVideoItem key={item.id} data={item} />
          ))}
        </TrendingVideoListContainer>
      </TrendingVideoSuccessView>
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
                <TrendingLoaderContainer>
                  <ThreeDots
                    color={isDarkMode ? "white" : "#1e293b"}
                    height={80}
                    width={80}
                  />
                </TrendingLoaderContainer>
              );
            case ApiStatusConstant.failed:
              return (
                <TrendingFailureContainer darkMode={isDarkMode}>
                  <TrendingFailureImage
                    src={
                      isDarkMode
                        ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
                        : "https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
                    }
                    alt="failure"
                  />
                  <TrendingFailureHeading>
                    Oops! Something went wrong
                  </TrendingFailureHeading>
                  <TrendingFailureText darkMode={isDarkMode}>
                    We are having some trouble to complete your request.
                  </TrendingFailureText>
                  <TrendingFailureText darkMode={isDarkMode}>
                    Please try again.
                  </TrendingFailureText>
                  <TrendingFailureRetryBtn onClick={this.getVideosList}>
                    Retry
                  </TrendingFailureRetryBtn>
                </TrendingFailureContainer>
              );
            case ApiStatusConstant.success:
              return this.renderTrendingVideosList(isDarkMode);
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
export default TrendingContent;
