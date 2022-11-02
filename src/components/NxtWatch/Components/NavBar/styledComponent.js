import styled from "styled-components";

export const Nav = styled.nav`
  background-color: ${(props) => (props.darkMode ? "#212121" : "white")};
`;

export const WebsiteLogo = styled.img`
  width: 130px;
  @media (max-width: 578px) {
    width: 100px;
  }
`;

export const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  @media (max-width: 578px) {
    padding: 10px 10px;
  }
`;

export const NavRightSection = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoutBtn = styled.button`
  color: ${(props) => (props.darkMode ? "white" : "#3b82f6")};
  font-weight: bold;
  border: 1px solid ${(props) => (props.darkMode ? "white" : "#3b82f6")};
  background-color: transparent;
  padding: 5px 15px;
  border-radius:3px;
  font-size:16px;
  margin-left: 20px;
  @media (max-width: 578px) {
    display: none;
  }
`;
export const MobileLogoutBtn = styled.button`
  display: none;
  background-color: transparent;
  border: 0px;
  margin-left:10px;
  color: ${(props) => (props.darkMode ? "white" : "#212121")};
  @media (max-width: 578px) {
    display: block;
  }
`;
export const DarkModeImage = styled.img`
  width: 35px;
  padding-top: 8px;
  @media (max-width: 578px) {
    width: 25px;
    padding-top: 0px;
    margin-left: 10px;
  }
`;

export const Avatar = styled.img`
  width: 35px;
  margin-left: 20px;
  @media (max-width: 578px) {
    display: none;
  }
`;
export const HamburgerBtn = styled.button`
  display: none;
  background-color: transparent;
  border: 0px;
  margin-left: 10px;
  padding:0px;
  color: ${(props) => (props.darkMode ? "white" : "#212121")};
  @media (max-width: 578px) {
    display: block;

  }
`;
export const NavLinkContainer=styled.div`
`
