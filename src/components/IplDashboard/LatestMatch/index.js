import { Component } from "react";
import "./index.css";

class LatestMatch extends Component {
  render() {
    const {data}=this.props;
    return (
      <div className="latestmatch">
        <div className="latestmatch-left-section">
          <h1>{data.competing_team}</h1>
          <h2>{data.date}</h2>
          <h3>{data.venue}</h3>
          <h3>{data.result}</h3>
        </div>
        <div className="latestmatch-middle-section">
          <img src={data.competing_team_logo} alt={data.competing_team} />
        </div>
        <div className="latestmatch-right-section">
          <h3>First Innings</h3>
          <p>{data.first_innings}</p>
          <h3>Second Innings</h3>
          <p>{data.second_innings}</p>
          <h3>Man of The Match</h3>
          <p>{data.man_of_the_match}</p>
          <h3>Umpires</h3>
          <p>{data.umpires}</p>
        </div>
      </div>
    );
  }
}

export default LatestMatch;
