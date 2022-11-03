import { Component } from "react";
import { ThreeDots } from "react-loader-spinner";
import Cookies from "js-cookie";
import ApiStatusConstant from "../../Constants/ApiStatusConstant";
import {
  VideoDetailFailureContainer,
  VideoDetailFailureHeading,
  VideoDetailFailureImage,
  VideoDetailFailureRetryBtn,
  VideoDetailFailureText,
  VideoDetailLoaderContainer,
} from "./styledComponent";
import NxtwatchContext from "../../Contexts/NxtwatchContext";
import VideoItem from "../VideoItem";

class VideoDetail extends Component {
  state = {
    videoDetail: {},
    apiStatus: ApiStatusConstant.loading,
  };

  componentDidMount() {
    this.getVideoDetail();
  }

  getVideoDetail = async () => {
    const { id } = this.props;
    try {
      const jwtToken = Cookies.get("jwt_token");
      const response = await fetch(`https://apis.ccbp.in/videos/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });
      if (response.ok) {
        let responseData = await response.json();        
        responseData = responseData.video_details;
        const updatedData = {
          title: responseData.title,
          id: responseData.id,
          thumbnailUrl: responseData.thumbnail_url,
          videoUrl: responseData.video_url,
          channel: responseData.channel,
          viewCount: responseData.view_count,
          publishedAt: responseData.published_at,
          description:responseData.description,
        };
        this.setState({
          videoDetail: updatedData,
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

  renderVideoDetail = () => {
    const { videoDetail } = this.state;
    return (
        <VideoItem data={videoDetail}/>
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
                <VideoDetailLoaderContainer>
                  <ThreeDots
                    color={isDarkMode ? "white" : "#1e293b"}
                    height={80}
                    width={80}
                  />
                </VideoDetailLoaderContainer>
              );
            case ApiStatusConstant.failed:
              return (
                <VideoDetailFailureContainer darkMode={isDarkMode}>
                  <VideoDetailFailureImage
                    src={
                      isDarkMode
                        ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
                        : "https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
                    }
                    alt="failure"
                  />
                  <VideoDetailFailureHeading>
                    Oops! Something went wrong
                  </VideoDetailFailureHeading>
                  <VideoDetailFailureText darkMode={isDarkMode}>
                    We are having some trouble to complete your request.
                  </VideoDetailFailureText>
                  <VideoDetailFailureText darkMode={isDarkMode}>
                    Please try again.
                  </VideoDetailFailureText>
                  <VideoDetailFailureRetryBtn onClick={this.getVideosList}>
                    Retry
                  </VideoDetailFailureRetryBtn>
                </VideoDetailFailureContainer>
              );
            case ApiStatusConstant.success:
              return this.renderVideoDetail();
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
export default VideoDetail;
