import { Component } from "react";
import "./index.css";

class MatchCard extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="team-card">
        <div className="team-card-image">
          <img src={data.competing_team_logo} alt={data.competing_team} />
        </div>
        <h2 className="team-card-team">{data.competing_team}</h2>
        <h4 className="team-card-result">{data.result}</h4>
        <h2
          className={`team-card-status ${
            data.match_status === "Won" ? "wonClass" : ""
          }`}
        >
          {data.match_status}
        </h2>
      </div>
    );
  }
}

export default MatchCard;
