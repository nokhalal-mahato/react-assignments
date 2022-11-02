import styled from "styled-components";

export const SideBarPage = styled.div`
  background-color: ${(props) => (props.darkMode ? "#212121" : "white")};
  min-height: 100%;
  @media (max-width: 768px) {
    display: none;
  }
`;
