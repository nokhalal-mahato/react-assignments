import {Component} from 'react';
import { RockPaperScissorsContent, RockPaperScissorsPage, RuleCloseContiner, Rules } from './styleComponent';
import Popup from "reactjs-popup";
import { IoMdClose } from "react-icons/io";
import './index.css';
import ScoreBoard from '../Components/ScoreBoard';
import ResultView from '../Components/ResultView';
import ChoiceView from '../Components/ChoiceView';

class RockPaperScissors extends Component{
    state={score:0,showResult:false};
    onSelectChoice=()=>{
        this.setState({showResult:true});
    }
    onPlayAgain=()=>{
        this.setState({showResult:false})
    }
    render(){
        const { score, showResult } = this.state;
        return (
          <RockPaperScissorsPage>
            <RockPaperScissorsContent>
                <ScoreBoard score={score}/>
                {showResult ? <ResultView onPlayAgain={this.onPlayAgain}/> : <ChoiceView/>}
            </RockPaperScissorsContent>
            <Popup modal trigger={<Rules>RULES</Rules>} className="rock-popup">
              {(close) => (
                <>
                  <RuleCloseContiner>
                    <IoMdClose
                      onClick={() => close()}
                    />
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