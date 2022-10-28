import { Component } from "react";
import ConfigurationControls from "../../Components/ConfigurationControls";
import Layout from "../../Components/Layout";
import LayoutContext from "../../Contexts/layoutContext";
import "./index.css";

class LayoutBuilder extends Component {
  state = { showContent: true, showLeftNavbar: true, showRightNavbar: true };

  onToggleShowContent = () => {
    this.setState((prevState) => ({ showContent: !prevState.showContent }));
  };
  onToggleShowLeftNavbar = () => {
    this.setState((prevState) => ({
      showLeftNavbar: !prevState.showLeftNavbar,
    }));
  };
  onToggleShowRightNavbar = () => {
    this.setState((prevState) => ({
      showRightNavbar: !prevState.showRightNavbar,
    }));
  };
  render() {
    const { showContent, showLeftNavbar, showRightNavbar } = this.state;
    return (
      <LayoutContext.Provider
        value={{
          showContent,
          showLeftNavbar,
          showRightNavbar,
          onToggleShowContent: this.onToggleShowContent,
          onToggleShowLeftNavbar: this.onToggleShowLeftNavbar,
          onToggleShowRightNavbar: this.onToggleShowRightNavbar,
        }}
      >
        <div className="layout-builder-page">
          <ConfigurationControls
          />
          <Layout />
        </div>
      </LayoutContext.Provider>
    );
  }
}
export default LayoutBuilder;
