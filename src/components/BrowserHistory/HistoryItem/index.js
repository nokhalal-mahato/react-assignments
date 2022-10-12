import { Component } from "react";
import './index.css';


class HistoryItem extends Component{

    onDeleteHandler=()=>{
        this.props.onDelete(this.props.id);
    }
    
    render(){
        const {time,id,url,name}=this.props;
        return(
            <div id={id} className="history-item">
                <p className="history-time">{time}</p>
                <div className="history-item-container">
                    <div className="history-item-content">
                        <p className="history-name">{name}</p>
                        <p className="history-url">{url}</p>
                    </div>
                    <img src="https://assets.ccbp.in/frontend/react-js/delete-img.png" alt="delete" onClick={this.onDeleteHandler}/>
                </div>
            </div>
        );
    }
}

export default HistoryItem;