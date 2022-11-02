import styled from "styled-components";

export const RockPaperScissorsPage = styled.div`
  background-color: #223a5f;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
`;
export const RockPaperScissorsContent = styled.div`
  max-width: 1000px;
`;
export const Rules = styled.button`
  background-color: white;
  color: #223a5f;
  padding: 5px 10px;
  border: 0px;
  border-radius: 4px;
  font-weight: bold;
  align-self: flex-end;
  margin:20px 10px;
`;
export const RuleCloseContiner = styled.div`
  background-color: #ededed;
  align-self: flex-end;
  padding: 5px 5px 0px;
`;
