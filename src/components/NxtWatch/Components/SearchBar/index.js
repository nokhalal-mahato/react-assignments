import { Component } from "react";
import { BsSearch } from "react-icons/bs";
import { MdOutlineClear } from "react-icons/md";
import { SearchInput, SearchInputField, SearchLogoContainer } from "./styledComponent";
import "./index.css";
import NxtwatchContext from "../../Contexts/NxtwatchContext";

class SearchBar extends Component {
  onChangeInput = (event) => {
    const { onChangeSearch } = this.props;
    onChangeSearch(event.target.value);
  };
  render() {
    const { searchValue, clearInput } = this.props;
    return (
      <NxtwatchContext.Consumer>
        {(value) => {
          const { isDarkMode } = value;
          return (
            <SearchInputField
              darkMode={isDarkMode}
              className="nxtwatch-search-input-field"
            >
              <SearchInput
                placeholder="Search"
                value={searchValue}
                onChange={this.onChangeInput}
                type="text"
                darkMode={isDarkMode}
              />
              {searchValue.length > 0 && (
                <MdOutlineClear
                  className={`nxtwatch-clear-logo ${
                    isDarkMode && "dark-nxtwatch-clear-logo"
                  }`}
                  onClick={clearInput}
                />
              )}
              <SearchLogoContainer darkMode={isDarkMode}>
                <BsSearch className="nxtwatch-search-logo" />
              </SearchLogoContainer>
            </SearchInputField>
          );
        }}
      </NxtwatchContext.Consumer>
    );
  }
}

export default SearchBar;
