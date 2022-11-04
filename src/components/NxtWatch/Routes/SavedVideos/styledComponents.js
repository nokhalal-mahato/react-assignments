import styled from "styled-components";

export const SavedVideoPage = styled.div`
  background-color: ${(props) => (props.darkMode ? "black" : "#f9f9f9")};
  min-height: 100%;
`;
export const SavedVideoPageContent = styled.div`
  display: flex;
  width: 100%;
  min-height: 100%;
  align-items: flex-start;
`;
export const SavedVideoPageRightSection = styled.div`
  width: 100%;
  height: 92vh;
  overflow-y: auto;
`;

export const SavedVideoEmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  min-height: 80vh;
  color: ${(props) => (props.darkMode ? "white" : "#231f20")};
  @media (max-width: 768px) {
    width: 90%;
    margin: auto;
  }
`;
export const SavedVideoEmptyImage = styled.img`
  width: 100%;
  max-width: 400px;
`;
export const SavedVideoEmptyHeading = styled.h2`
  margin-top: 40px;
`;
export const SavedVideoEmptyText = styled.p`
  margin-top: 0px;
  font-size: 18px;
  margin-bottom: 5px;
  color: ${(props) => (props.darkMode ? "#94a3b8" : "#1e293b")};
`;
export const SavedVideoFilledContainer = styled.div``;
export const SavedVideoListContainer = styled.div`
  padding: 50px 50px 0px;
  @media (max-width: 900px) {
    padding: 20px 20px 0px;
  }
  @media (max-width: 578px) {
    padding: 20px 0px 0px;
  }
`;
export const SavedVideoHeaderContainer = styled.div`
  color: ${(props) => (props.darkMode ? "white" : "#181818")};
  background-color: ${(props) => (props.darkMode ? "#181818" : "#f1f1f1")};
  display: flex;
  align-items:center;
  padding: 20px 50px;
  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size:14px;
  }
`;
export const SavedVideoHeaderIconContainer = styled.div`
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
