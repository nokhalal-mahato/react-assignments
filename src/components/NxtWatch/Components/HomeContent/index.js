import { Component } from "react";
import { ThreeDots } from "react-loader-spinner";
import Cookies from "js-cookie";
import ApiStatusConstant from "../../Constants/ApiStatusConstant";
import HomeVideoItem from "../HomeVideoItem";
import {
  HomeEmptyContainer,
  HomeEmptyHeading,
  HomeEmptyImage,
  HomeEmptyText,
  HomeFailureContainer,
  HomeFailureHeading,
  HomeFailureImage,
  HomeFailureRetryBtn,
  HomeFailureText,
  HomeLoaderContainer,
  HomeVideoListContainer,
} from "./styledComponent";
import NxtwatchContext from "../../Contexts/NxtwatchContext";

class HomeContent extends Component {
  state = {
    videosList: [],
    apiStatus: ApiStatusConstant.loading,
  };

  componentDidMount() {
    this.getVideosList();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.searchValue !== this.props.searchValue) {
      this.getVideosList();
    }
  }
  getVideosList = async () => {
    const { searchValue } = this.props;
    try {
      const jwtToken = Cookies.get("jwt_token");
      const response = await fetch(
        `https://apis.ccbp.in/videos/all?search=${searchValue}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );
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
        if (responseData.total === 0) {
          this.setState({
            videosList: updatedData,
            apiStatus: ApiStatusConstant.empty,
          });
          return;
        }
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

  renderVideosList = () => {
    const { videosList } = this.state;
    return (
      <HomeVideoListContainer>
        {videosList.map((video) => (
          <HomeVideoItem key={video.id} data={video} />
        ))}
      </HomeVideoListContainer>
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
                <HomeLoaderContainer>
                  <ThreeDots
                    color={isDarkMode ? "white" : "#1e293b"}
                    height={80}
                    width={80}
                  />
                </HomeLoaderContainer>
              );
            case ApiStatusConstant.failed:
              return (
                <HomeFailureContainer darkMode={isDarkMode}>
                  <HomeFailureImage
                    src={
                      isDarkMode
                        ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
                        : "https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
                    }
                    alt="failure"
                  />
                  <HomeFailureHeading>
                    Oops! Something went wrong
                  </HomeFailureHeading>
                  <HomeFailureText darkMode={isDarkMode}>
                    We are having some trouble to complete your request.
                  </HomeFailureText>
                  <HomeFailureText darkMode={isDarkMode}>
                    Please try again.
                  </HomeFailureText>
                  <HomeFailureRetryBtn onClick={this.getVideosList}>
                    Retry
                  </HomeFailureRetryBtn>
                </HomeFailureContainer>
              );
            case ApiStatusConstant.success:
              return this.renderVideosList();
            case ApiStatusConstant.empty:
              return (
                <HomeEmptyContainer darkMode={isDarkMode}>
                  <HomeEmptyImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                    alt="no video"
                  />
                  <HomeEmptyHeading>No Search Result Found</HomeEmptyHeading>
                  <HomeEmptyText darkMode={isDarkMode}>
                    Try different keyword or remove search filters
                  </HomeEmptyText>
                  <HomeFailureRetryBtn onClick={this.getVideosList}>
                    Retry
                  </HomeFailureRetryBtn>
                </HomeEmptyContainer>
              );
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
export default HomeContent;
