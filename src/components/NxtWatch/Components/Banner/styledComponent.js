import styled from "styled-components";

export const BannerContainer = styled.div`
  background-image: url("https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png");
  background-size: cover;
  background-position-x: 100vw;
  background-position-y: 100%;
  color: #1e293b;
  padding: 30px 30px;
  @media (max-width: 768px) {
    background-color: white;
    background-image: none;
  }
`;
export const BannerImage = styled.img`
  width: 160px;
`;
export const BannerImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const BannerText = styled.p`
  width: 76%;
  max-width: 300px;
  font-size: 18px;
  line-height: 30px;
`;
export const BannerBtn = styled.button`
  border: 1px solid #1e293b;
  background-color: transparent;
  padding: 13px 15px;
  margin-top:15px;
  font-weight: bold;
`;
