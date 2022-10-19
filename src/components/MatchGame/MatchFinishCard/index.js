import { Component } from "react";
import "./index.css";

class MatchFinishCard extends Component {
  playAgainHandler = () => {
    this.props.onPlayAgain();
  };
  render() {
    return (
      <div className="match-finish-card">
        <img src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"  className="match-tropy-image"/>
        <h1>Your Score</h1>
        <h1>{this.props.score}</h1>
        <div onClick={this.playAgainHandler} className='match-play-again-btn'>
          <img src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png" />
          <span>Play Again</span>
        </div>
      </div>
    );
  }
}
export default MatchFinishCard;
