import { Component } from "react";
import Body from "../Body";
import Footer from "../Footer";
import Header from "../Header";
import "./index.css";

class Layout extends Component {
  render() {
    return <div className="layout-builder-layout">
      <Header/>
      <Body/>
      <Footer/>
    </div>;
  }
}
export default Layout;
