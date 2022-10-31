import { Component } from "react";
import LayoutContext from "../../Contexts/layoutContext";
import "./index.css";

class ConfigurationControls extends Component {
  render() {
    return (
      <LayoutContext.Consumer>
        {(value) => {
          const {
            showContent,
            showLeftNavbar,
            showRightNavbar,
            onToggleShowContent,
            onToggleShowLeftNavbar,
            onToggleShowRightNavbar,
          } = value;
          console.log(showContent)
          return (
            <div className="layout-configuration-controls">
              <h1>Layouts</h1>
              <div className="layout-checkbox-item">
                <input
                  type="checkbox"
                  checked={showContent}
                  onChange={onToggleShowContent}
                />
                <label className="layout-checkbox-text">Content</label>
              </div>
              <div className="jobby-checkbox-item">
                <input
                  type="checkbox"
                  checked={showLeftNavbar}
                  onChange={onToggleShowLeftNavbar}
                />
                <label className="layout-checkbox-text">Left NavBar</label>
              </div>
              <div className="layout-checkbox-item">
                <input
                  type="checkbox"
                  checked={showRightNavbar}
                  onChange={onToggleShowRightNavbar}
                />
                <label className="layout-checkbox-text">Right NavBar</label>
              </div>
            </div>
          );
        }}
      </LayoutContext.Consumer>
    );
  }
}
export default ConfigurationControls;
