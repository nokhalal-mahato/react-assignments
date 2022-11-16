import styled from "styled-components";

export const NotesItemContainer = styled.div`
  color: #475569;
  padding: 0px 10px 20px;
  border: 1px solid #aab8c8;
  border-radius: 6px;
  text-decoration: ${(props) => props.isComplete ? 'line-through':'normal'}; ;
`;
export const EditBtn = styled.button`
  margin-right: 10px;
  align-self: flex-end;
  background-color: #4c63b6;
  padding: 10px 15px;
  border-radius: 4px;
  color: white;
  border: 0px;
  margin-top: 10px;
`;
export const CompleteBtn = styled.button`
  margin-right: 10px;
  align-self: flex-end;
  background-color: ${(props) => (!props.isComplete ? "green" : "red")};
  padding: 10px 15px;
  border-radius: 4px;
  color: white;
  border: 0px;
  margin-top: 10px;
`;

export const DeleteBtn = styled.button`
  margin-right: 10px;
  align-self: flex-end;
  background-color: #4c63b6;
  padding: 10px 15px;
  border-radius: 4px;
  color: white;
  border: 0px;
  margin-top: 10px;
`;
