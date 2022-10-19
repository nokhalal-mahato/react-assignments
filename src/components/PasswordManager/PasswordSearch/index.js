import { Component } from "react";
import './index.css';

class PasswordSearch extends Component{

    onChangePasswordSearchHandler=(event)=>{
        this.props.onChangePasswordSearch(event.target.value)
    }
    render(){
        const {passwordSearchValue}=this.props;
        return (
          <div className="password-search-field">
            <div className="password-search-logo">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search logo"
              />
            </div>
            <div className="password-search-input">
              <input
                type="text"
                placeholder="Search"
                value={passwordSearchValue}
                onChange={this.onChangePasswordSearchHandler}
                className="password-input"
              />
            </div>
          </div>
        );
    }
}

export default PasswordSearch;