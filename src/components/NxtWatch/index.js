import { Route, Switch } from "react-router-dom";
import Login from "./Routes/Login";
import { Component } from "react";
import NxtwatchContext from "./Contexts/NxtwatchContext";
import ProtectedRoute from "./ProtectedRoute";
import Home from "./Routes/Home";
import VideoDetailRoute from "./Routes/VideoItemDetail";
import SavedVideoRoute from "./Routes/SavedVideos";
import TrendingRoute from "./Routes/Trending";
import GamingRoute from "./Routes/Gaming";
import NotFound from "./Routes/NotFound";

class Nxtwatch extends Component {
  state = {
    isDarkMode: true,
    showBanner: true,
    savedVideo: [],
    likedVideo: [],
    dislikedVideo: [],
  };

  closeBanner = () => {
    this.setState({ showBanner: false });
  };

  toggleDarkMode = () => {
    this.setState((prevState) => ({ isDarkMode: !prevState.isDarkMode }));
  };
  toggleDislikedVideo = (video) => {
    const { likedVideo, dislikedVideo } = this.state;
    if (dislikedVideo.find((item) => item.id === video.id)) {
      this.setState((prevState) => ({
        dislikedVideo: prevState.dislikedVideo.filter(
          (item) => item.id !== video.id
        ),
      }));
    } else {
      this.setState((prevState) => ({
        dislikedVideo: [...prevState.dislikedVideo, video],
      }));
      if (likedVideo.find((item) => item.id === video.id)) {
        this.setState((prevState) => ({
          likedVideo: prevState.likedVideo.filter(
            (item) => item.id !== video.id
          ),
        }));
      }
    }
  };
  toggleLikedVideo = (video) => {
    const { likedVideo, dislikedVideo } = this.state;
    if (likedVideo.find((item) => item.id === video.id)) {
      this.setState((prevState) => ({
        likedVideo: prevState.likedVideo.filter((item) => item.id !== video.id),
      }));
    } else {
      this.setState((prevState) => ({
        likedVideo: [...prevState.likedVideo, video],
      }));
      if (dislikedVideo.find((item) => item.id === video.id)) {
        this.setState((prevState) => ({
          dislikedVideo: prevState.dislikedVideo.filter(
            (item) => item.id !== video.id
          ),
        }));
      }
    }
  };
  toggleSavedVideo = (video) => {
    const { savedVideo } = this.state;
    if (savedVideo.find((item) => item.id === video.id)) {
      this.setState((prevState) => ({
        savedVideo: prevState.savedVideo.filter((item) => item.id !== video.id),
      }));
    } else {
      this.setState((prevState) => ({
        savedVideo: [...prevState.savedVideo, video],
      }));
    }
  };
  render() {
    const { isDarkMode, showBanner, savedVideo,likedVideo,dislikedVideo } = this.state;
    return (
      <NxtwatchContext.Provider
        value={{
          isDarkMode,
          showBanner,
          savedVideo,
          likedVideo,
          dislikedVideo,
          toggleDislikedVideo: this.toggleDislikedVideo,
          toggleLikedVideo: this.toggleLikedVideo,
          toggleDarkMode: this.toggleDarkMode,
          closeBanner: this.closeBanner,
          toggleSavedVideo: this.toggleSavedVideo,
        }}
      >
        <Switch>
          <Route exact path="/Nxtwatch/login" component={Login} />
          <ProtectedRoute exact path="/Nxtwatch" component={Home} />
          <ProtectedRoute
            exact
            path={`/Nxtwatch/trending`}
            component={TrendingRoute}
          />
          <ProtectedRoute
            exact
            path={`/Nxtwatch/gaming`}
            component={GamingRoute}
          />
          <ProtectedRoute
            exact
            path={`/Nxtwatch/savedvideos`}
            component={SavedVideoRoute}
          />
          <ProtectedRoute
            exact
            path={`/Nxtwatch/video/:id`}
            component={VideoDetailRoute}
          />
          <Route component={NotFound} />
        </Switch>
      </NxtwatchContext.Provider>
    );
  }
}

export default Nxtwatch;
