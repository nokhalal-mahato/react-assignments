import {Component} from 'react';
import choicesList from '../../Constants/choicesList';
import { ChoiceViewContainer, ChoiceViewItem } from './styleComponent';

class ChoiceView extends Component{
    onClickChoice=(item)=>{
        this.props.onSelectChoice(item);
    }
    render(){

        return(
            <ChoiceViewContainer>
                {choicesList.map(item=><ChoiceViewItem key={item.id} src={item.imageUrl} onClick={this.onClickChoice.bind(this,item)}/>)}
            </ChoiceViewContainer>
        )
    }
}
export default ChoiceView;