import { Component } from "react";
import "./index.css";

class BlogItem extends Component {
  render() {
    const {data}=this.props;
    return (
      <div className="bloglist-item">
        <div className="bloglist-item-top-setion">
          <h3 className="bloglist-item-title">{data.title}</h3>
          <p className="bloglist-item-date">{data.date}</p>
        </div>
        <p className="bloglist-item-description">{data.description}</p>
      </div>
    );
  }
}
export default BlogItem;
