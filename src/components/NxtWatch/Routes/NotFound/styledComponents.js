import styled from "styled-components";

export const NotFoundPage = styled.div`
  background-color: ${(props) => (props.darkMode ? "black" : "#f9f9f9")};
  min-height: 100%;
`;
export const NotFoundPageContent = styled.div`
  display: flex;
  width: 100%;
  min-height: 100%;
  align-items: flex-start;
`;
export const NotFoundPageRightSection = styled.div`
  width: 100%;
  height: 92vh;
  overflow-y: auto;
`;

export const NotFoundEmptyContainer = styled.div`
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
export const NotFoundEmptyImage = styled.img`
  width: 100%;
  max-width: 500px;
`;
export const NotFoundEmptyHeading = styled.h1`
  margin-top: 40px;
`;
export const NotFoundEmptyText = styled.p`
  margin-top: 0px;
  font-size: 18px;
  margin-bottom: 5px;
  color: ${(props) => (props.darkMode ? "#94a3b8" : "#1e293b")};
`;

