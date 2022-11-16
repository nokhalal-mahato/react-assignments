import styled from "styled-components";

export const FilterItemContainer = styled.button`
  width: 100px;
  border: 0px;
  background-color: ${(props) => (props.isActive ? "white" : "#ededed")};
  color: #334155;
  padding: 10px 0px;
  border-radius: 6px;
  margin-right: 10px;
  margin-bottom: 10px;
  text-align:center ;
  @media (max-width: 568px) {
    margin-right: 0px;
    margin-bottom: 0px;
    margin:auto;
    width:100%;
    max-width:200px;
  }
`;