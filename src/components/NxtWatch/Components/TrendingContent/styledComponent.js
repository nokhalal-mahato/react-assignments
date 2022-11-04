import styled from "styled-components";

export const TrendingVideoSuccessView = styled.div``;
export const TrendingVideoListContainer = styled.div`
  padding: 50px 50px 0px;
  @media (max-width: 900px) {
    padding: 20px 20px 0px;
  }
  @media (max-width: 578px) {
    padding: 20px 0px 0px;
  }
`;
export const TrendingVideoHeaderContainer = styled.div`
  color: ${(props) => (props.darkMode ? "white" : "#181818")};
  background-color: ${(props) => (props.darkMode ? "#181818" : "#f1f1f1")};
  display: flex;
  align-items: center;
  padding: 20px 50px;
  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 14px;
  }
`;
export const TrendingVideoHeaderIconContainer = styled.div`
  background-color: ${(props) => (props.darkMode ? "black" : "#d7dfe9;")};
  height: 80px;
  width: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  @media (max-width: 768px) {
    height: 50px;
    width: 50px;
    margin-right: 10px;
  }
`;

export const TrendingLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`;
export const TrendingFailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  width: 100%;
  text-align: center;
  color: ${(props) => (props.darkMode ? "white" : "#231f20")};
  @media (max-width: 768px) {
    width: 90%;
    margin: auto;
  }
`;
export const TrendingFailureImage = styled.img`
  width: 100%;
  max-width: 350px;
`;
export const TrendingFailureHeading = styled.h2``;
export const TrendingFailureText = styled.p`
  margin-top: 0px;
  font-size: 18px;
  margin-bottom: 5px;
  color: ${(props) => (props.darkMode ? "#94a3b8" : "#1e293b")};
`;
export const TrendingFailureRetryBtn = styled.button`
  border-radius: 3px;
  background-color: #6366f1;
  color: white;
  font-weight: bold;
  border: 0px;
  padding: 12px 30px;
  margin-top: 20px;
`;

