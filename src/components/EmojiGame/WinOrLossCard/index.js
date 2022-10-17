import { Component } from "react";
import "./index.css";

class WinOrLossCard extends Component {
    playAgainHandler=()=>{
        this.props.onPlayAgain();
    }
  render() {
    const {score}=this.props;
    return (
      <div className="emoji-winloss">
        <div className="emoji-winloss-content">
          {score === 12 ? (
            <>
              <h1 className="emoji-winloss-heading">You Won</h1>
              <h3>Best Score</h3>
            </>
          ) : (
            <>
              <h1 className="emoji-winloss-heading">You Loss</h1>
              <h1 className="emoji-winloss-score-text">Score</h1>
            </>
          )}
          <h1 className="emoji-winloss-score">{score}/12</h1>
          <button
            className="emoji-playagain-btn"
            onClick={this.playAgainHandler}
          >
            Play Again
          </button>
        </div>
        <div className="emoji-winloss-image">
          {score === 12 ? (
            <img src="https://assets.ccbp.in/frontend/react-js/won-game-img.png" />
          ) : (
            <img src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png" />
          )}
        </div>
      </div>
    );
  }
}

export default WinOrLossCard;
