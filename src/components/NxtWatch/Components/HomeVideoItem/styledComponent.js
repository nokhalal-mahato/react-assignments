import styled from "styled-components";

export const VideoItem = styled.div`
  max-width: 450px;
  @media(max-width:578px){
    margin:auto;
  }
`;

export const VideoItemContent = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 10px;
`;
export const VideoItemDetail = styled.div`
  margin-left: 10px;
`;
export const VideoItemImage = styled.img`
  width: 100%;
`;
export const VideoItemLogo = styled.img`
  width: 40px;
`;
export const VideoItemTitle = styled.p`
  margin-top: 0px;
  line-height: 25px;
  color: ${(props) => (props.darkMode ? "white" : "#231f20")};
`;
export const VideoItemChannel = styled.p`
  color: ${(props) => (props.darkMode ? "#64748b" : "#64748b")};
  margin: 10px 0px;
`;
export const VideoItemOtherDetailContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => (props.darkMode ? "#64748b" : "#64748b")};
`;
export const VideoItemOtherDetail = styled.p`
  margin: 0px 0px;
`;
