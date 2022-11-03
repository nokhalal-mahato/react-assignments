import styled from "styled-components";

export const VideoPage = styled.div`
  background-color: ${(props) => (props.darkMode ? "#1e293b" : "white")};
  min-height: 100%;
`;
export const VideoPageContent = styled.div`
  display: flex;
  width: 100%;
  min-height: 100%;
  align-items: flex-start;
`;
export const VideoPageRightSection = styled.div`
  width: 100%;
  background-color: ${(props) => (props.darkMode ? "black" : "#f9f9f9")};
  height: 92vh;
  overflow-y: auto;
`;
