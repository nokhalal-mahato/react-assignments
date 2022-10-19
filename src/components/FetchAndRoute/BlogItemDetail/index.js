import { Component } from "react";
import "./index.css";
import { TailSpin } from "react-loader-spinner";

class BlogItemDetail extends Component {
  state = { blogData: {}, isLoading: true, error: false };
  componentDidMount() {
    this.fetchBlogData();
  }
  fetchBlogData = async () => {
    const params = this.props.match.params.id;
    try {
      const response = await fetch("https://apis.ccbp.in/blogs/" + params);
      if (!response.ok) {
        this.setState({ isLoading: false, error: true });
        return;
      }
      const data = await response.json();
      const updatedData = {
        id: data.id,
        title: data.title,
        imageUrl: data.image_url,
        avatarUrl: data.avatar_url,
        author: data.author,
        content: data.content,
        topic: data.topic,
      };
      this.setState({ blogData: updatedData, isLoading: false });
    } catch (err) {
      this.setState({ isLoading: false, error: true });
    }
  };

  render() {
    const { isLoading, error, blogData } = this.state;
    return (
      <div className="blog-detail-page">
        {!isLoading && (
          <div className="blog-detail">
            <h2 className="blog-detail-header">{blogData.title}</h2>
            <div className="bloglist-item-author-container">
              <div className="bloglist-item-author">
                <img src={blogData.avatarUrl} />
              </div>
              <p className="bloglist-item-description">{blogData.author}</p>
            </div>
            <div className="bloglist-item-main-image">
              <img src={blogData.imageUrl} />
            </div>
            <p className="bloglist-detail-content">{blogData.content}</p>
          </div>
        )}
        {isLoading && <TailSpin />}
        {error && <h1>Error</h1>}
      </div>
    );
  }
}
export default BlogItemDetail;
