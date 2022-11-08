import styled  from "styled-components";

export const TraficLightPage=styled.div`
display:flex;
align-items:center;
justify-content:center;
min-height:100%;`;

export const TraficLightContainer=styled.div`
display:flex;
flex-direction: column;
border-radius: 8px;
padding:20px;
background-color:black;`
export const TraficLightItem=styled.div`
margin:20px;
height: 50px;
width:50px;
border-radius:50%;
opacity: ${props=>props.isActive? '1':'0.5'};
background-color: ${props=>props.color};
`