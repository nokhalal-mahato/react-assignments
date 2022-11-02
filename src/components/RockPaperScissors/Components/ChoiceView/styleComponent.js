import styled from "styled-components";

export const ChoiceViewContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content:center;
  margin:30px auto;
  width:70%;
  @media(max-width:610px){
    width:90%;
  }
`;

export const ChoiceViewItem = styled.img`
  width: 150px;
  margin: 30px;
  cursor: pointer;
  @media(max-width:610px) {
    width:120px;
    margin:10px;
  }
`;
