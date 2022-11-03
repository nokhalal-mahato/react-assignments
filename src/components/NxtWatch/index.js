import { Route, Switch } from "react-router-dom";
import Login from "./Routes/Login";
import { Component } from "react";
import NxtwatchContext from "./Contexts/NxtwatchContext";
import ProtectedRoute from "./ProtectedRoute";
import Home from "./Routes/Home";
import VideoDetailRoute from "./Routes/VideoItemDetail";

class Nxtwatch extends Component {
  state = { isDarkMode: true, showBanner: true };

  closeBanner = () => {
    this.setState({ showBanner: false });
  };

  toggleDarkMode = () => {
    this.setState((prevState) => ({ isDarkMode: !prevState.isDarkMode }));
  };
  render() {
    const { isDarkMode, showBanner } = this.state;
    return (
      <NxtwatchContext.Provider
        value={{
          isDarkMode,
          showBanner,
          toggleDarkMode: this.toggleDarkMode,
          closeBanner: this.closeBanner,
        }}
      >
        <Switch>
          <Route exact path="/Nxtwatch/login" component={Login} />
          <ProtectedRoute exact path="/Nxtwatch" component={Home} />
          {/* <ProtectedRoute exact path={`/Nxtwatch/trending`} component={Jobs} /> */}
          {/* <ProtectedRoute exact path={`/Nxtwatch/gaming`} component={Jobs} /> */}
          {/* <ProtectedRoute exact path={`/Nxtwatch/savedvideos`} component={Jobs} /> */}
          <ProtectedRoute
            exact
            path={`/Nxtwatch/video/:id`}
            component={VideoDetailRoute}
          />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </NxtwatchContext.Provider>
    );
  }
}

export default Nxtwatch;
