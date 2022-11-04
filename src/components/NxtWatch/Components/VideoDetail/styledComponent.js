import styled from "styled-components";


export const VideoDetailLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`;
export const VideoDetailFailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  width: 100%;
  text-align: center;
  color: ${(props) => (props.darkMode ? "white" : "#231f20")};
  @media (max-width: 768px) {
    width: 90%;
    margin: auto;
  }
`;
export const VideoDetailFailureImage = styled.img`
  width: 100%;
  max-width: 350px;
`;
export const VideoDetailFailureHeading = styled.h2``;
export const VideoDetailFailureText = styled.p`
  margin-top: 0px;
  font-size: 18px;
  margin-bottom: 5px;
  color: ${(props) => (props.darkMode ? "#94a3b8" : "#1e293b")};
`;
export const VideoDetailFailureRetryBtn = styled.button`
  border-radius: 3px;
  background-color: #6366f1;
  color: white;
  font-weight: bold;
  border: 0px;
  padding: 12px 30px;
  margin-top: 20px;
`;
