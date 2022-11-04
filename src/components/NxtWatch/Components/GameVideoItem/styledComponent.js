import styled from "styled-components";

export const GameItemContainer = styled.div`
  margin: auto;
  @media (max-width: 578px) {
    width: auto;
    max-width: 230px;
  }
`;

export const GameItemImage = styled.img`
  width: 100%;
  height:340px;
  @media (max-width: 1500px) {
    height: 320px;
  }
  @media (max-width: 1200px) {
    height: 260px;
  }
  @media (max-width: 1080px) {
    height: 290px;
  }
  @media (max-width: 900px) {
    height: 250px;
  }
  @media (max-width: 768px) {
    height: 273px;
  }
  @media (max-width: 578px) {
    height: 250px;
  }
  @media (max-width: 408px) {
    height: 170px;
  }
`;

export const GameItemTitle = styled.h3`
  color: ${(props) => (props.darkMode ? "white" : "#181818")};
  margin: 10px 0px 5px;
  @media (max-width: 578px) {
    font-size: 16px;
  }
`;
export const GameItemViewCount = styled.p`
  color: ${(props) => (props.darkMode ? "#64748b" : "#475569")};
  margin-top: 0px;
`;
