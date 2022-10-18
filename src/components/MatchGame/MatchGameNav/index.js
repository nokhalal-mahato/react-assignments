import { Component } from "react";
import "./index.css";

class MatchGameNav extends Component {
  render() {
    const {score,timer}=this.props;
    return (
      <div className="match-game-nav">
        <div className="match-game-image">
          <img src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png" />
        </div>
        <div className="match-game-nav-contnt">
          <h2 className="matchgame-nav-text">
            <span>Score: </span>
            {score}
          </h2>
          <div className="match-game-timer">
            <img src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png" />
            <h2 className="matchgame-nav-text">{timer} Sec</h2>
          </div>
        </div>
      </div>
    );
  }
}
export default MatchGameNav;
