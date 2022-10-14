import { Component } from "react";
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";
import "./index.css";

class CommentApp extends Component {
  state = { commentList: [], count: 0 };

  onDelete = (id) => {
    this.setState((prevState) => {
      const filteredArray = prevState.commentList.filter(
        (item) => item.id !== id
      );
      return { commentList: filteredArray, count: prevState.count - 1 };
    });
  };

  onLike = (id) => {
    this.setState((prevState) => ({commentList:prevState.commentList.map((item)=>{
        if(item.id==id){
            return {...item,like:!item.like};
        }
        return item;
    })}));
  };
  onAddComment = (data) => {
    this.setState((prevState) => ({
      commentList: [...prevState.commentList, data],
      count: prevState.count + 1,
    }));
  };
  render() {
    const { commentList, count } = this.state;
    return (
      <div className="comment-page">
        <div className="comment-page-content">
            <h1 className="comment-page-header">Comments</h1>
          <div className="comment-top-section">
            <CommentForm onAddComment={this.onAddComment}/>
            <div className="comment-main-image">
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
                alt="main"
              />
            </div>
          </div>
          <hr />
          <span className="comment-count">{count}</span>
          <span className="comment-text">Comments</span>
          <div className="comment-contianer">
            {commentList.map((item) => (
              <CommentItem
                data={item}
                onDelete={this.onDelete}
                onLike={this.onLike}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default CommentApp;
