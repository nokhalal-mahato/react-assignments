import { Component } from "react";
import EmojiItem from "./EmojiItem";
import "./index.css";

const emojiList = [
  { id: "id1", name: "Sad", imageUrl: "https://img.icons8.com/emoji/96/000000/sad-but-relieved-face.png" },
  { id: "id2", name: "None", imageUrl: "https://img.icons8.com/emoji/96/000000/neutral-face.png" },
  { id: "id3", name: "Happy", imageUrl: "https://img.icons8.com/emoji/96/000000/grinning-face-with-big-eyes--v2.png" },
];
class FeedBack extends Component {
  state = { isClick: false };

  changeClickState = () => {
    this.setState({ isClick: true });
  };

  render() {
    const { isClick } = this.state;
    const content1 = (
      <>
        <h1>How satified are you with our customer support performance?</h1>
        <div className="feedback-emoji-container">
            {emojiList.map((item) => (
            <EmojiItem
                key={item.id}
                id={item.id}
                name={item.name}
                imageUrl={item.imageUrl}
                onclick={this.changeClickState}
            />
            ))}
        </div>
      </>
    );
    const content2 = (
      <>
        <img src="https://img.icons8.com/emoji/96/000000/heart-suit.png" alt="love emoji" className="feedback-emoji" />
        <h1 className="feedback-thankyou">Thank You</h1>
        <p className="feedback-response">
          We will use your feedback to improve our customer support performance
        </p>
      </>
    );
    return (
      <div className="feedback-page">
        <div className="feedback-content">
            {isClick ? content2 : content1}
        </div>
      </div>
    );
  }
}

export default FeedBack;
