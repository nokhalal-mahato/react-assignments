import { Component } from "react";
import { Link,withRouter } from "react-router-dom";
import "./index.css";

class TeamCard extends Component {
  render() {
    const { data } = this.props;
    const url=this.props.match.url;
    return (
      <Link
        className="ipldashboard-teamcard"
        to={`${url}/team/` + data.id}
      >
        <div className="team-card-image">
          <img src={data.teamImageUrl} alt={data.name} />
        </div>
        <h2 className="teamcard-name">{data.name}</h2>
      </Link>
    );
  }
}

export default withRouter(TeamCard);
