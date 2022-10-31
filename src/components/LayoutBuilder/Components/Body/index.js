import { Component } from "react";
import LayoutContext from "../../Contexts/layoutContext";
import Content from "../Content";
import LeftNavBar from "../LeftNavBar";
import RightNavBar from "../RightNavBar";
import "./index.css";

class Body extends Component {
  render() {
    return (
      <LayoutContext.Consumer>
        {(value) => {
          const { showContent, showLeftNavbar, showRightNavbar } = value;
          return (
            <div className="layout-body">
              {showLeftNavbar && <LeftNavBar />}
              {showContent && <Content />}
              {showRightNavbar && <RightNavBar />}
            </div>
          );
        }}
      </LayoutContext.Consumer>
    );
  }
}
export default Body;
