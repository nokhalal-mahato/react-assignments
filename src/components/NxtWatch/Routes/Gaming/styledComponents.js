import styled from "styled-components";

export const GamingPage = styled.div`
  background-color: ${(props) => (props.darkMode ? "black" : "#f9f9f9")};
  min-height: 100%;
`;
export const GamingPageContent = styled.div`
  display: flex;
  width: 100%;
  min-height: 100%;
  align-items: flex-start;
`;
export const GamingPageRightSection = styled.div`
  width: 100%;
  height: 92vh;
  overflow-y: auto;
`;
