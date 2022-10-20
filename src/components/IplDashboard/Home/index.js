import { Component } from "react";
import "./index.css";
import TeamCard from "../TeamCard";
import {TailSpin} from 'react-loader-spinner';

class Home extends Component {
  state = { team: [], isLoading: false, error: false };
  componentDidMount() {
    this.fetchTeam();
  }
  fetchTeam = async () => {
    try {
      const response = await fetch("https://apis.ccbp.in/ipl");
      if (!response.ok) {
        this.setState({ isLoading: false, error: true });
        return;
      }
      const responsedata = await response.json();
      const data=responsedata.teams;
      console.log(data);
      if (data.length === 0) {
        this.setState({ isLoading: false, error: true });
        return;
      }
      const updatedData = data.map((item) => ({
        id: item.id,
        name: item.name,
        teamImageUrl: item.team_image_url,
      }));
      this.setState({ team: updatedData, isLoading: false });
    } catch (err) {
      this.setState({ isLoading: false, error: true });
      console.log(err);
    }
  };
  render() {
    const { isLoading, team, error } = this.state;
    return (
      <div className="ipldashboard-page">
        <div className="ipldashboard-main-image">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl"
          />
          <h1 className="ipldashboard-main-header">IPL Dashboard</h1>
        </div>
        {!isLoading && !error && (
          <div className="teams-container">
            {team.map((item) => (
              <TeamCard key={item.id} data={item} />
            ))}
          </div>
        )}
        {isLoading && <TailSpin />}
        {error && <h1>404 Not Found</h1>}
      </div>
    );
  }
}

export default Home;
