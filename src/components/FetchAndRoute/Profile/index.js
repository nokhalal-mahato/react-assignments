import { Component } from "react";
import "./index.css";

class Profile extends Component {
  render() {
    return (
      <div className="bloglist-profile">
        <div className="bloglist-avatar">
          <img src="https://assets.ccbp.in/frontend/react-js/profile-img.png" />
        </div>
        <h2 className="bloglist-profile-name">Nokhalal Mahato</h2>
        <p className="bloglist-profile-description">Frontend Develpoer at Nxtwave</p>
      </div>
    );
  }
}
export default Profile;
