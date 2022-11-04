import styled from "styled-components";

export const VideoItem = styled.div`
  display: grid;
  grid-template-columns: 0.65fr 1fr;
  max-width: 998px;
  align-item: flex-start;
  margin-bottom: 70px;
  @media (max-width: 768px) {
    margin-bottom: 50px;
  }
  @media (max-width: 578px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
  }
`;

export const VideoItemContent = styled.div`
  @media (max-width: 768px) {
    min-width: 0px;
  }
  @media (max-width: 578px) {
    display: flex;
    align-items: flex-start;
    margin: 15px 10px;
    min-width: 0px;
  }
`;

export const VideoItemImageContainer = styled.div`
  max-width: 400px;
  @media (max-width: 578px) {
    max-width: none;
  }
`;
export const VideoItemImage = styled.img`
  width: 100%;
  min-width: 275px;
  max-height:300px;
`;


export const VideoItemDetail = styled.div`
  margin-left: 20px;
  @media (max-width: 578px) {
    margin-left: 10px;
  }
`;
export const VideoItemLogo = styled.img`
  width: 40px;
  display: none;
  @media (max-width: 578px) {
    display: block;
  }
`;

export const VideoItemTitle = styled.h3`
  margin-top: 0px;
  margin-bottom: 10px;
  line-height: 30px;
  color: ${(props) => (props.darkMode ? "white" : "#181818")};
  @media (max-width: 768px) {
    line-height: 25px;
    font-size: 17px;
  }
  @media (max-width: 578px) {
    line-height: 20px;
    font-size: 16px;
    margin-bottom: 0px;
  }
`;
export const VideoItemDetailContainer = styled.div`
  color: ${(props) => (props.darkMode ? "#94a3b8" : "#64748b")};
  @media (max-width: 578px) {
    display: flex;
    align-items: center;
  }
`;
export const VideoItemChannel = styled.p`
  margin: 10px 0px;
`;
export const VideoItemOtherDetailContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const VideoItemOtherDetail = styled.p`
  margin: 0px 0px;
`;
