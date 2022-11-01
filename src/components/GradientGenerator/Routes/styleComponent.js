import styled from "styled-components";

export const GradientGeneratorPage=styled.div`
    min-height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    color:white;
    padding:0px 20px;
    background-image:linear-gradient(${props=>props.direction},${props=>props.color},${props=>props.colorTwo})
`;

export const GradientSubHeading=styled.h3`
    margin:30px 0px;
`
export const GradientHeading = styled.h1`
  text-align:center;
`;
export const GradientDirectionContainer=styled.div`
    display:flex;
    flex-flow:row wrap;
    justify-content:center;

    @media(max-width:568px){
        display:grid;
        width:100%;
        justify-content:center;
        grid-template-columns:1fr 1fr;
        grid-gap:20px 10px;
    }
`