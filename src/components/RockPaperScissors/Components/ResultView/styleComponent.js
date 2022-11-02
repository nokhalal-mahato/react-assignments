import styled from "styled-components";

export const ResultViewContainer = styled.div`
  color: white;
  margin:top:30px;
  display:flex;
  align-items:center;
  flex-direction:column;
`;
export const ChoicesContainer = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-around;
`;
export const ChoiceitemContainer = styled.div`
  margin: 20px;
  @media (max-width: 610px) {
    margin: 10px;
  }
`;
export const ChoiceItemImage = styled.img`
  width: 150px;
  @media (max-width: 610px) {
    width: 120px;
  }
`;
export const PlayAgainBtn = styled.button`
  background-color: white;
  color: #223a5f;
  padding: 10px 25px;
  border: 0px;
  border-radius: 4px;
  font-weight: bold;
`;
