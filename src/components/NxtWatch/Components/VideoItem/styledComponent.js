import styled from "styled-components";

export const VideoItemContent = styled.div`
  padding: 30px 20px;
`;
export const VideoItemDetail = styled.div`
  padding: 30px 0px;
`;
export const VideoItemHr = styled.hr`
  border: 1px solid #64748b;
  margin: 30px 0px;
`;
export const VideoItemTopSection = styled.div``;
export const VideoItemBottomSection = styled.div`
  display: flex;
  align-items: flex-start;
`;
export const VideoItemBottomRight = styled.div`
  margin-left: 20px;
`;
export const VideoItemActionBtn = styled.div`
  cursor: pointer;
  margin-right: 20px;
  display: flex;
  color: ${(props) => (props.isActive ? "#ff0b37" : "#64748b")};
`;
export const VideoItemActionText = styled.div`
  margin-left: 5px;
  font-weight: bold;
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
  color: ${(props) => (props.darkMode ? "white" : "#231f20")};
  margin: 0px 0px 10px;
`;
export const VideoItemSubscriber = styled.p`
  color: ${(props) => (props.darkMode ? "#64748b" : "#64748b")};
  margin: 10px 0px;
  font-size: 15px;
`;
export const VideoItemChannelDetail = styled.p`
  color: ${(props) => (props.darkMode ? "white" : "#475569")};
  line-height: 25px;
  margin: 20px 0px;
`;
export const VideoItemOtherDetailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => (props.darkMode ? "#64748b" : "#64748b")};
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const VideoItemOtherDetailLeft = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;
export const VideoItemOtherDetailRight = styled.div`
  display: flex;
  align-items: center;
`;
export const VideoItemOtherDetail = styled.p`
  margin: 0px 0px;
`;
