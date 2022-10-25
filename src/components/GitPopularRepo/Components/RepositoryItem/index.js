import { Component } from "react";
import "./index.css";

class RepositoryItem extends Component {
  render() {
    const {data}=this.props;
    return (
      <div className="git-popular-repository-item">
        <div className="git-repo-item-image">
          <img src={data.avatarUrl} alt={data.name} />
        </div>

        <h2 className="git-repository-item-name">{data.name}</h2>
        <div className="git-repo-item-detail">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            alt="star"
          />
          <p>{data.starsCount} stars</p>
        </div>
        <div className="git-repo-item-detail">
          <img
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            alt="fork"
          />
          <p>{data.forksCount} forks</p>
        </div>
        <div className="git-repo-item-detail">
          <img
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            alt="open-issues"
          />
          <p>{data.issuesCount} open issues</p>
        </div>
      </div>
    );
  }
}
export default RepositoryItem;
