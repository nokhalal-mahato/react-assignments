import { Component } from "react";
import {
  RockPaperScissorsContent,
  RockPaperScissorsPage,
  RuleCloseContiner,
  Rules,
} from "./styleComponent";
import Popup from "reactjs-popup";
import { IoMdClose } from "react-icons/io";
import "./index.css";
import ScoreBoard from "../Components/ScoreBoard";
import ResultView from "../Components/ResultView";
import ChoiceView from "../Components/ChoiceView";
import choicesList from "../Constants/choicesList";

class RockPaperScissors extends Component {
  state = {
    score: 0,
    showResult: false,
    selectedChoice: "",
    opponentChoice: "",
    result: "",
  };
  onSelectChoice = (item) => {
    console.log(item.id);
    const opponentChoice = choicesList[Math.round(Math.random() * 3)];
    let result;
    if (item.id === opponentChoice.id) {
      result = "DRAW";
    } else if (item.id === "ROCK") {
      if (opponentChoice.id == "SCISSORS") {
        result = "WON";
      } else {
        result = "LOSS";
      }
    } else if (item.id === "PAPER") {
      if (opponentChoice.id == "ROCK") {
        result = "WON";
      } else {
        result = "LOSS";
      }
    } else {
      if (opponentChoice.id == "PAPER") {
        result = "WON";
      } else {
        result = "LOSS";
      }
    }
    if (result == "WON") {
      this.setState((prevState) => ({ score: prevState.score + 1 }));
      this.setState({
        showResult: true,
        selectedChoice: item,
        opponentChoice: opponentChoice,
        result: "YOU WON",
      });
    } else if (result == "DRAW") {
      this.setState({
        showResult: true,
        selectedChoice: item,
        opponentChoice: opponentChoice,
        result: "IT IS DRAW",
      });
    } else {
      this.setState((prevState) => ({ score: prevState.score - 1 }));
      this.setState({
        showResult: true,
        selectedChoice: item,
        opponentChoice: opponentChoice,
        result: "YOU LOSS",
      });
    }
  };
  onPlayAgain = () => {
    this.setState({
      showResult: false,
      selectedChoice: "",
      opponentChoice: "",
      result: "",
    });
  };
  render() {
    const { score, showResult, selectedChoice, opponentChoice,result } = this.state;
    return (
      <RockPaperScissorsPage>
        <RockPaperScissorsContent>
          <ScoreBoard score={score} />
          {showResult ? (
            <ResultView
              onPlayAgain={this.onPlayAgain}
              selectedChoice={selectedChoice}
              opponentChoice={opponentChoice}
              result={result}
            />
          ) : (
            <ChoiceView onSelectChoice={this.onSelectChoice} />
          )}
        </RockPaperScissorsContent>
        <Popup modal trigger={<Rules>RULES</Rules>} className="rock-popup">
          {(close) => (
            <>
              <RuleCloseContiner>
                <IoMdClose onClick={() => close()} />
              </RuleCloseContiner>

              <img src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png" />
            </>
          )}
        </Popup>
      </RockPaperScissorsPage>
    );
  }
}
export default RockPaperScissors;
