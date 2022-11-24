import { ChangeEvent, Component } from "react";
import "./index.css";
import {BsSearch} from 'react-icons/bs';
import { MdOutlineClear } from "react-icons/md";

type PropsType = {
  onChangeSearch: (value: string) => void;
  className?:string;
  searchValue:string;
  clearInput:()=>void;
};

class SearchBar extends Component<PropsType> {
  onChangeInput = (event:ChangeEvent<HTMLInputElement>) => {
    const { onChangeSearch } = this.props;
    onChangeSearch(event.target.value);
  };
  render() {
    const {searchValue,className,clearInput}=this.props
    return (
      <div className={`jobby-search-input-field ${className}`}>
        <input
          className="jobby-search-input"
          placeholder="Search"
          value={searchValue}
          onChange={this.onChangeInput}
          type="text"
          data-testid='search'
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

export default SearchBar;
