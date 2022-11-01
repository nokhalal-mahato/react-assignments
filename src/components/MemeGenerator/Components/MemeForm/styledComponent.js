import styled from "styled-components";

export const MemeGeneratorFormContainer = styled.div`
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const MemeGeneratorForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const InputLable = styled.label`
  color: #5a7184;
  font-size: 14px;
`;

export const Select = styled.select`
  color: #5a7184;
  border: 1px solid #d7dfe9;
  background-color: transparent;
  border-radius: 2px;
  padding: 10px;
  margin: 5px 0px 20px;
  width:270px;
  @media (max-width: 768px) {
    width: 97%;
  }

  &:focus {
    outline: 0px;
  }
`;
export const Button = styled.button`
  color: white;
  background-color: #0b69ff;
  border-radius: 4px;
  border: 0px;
  padding: 7px 20px;
`;

export const Input = styled.input`
  color: #5a7184;
  border: 1px solid #d7dfe9;
  border-radius: 2px;
  padding: 10px;
  width: 250px;
  margin: 5px 0px 20px;

  @media (max-width: 768px) {
    width: 90%;
  }

  ::placeholder {
    color: #5a7184;
    font-weight: 100;
  }
  &:focus {
    outline: 0px;
  }
`;
