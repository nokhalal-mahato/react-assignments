import { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";

class TeamCard extends Component {
  render() {
    const { data } = this.props;
    return (
      <Link className="ipldashboard-teamcard" to={`/team/` + data.id}>
        <div className="team-card-image">
          <img src={data.teamImageUrl} alt={data.name} />
        </div>
        <h2 className="teamcard-name">{data.name}</h2>
      </Link>
    );
  }
}

export default TeamCard;
