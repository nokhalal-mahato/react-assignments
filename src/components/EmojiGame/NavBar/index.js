import { Component } from "react";
import "./index.css";

class NavBar extends Component {
  render() {
    const {gameState,score,maxScore}=this.props;
    return (
      <nav className="emojigame-navigation">
        <div className="emojigame-logo">
          <img src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png" />
          <span className="emoji-logo-text">Emoji Game</span>
        </div>
        {gameState && (
          <div className="emojigame-nav-scoreContainer">
            <span className="emojigame-nav-score">Score: {score}</span>
            <span className="emojigame-nav-score">Top Score: {maxScore}</span>
          </div>
        )}
      </nav>
    );
  }
}

export default NavBar;
