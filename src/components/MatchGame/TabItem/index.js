import { Component } from "react";
import "./index.css";

class TabItem extends Component {
  setTabHandler = () => {
    const { data, onSelectTab } = this.props;
    onSelectTab(data);
  };

  render() {
    const { data, active } = this.props;
    return (
      <div
        id={data.id}
        className={`match-tabitem ${active ? "matchtab-active" : ""}`}
        onClick={this.setTabHandler}
      >
        <h3 className="match-tabitem-name">{data.name}</h3>
      </div>
    );
  }
}
export default TabItem;
