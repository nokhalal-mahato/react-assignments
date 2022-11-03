import styled from "styled-components";

export const HomePage = styled.div`
  background-color: ${(props) => (props.darkMode ? "#1e293b" : "white")};
  min-height: 100%;
`;
export const HomePageContent = styled.div`
  display: flex;
  width:100%;
  min-height: 100%;
  align-items: flex-start;
`;
export const HomePageRightSection = styled.div`
  width: 100%;
  background-color: ${(props) => (props.darkMode ? "black" : "#f9f9f9")};
  height: 92vh;
  overflow-y: auto;
`;
