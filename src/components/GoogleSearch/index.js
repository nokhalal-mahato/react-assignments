import { Component } from "react";
import './index.css';
import SuggestionItem from "./SuggestionItem";

const suggestionList=[
    {id:"id1",text:"Price of etherium"},
    {id:'id2',text:"Tesla Share Price"},
    {id:'id3',text:"Nxtwave Founder"},
    {id:'id4',text:"Latest trends in ML"},
    {id:'id5',text:"Latest trends in AI"},
    {id:'id6',text:"What are 4.0 Technologies"},
];
class GoogleSearch extends Component{
    state={inputValue:''}
    suggestionLists = suggestionList;

    onClearHandler=()=>{
        this.setState({inputValue:''});
        this.suggestionLists=suggestionList;
    }

    onPaste=(text)=>{
        this.setState({inputValue:text});
        this.suggestionLists = suggestionList.filter((item) =>
        item.text.toLocaleLowerCase().includes(text.toLocaleLowerCase()));
    }

    onChangeInput = (event) => {
        this.setState({ inputValue: event.target.value });
        this.suggestionLists = suggestionList.filter((item) =>
        item.text.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()));
    };

    render(){
        const {inputValue}=this.state;
        return(
            <div className="google-search-page">
                <img src="https://assets.ccbp.in/frontend/react-js/google-logo.png" alt="google logo" className="google-logo"/>
                <div className="google-search">
                    <div className="google-input-field">
                        <img src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png" alt="search icon"/>
                        <input type="text" className="google-input" placeholder="Search Google" value={inputValue} onChange={this.onChangeInput}/>
                        {inputValue.length>0 && <img src="https://img.icons8.com/material-outlined/24/000000/multiply--v1.png" alt='cross' onClick={this.onClearHandler} className="search-cross"/>}
                    </div>
                    {this.suggestionLists.map((item)=><SuggestionItem key={item.id} id={item.id} text={item.text} onPaste={this.onPaste}/>)}
                </div>
            </div>
        );
    }
}

export default GoogleSearch;