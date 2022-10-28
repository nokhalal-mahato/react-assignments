import { Component } from "react";
import './index.css';

class LeftNavBar extends Component{
    render(){
        return (
          <div className="left-nav">
            <h3>Left NavBar</h3>
            <ul className="left-nav-list">
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
            </ul>
          </div>
        );
    }
}
export default LeftNavBar;