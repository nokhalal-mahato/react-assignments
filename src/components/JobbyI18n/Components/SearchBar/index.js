import { Component } from "react";
import "./index.css";
import {BsSearch} from 'react-icons/bs';
import { MdOutlineClear } from "react-icons/md";
import { withTranslation } from "react-i18next";
import "../../i18n";


class SearchBar extends Component {
  onChangeInput = (event) => {
    const { onChangeSearch } = this.props;
    onChangeSearch(event.target.value);
  };
  render() {
    const {searchValue,className,clearInput,t}=this.props
    return (
      <div className={`jobby-search-input-field ${className}`}>
        <input
          className="jobby-search-input"
          placeholder={t('search')}
          value={searchValue}
          onChange={this.onChangeInput}
          type="text"
        />
        {searchValue.length > 0 && (
          <MdOutlineClear className="jobby-clear-logo" onClick={clearInput} />
        )}
        <div className="jobby-search-logo-container">
          <BsSearch className="jobby-search-logo" />
        </div>
      </div>
    );
  }
}

export default withTranslation()(SearchBar);
