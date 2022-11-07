import styled from 'styled-components'

export const PasswordValidatorPage = styled.div`
  min-height: 100%;
  background-color: #383a4e;
  display:flex;
  align-items:center;
  justify-content:center;
`;

export const PasswordInput = styled.input`
  background-color: #edeeff;
  border:0px;
  border-radius:2px;
  padding:10px;
  width:250px;
  &:focus{
    outline:none;
  }
`;

export const PasswordValidatorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #475569;
  padding: 60px 40px 80px;
  border-radius: 8px;
  color: white;
  @media (max-width: 450px) {
    width:70%;
  }
`;
export const ErrorMessage=styled.p`
color:red;
margin:0px;
margin-top:5px;
font-size:12px;`
export const Text = styled.p`
  font-size: 14px;
  margin:0px 0px 40px;
  text-align:center;
`;

export const Heading = styled.h1`
  @media(max-width:450px){
    font-size:22px;
  }
`;