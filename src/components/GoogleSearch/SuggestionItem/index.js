import { Component } from "react";
import './index.css';

class SuggestionItem extends Component{

    onPasteHandler=()=>{
        this.props.onPaste(this.props.text);
    }

    render(){
        const {id,text}=this.props;
        return(
            <div className="suggestion-item" id={id}>
                <p className="suggestion-item-text">{text}</p>
                <img src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png" alt="arrow" onClick={this.onPasteHandler}/>
            </div>
        );
    }
}
export default SuggestionItem;