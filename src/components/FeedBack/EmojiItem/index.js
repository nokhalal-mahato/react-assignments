import { Component } from "react";
import './index.css'

class EmojiItem extends Component{

    onClickHandler=()=>{
        this.props.onclick();
    }

    render(){
        const {name,id,imageUrl}=this.props;
        return(
            <div>
                <div className="emoji-item" id={id}>
                    <img src={imageUrl} alt={name} onClick={this.onClickHandler}/>
                    <p className="emoji-item-name">{name}</p>
                </div>
            </div>
        );
    }
}

export default EmojiItem;