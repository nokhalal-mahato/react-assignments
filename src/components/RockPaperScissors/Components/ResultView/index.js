import {Component} from 'react';
import { ChoiceitemContainer, ChoiceItemImage, ChoicesContainer, PlayAgainBtn, ResultViewContainer } from './styleComponent';

class ResultView extends Component{
    render(){
        const { selectedChoice, opponentChoice,onPlayAgain ,result} = this.props;
        return (
          <ResultViewContainer>
            <ChoicesContainer>
              <ChoiceitemContainer>
                <h2>YOUY</h2>
                <ChoiceItemImage src={selectedChoice.imageUrl} />
              </ChoiceitemContainer>
              <ChoiceitemContainer>
                <h2>OPPONENT</h2>
                <ChoiceItemImage src={opponentChoice.imageUrl} />
              </ChoiceitemContainer>
            </ChoicesContainer>
            <h1>{result}</h1>
            <PlayAgainBtn onClick={onPlayAgain}>PLAY AGAIN</PlayAgainBtn>
          </ResultViewContainer>
        );
    }
}
export default ResultView;