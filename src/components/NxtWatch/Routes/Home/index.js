import { Component } from "react";
import NavBar from "../../Components/NavBar";
import SideBar from "../../Components/SideBar";
import NxtwatchContext from "../../Contexts/NxtwatchContext";
import { HomePage } from "./styledComponent";

class Home extends Component {
  render() {
    return (
      <NxtwatchContext.Consumer>
        {(value) => {
          const { isDarkMode } = value;
          return (
            <HomePage darkMode={isDarkMode}>
              <NavBar />
              <SideBar/>
            </HomePage>
          );
        }}
      </NxtwatchContext.Consumer>
    );
  }
}

export default Home;
