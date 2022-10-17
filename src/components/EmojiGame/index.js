import { Component } from "react";
import EmojiCard from "./EmojiCard";
import emojilist from "./emojilist";
import "./index.css";
import NavBar from "./NavBar";
import WinOrLossCard from "./WinOrLossCard";

class EmojiGame extends Component {
  state = { gameState: true, emojiList: emojilist, score: 0, maxScore: 0 };

  onSelectEmoji = (id) => {
    console.log("hi");
    const { emojiList, score } = this.state;
    const element = emojiList.find((item) => item.id === id);
    if (element.isClick) {
      this.setState({ gameState: false });
    } else {
      let emojiArray = emojiList.map((item) => {
        if (item.id === id) {
          return { ...item, isClick: true };
        }
        return item;
      });
      emojiArray = emojiArray.sort((a, b) => 0.5 - Math.random());
      this.setState({ emojiList: emojiArray });
      this.setState((prevState) => ({ score: prevState.score + 1 }));
      if (score == 11) {
        this.setState({ gameState: false });
      }
    }
  };

  onPlayAgain = () => {
    const { score, maxScore } = this.state;
    if (score > maxScore) {
      this.setState({ maxScore: score });
    }
    this.setState({ score: 0 });
    this.setState((prevState) => ({
      emojiList: prevState.emojiList.map((item) => {
        return { ...item, isClick: false };
      }),
    }));
    this.setState({ gameState: true });
  };
  render() {
    const { gameState, emojiList, score, maxScore } = this.state;
    return (
      <div className="emojigame-page">
        <NavBar gameState={gameState} score={score} maxScore={maxScore} />
        <div className="emojigame-page-content">
          {gameState && (
            <div className="emojicard-container">
              {emojiList.map((item) => (
                <EmojiCard
                  onClick={this.onSelectEmoji}
                  key={item.id}
                  data={item}
                />
              ))}
            </div>
          )}
          {!gameState && (
            <WinOrLossCard onPlayAgain={this.onPlayAgain} score={score} />
          )}
        </div>
      </div>
    );
  }
}

export default EmojiGame;
