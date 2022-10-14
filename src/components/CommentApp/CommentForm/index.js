import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./index.css";

class CommentForm extends Component {
  constructor(props){
    super(props);
    this.inputRef = React.createRef();
    this.textRef = React.createRef();
  }
  
  onSubmithandler = (event) => {
    event.preventDefault();
    const bgcolor=`rgb(${Math.random() * 255},${
                Math.random() * 255
              },${Math.random() * 255})`
    const data = {
      id: uuidv4(),
      name: this.inputRef.current.value,
      comment: this.textRef.current.value,
      like: false,
      time: new Date().getTime(),
      bgcolor:bgcolor,
    };
    this.inputRef.current.value='';
    this.textRef.current.value="";
    this.props.onAddComment(data);
  };
  render() {
    return (
      <div className="comment-form">
        <p>Say something about 4.0 Technologies</p>
        <form onSubmit={this.onSubmithandler}>
          <input type="text" placeholder="Your Name" ref={this.inputRef} required/>
          <textarea placeholder="Your Comment" ref={this.textRef} rows="5" required/>
          <button type="submit" className="commentform-btn">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default CommentForm;
