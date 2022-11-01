import styled from "styled-components";

export const MemeGeneratorPage = styled.div`
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const MemeGeneratorContent = styled.div`
  min-width: 700px;
  @media (max-width: 768px) {
    display:flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Heading = styled.h1`
  color: #35469c;
`;
export const MemeGeneratorContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`;

export const MemeImageContainer = styled.div`
  background-image: url('${props=>props.background}');
  background-size: cover;
  width: 400px;
  height: 300px;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 30px;
  @media (max-width: 768px) {
    margin-left: 0px;
    width: 300px;
    height: 220px;
    margin-bottom:40px;
  }
`;
export const MemeText = styled.h2`
    color:white;
    text-align:center;
    font-size:${props=>props.fontSize}px;
    margin:20px 0px;
    padding:0px 10px;
`;
