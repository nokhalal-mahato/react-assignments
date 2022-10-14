import { Component } from "react";
import "./index.css";

class CommentItem extends Component {
  onDeleteHandler = () => {
    const { data, onDelete } = this.props;
    onDelete(data.id);
  };

  onLikeHandler = () => {
    const { data, onLike } = this.props;
    onLike(data.id);
  };
  render() {
    const { data } = this.props;
    const currentTime = Math.floor(
      (new Date().getTime() - data.time) / 1000 / 60
    );
    return (
      <div className="comment-item">
        <div className="comment-item-top-section">
          <div className="comment-avatar" style={{backgroundColor:data.bgcolor}}>{data.name[0]}</div>
          <div>
            <h3 className="comment-name">{data.name}</h3>
            <span className="comment-time">
              {currentTime < 1
                ? "less than a minute ago"
                : `${currentTime} minute ago`}
            </span>
            <p className="comment-item-comment">{data.comment}</p>
          </div>
        </div>
        <div className="comment-item-bottom-section">
          <div className="comment-like">
            {data.like ? (
              <>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
                  onClick={this.onLikeHandler}
                />
                <span className="comment-like-text comment-active">Like</span>
              </>
            ) : (
              <>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
                  onClick={this.onLikeHandler}
                />
                <span className="comment-like-text">Like</span>
              </>
            )}
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            onClick={this.onDeleteHandler}
          />
        </div>
        <hr />
      </div>
    );
  }
}
export default CommentItem;
