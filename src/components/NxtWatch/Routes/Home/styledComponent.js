import styled from "styled-components";

export const HomePage = styled.div`
  background-color: ${(props) => (props.darkMode ? "#212121" : "white")};
  min-height:100%;
`;
