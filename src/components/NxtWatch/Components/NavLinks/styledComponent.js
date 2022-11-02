import styled from "styled-components";

export const NavLinksContainer = styled.div` 
width:150px;
`;

export const NavLinkText = styled.span`
  color: ${(props) => (props.darkMode ? "white" : "#181818")};
`;