import {Component} from 'react';
import { ChoiceContainer, ChoiceName, Score, ScoreBoardContainer, ScoreContainer, ScoreTitle } from './styleComponent';

class ScoreBoard extends Component{
    render(){
        const {score}=this.props;
        return (
          <ScoreBoardContainer>
            <ChoiceContainer>
              <ChoiceName>ROCK</ChoiceName>
              <ChoiceName>PAPER</ChoiceName>
              <ChoiceName>SCISSORS</ChoiceName>
            </ChoiceContainer>
            <ScoreContainer>
              <ScoreTitle>Score</ScoreTitle>
              <Score>{score}</Score>
            </ScoreContainer>
          </ScoreBoardContainer>
        );
    }
}
export default ScoreBoard;