import styled from "styled-components";

export const CreditCardPage = styled.div`
  min-height: 100%;
  width: 100%;
  display: flex;
  margin: auto;
  max-width: 800px;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;
export const CreditCardSection = styled.div`
  background-color: #3b4b69;
  padding: 40px 20px;
  width: 100%;
  @media (max-width: 750px) {
    width: auto;
  }
`;
export const CreditCardContainer = styled.div`
  background-image: url("https://assets.ccbp.in/frontend/hooks/credit-card-bg.png");
  color: white;
  height: 200px;
  padding: 40px 15px 30px 35px;
  border-radius: 18px;
  margin-top: 20vh;
  background-size: cover;
  @media (max-width: 750px) {
    max-width: 350px;
    height: 120px;
    margin-top: 50px;
    padding: 40px 15px 30px 25px;
  }
`;
export const InputContainer = styled.div`
  box-shadow: 1px -1px 17px 0px rgba(0, 0, 0, 0.15);
  margin: 30px 20px;
  align-self: center;
  padding: 20px 40px 40px;
  text-align: center;
  display: flex;
  flex-direction: column;
  @media (max-width: 750px) {
    padding: 20px 20px 40px;
  }
`;
export const CardNumberInput = styled.input`
  background-color: tranparent;
  border: 0px;
  border: 1px solid #475569;
  border-radius: 2px;
  padding: 10px;
  width: 250px;
  margin-bottom: 20px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #475569;
  }
`;
export const CardNameInput = styled.input`
  background-color: tranparent;
  border: 1px solid #475569;
  border-radius: 2px;
  padding: 10px;
  width: 250px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #475569;
  }
`;
export const FormHeading = styled.h2`
  color: #3b4b69;
`;
export const Heading = styled.h1`
  color: white;
  border-bottom: 4px solid #ffd773;
  display: inline-block;
  text-align: center;
`;
export const CardNumber = styled.h1`
  height: 80px;
  margin: 40px 0px;
  @media (max-width: 750px) {
    height: 40px;
    margin: 20px 0px;
    font-size:24px;
  }
`;
export const CardText = styled.p`
  margin: 3px 0px;
`;

export const CardName = styled.h2`
  margin: 0px;
`;
