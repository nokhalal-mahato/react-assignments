import styled from "styled-components";

export const LogoutActionContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const LogoutPopupCancelBtn = styled.button`
  padding: 10px 20px;
  border: 1px solid #475569;
  background-color: transparent;
  border-radius: 3px;
  margin-right: 30px;
  font-weight: bold;
  color: ${(props) => (props.darkMode ? "#94a3b8" : "#94a3b8")};
`;
export const LogoutPopupConfirmBtn = styled.button`
  padding: 10px 20px;
  color: white;
  border: 0px;
  border-radius: 3px;
  font-weight: bold;
  background-color: #3b82f6;
`;
export const LogoutPoputHeader = styled.p`
  color: ${(props) => (props.darkMode ? "white" : "#00306e")};
`;
