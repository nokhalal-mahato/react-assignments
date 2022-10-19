import { Component } from "react";
import BlogItem from "../BlogItem";
import blogList from "../blogList";
import Profile from "../Profile";
import "./index.css";

class Home extends Component {
  render() {
    return (<div className="bloglist-home">
            <Profile/>
            <div className="bloglist-container">
                {blogList.map((item)=><BlogItem key={item.id} data={item}/>)}
            </div>
         </div>);
  }
}
export default Home;
