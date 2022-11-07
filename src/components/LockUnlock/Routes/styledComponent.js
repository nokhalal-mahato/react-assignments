import styled from "styled-components";

export const HomePage = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(#0b0c1e, #3c2940);
`;

export const LoginBtn = styled.button`
  background-color: #06b6d4;
  border: 0px;
  border-radius: 8px;
  padding: 10px 20px;
  color: #e2e8f0;
  font-weight:bold;
  font-size:18px;
  margin-top:150px;
  &:focus{
    outline:none;
  }
`;
export const Text = styled.h2`
  color: #e2e8f0;
`;

export const Image = styled.img`width:150px`;
