import { Component } from "react";
import BlogItem from "../BlogItem";
import Profile from "../Profile";
import "./index.css";
import { TailSpin } from "react-loader-spinner";

class Home extends Component {
  state = { isLoading: true, blogList: [], error: false };

  componentDidMount() {
    this.fetchBlog();
  }
  fetchBlog = async () => {
    try {
      const response = await fetch("https://apis.ccbp.in/blogs");
      if (!response.ok) {
        this.setState({ isLoading: false, error: true });
        return;
      }
      const data = await response.json();
      const updatedData = data.map((item) => ({
        id: item.id,
        title: item.title,
        imageUrl: item.image_url,
        avatarUrl: item.avatar_url,
        author: item.author,
        topic: item.topic,
      }));
      this.setState({ blogList: updatedData, isLoading: false });
    } catch (err) {
      this.setState({ isLoading: false, error: true });
    }
  };
  render() {
    const { isLoading, blogList, error } = this.state;
    return (
      <div className="bloglist-home">
        <Profile />
        <div className="bloglist-container">
          {!isLoading &&
            blogList.map((item) => <BlogItem key={item.id} data={item} />)}
          {isLoading && <TailSpin />}
          {error && <h1>Error</h1>}
        </div>
      </div>
    );
  }
}
export default Home;
