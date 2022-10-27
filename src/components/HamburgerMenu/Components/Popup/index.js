import { Component } from "react";
import "./index.css";
import { IoMdClose } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

class PopupContent extends Component {
  render() {
    const { onClose } = this.props;
    return (
      <>
        <IoMdClose
          onClick={onClose}
          className="hamburger-popup-icon hamburger-close-icon"
        />
        <Link
          to="/HamburgerMenu"
          onClick={onClose}
          className="hamburger-home-link"
        >
          <AiFillHome className="hamburger-popup-icon" />
          <h1>Home</h1>
        </Link>
        <Link
          to="/HamburgerMenu/about"
          onClick={onClose}
          className="hamburger-home-link"
        >
          <BsInfoCircleFill className="hamburger-popup-icon" />
          <h1>About</h1>
        </Link>
      </>
    );
  }
}
export default PopupContent;
