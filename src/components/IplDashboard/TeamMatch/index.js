import { Component } from "react";
import "./index.css";
import { TailSpin } from "react-loader-spinner";
import LatestMatch from "../LatestMatch";
import MatchCard from "../MatchCard";

class TeamMatch extends Component {
  state = { teamData: {}, isLoading: true, error: false };
  componentDidMount() {
    this.fetchTeamData();
  }
  fetchTeamData = async () => {
    const params = this.props.match.params.id;
    try {
      const response = await fetch("https://apis.ccbp.in/ipl/" + params);
      if (!response.ok) {
          this.setState({ isLoading: false, error: true });
          return;
        }
        const data = await response.json();
        console.log(data)
      if (Object.keys(data).length===0) {
        this.setState({ isLoading: false, error: true });
        return;
      }
      const updatedData = {
        teamUrl: data.team_banner_url,
        latestMatchDetails: data.latest_match_details,
        recentMatches: data.recent_matches,
      };
      this.setState({ teamData: updatedData, isLoading: false });
    } catch (err) {
      this.setState({ isLoading: false, error: true });
    }
  };

  render() {
    const { isLoading, error, teamData } = this.state;
    const {recentMatches}=teamData;
    return (
      <div className="team-match-page">
        {!isLoading && !error && (
          <div className="team-match-content">
            <div className="team-banner">
              <img src={teamData.teamUrl} alt="" />
            </div>
            <h3>Latest Matchs</h3>
            <LatestMatch data={teamData.latestMatchDetails} />
            <div className="team-card-container">
                {recentMatches.map((item)=><MatchCard key={item.id} data={item}/>)}
            </div>
          </div>
        )}
        {isLoading && <TailSpin />}
        {error && <h1>404 Not Found</h1>}
      </div>
    );
  }
}

export default TeamMatch;
