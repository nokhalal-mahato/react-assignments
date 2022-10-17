import { Component } from "react";
import "./index.css";

class EmojiCard extends Component {

    onSelectEmojiHandler=()=>{
        const { data, onClick } = this.props;
        onClick(data.id);
    }
  render() {
    const {data}=this.props;
    return (<div className="emojiCard" id={data.id} onClick={this.onSelectEmojiHandler}>
        <img src={data.emojiUrl} alt={data.emojiName}/>
    </div>);
  }
}

export default EmojiCard;
