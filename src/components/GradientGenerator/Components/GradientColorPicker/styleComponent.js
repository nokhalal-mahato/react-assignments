import styled from "styled-components";

export const GradientColorPickerPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const GradientColorPickerContainer = styled.div`
  display: flex;
  margin-bottom:30px;
`;

export const GradientColorPickerItem = styled.div`
  margin-right: 30px;
  &:last-of-type {
    margin-right: 0px;
  }
`;

export const GradientColorPickerText = styled.h4`
  color: white;
  text-align: center;
`;
export const GradientColorPickerColor = styled.input`
  width: 100px;
  height: 50px;
  border: 1px solid #334155;
  outline: 0px;
  padding: 0px;
  opacity: 0.8;
  &::-webkit-color-swatch-wrapper {
    padding: 0;
  }
  &::-webkit-color-swatch {
    border: none;
  }
`;
export const GenerateBtn = styled.button`
  margin: auto;
  background-color: #00c9b7;
  color: #1e293b;
  font-weight:bold;
  border:0px;
  padding:10px 20px;
  border-radius:6px;
`;
