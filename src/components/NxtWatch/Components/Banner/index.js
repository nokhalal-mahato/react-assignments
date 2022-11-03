import { Component } from "react";
import NxtwatchContext from "../../Contexts/NxtwatchContext";
import {
  BannerBtn,
  BannerContainer,
  BannerImage,
  BannerImageContainer,
  BannerText,
} from "./styledComponent";
import { IoMdClose } from "react-icons/io";

class Banner extends Component {
  render() {
    return (
      <NxtwatchContext.Consumer>
        {(value) => {
          const { closeBanner } = value;
          return (
            <BannerContainer>
              <BannerImageContainer>
                <BannerImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="logo"
                />
                <IoMdClose
                  onClick={closeBanner}
                />
              </BannerImageContainer>
              <BannerText>Buy Nxt Watch Premium prepaid plan with UPI</BannerText>
              <BannerBtn>GET IT NOW</BannerBtn>
            </BannerContainer>
          );
        }}
      </NxtwatchContext.Consumer>
    );
  }
}
export default Banner;
