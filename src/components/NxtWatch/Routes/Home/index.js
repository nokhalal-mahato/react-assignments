import { Component } from "react";
import Banner from "../../Components/Banner";
import HomeContent from "../../Components/HomeContent";
import NavBar from "../../Components/NavBar";
import SearchBar from "../../Components/SearchBar";
import SideBar from "../../Components/SideBar";
import NxtwatchContext from "../../Contexts/NxtwatchContext";
import {
  HomePage,
  HomePageContent,
  HomePageRightSection,
} from "./styledComponent";

class Home extends Component {
  state = { searchValue: "" };

  onChangeSearch = (value) => {
    this.setState({ searchValue: value });
  };
  onClearInput = () => {
    this.setState({ searchValue: "" });
  };
  render() {
    const { searchValue} = this.state;
    return (
      <NxtwatchContext.Consumer>
        {(value) => {
          const { isDarkMode, showBanner } = value;
          return (
            <HomePage darkMode={isDarkMode}>
              <NavBar />
              <HomePageContent>
                <SideBar />
                <HomePageRightSection darkMode={isDarkMode}>
                  {showBanner && <Banner />}
                  <SearchBar
                    searchValue={searchValue}
                    onChangeSearch={this.onChangeSearch}
                    clearInput={this.onClearInput}
                  />
                  <HomeContent searchValue={searchValue}/>
                </HomePageRightSection>
              </HomePageContent>
            </HomePage>
          );
        }}
      </NxtwatchContext.Consumer>
    );
  }
}

export default Home;
