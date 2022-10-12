import { Component } from "react";
import HistoryItem from "./HistoryItem";
import './index.css';

const historylist=[
    {id:"id1",name:"Instagram",url:"instagram.com",time:"07:45 PM"},
    {id:"id2",name:"Twitter. It's whats happening",url:"twitter.com",time:"06:45 PM"},
    {id:"id3",name:"Facebook - log in or sign up",url:"facebook.com",time:"05:45 PM"},
    {id:"id4",name:"LinkedIn: Log In or Sign Up",url:"linkedin.com",time:"04:45 PM"},
    {id:"id5",name:"GitHub: Where the world builds software",url:"github.com",time:"03:45 PM"},
    {id:"id6",name:"React - A JavaScript ",url:"reactjs.org",time:"02:45 PM"},
];
class BrowzerHistory extends Component{
    state={historyList:historylist,inputValue:''};

    onDelete=(id)=>{
        console.log(id);
        const filteredHistoryList=this.state.historyList.filter((item)=>item.id!==id);
        this.setState({historyList:filteredHistoryList});
    }
    onChangeInput = (event) => {
        this.setState({ inputValue: event.target.value });
        this.state.historyList = historylist.filter((item) =>
        item.name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()));
    };

    render(){
        const {historyList,inputValue}=this.state;
        return(
            <div className="history-page">
                <nav className="nav-bar">
                    <img src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png" className="history-logo" alt="history-logo"/>
                    <div className="history-search-field">
                        <div className="history-search-logo">
                            <img src="https://assets.ccbp.in/frontend/react-js/search-img.png" alt="search logo"/>
                        </div>
                        <div className="history-search-input">
                            <input type="text" placeholder="Search History" value={inputValue} onChange={this.onChangeInput} className="history-input"/>

                        </div>
                    </div>
                </nav>
                <div className="history-container">
                    {historyList.length ===0 && <p>There is no history to show</p>}
                    {historyList.map((item)=><HistoryItem id={item.id} key={item.id} time={item.time} url={item.url} name={item.name} onDelete={this.onDelete}/>)}
                </div>
            </div>
        );
    }
}
export default BrowzerHistory;