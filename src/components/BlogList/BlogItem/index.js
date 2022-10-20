import { Component } from "react";
import "./index.css";

class BlogItem extends Component {
  render() {
    const {data}=this.props;
    return (
      <div className="bloglist1-item">
        <div className="bloglist1-item-top-setion">
          <h3 className="bloglist1-item-title">{data.title}</h3>
          <p className="bloglist1-item-date">{data.date}</p>
        </div>
        <p className="bloglist1-item-description">{data.description}</p>
      </div>
    );
  }
}
export default BlogItem;
