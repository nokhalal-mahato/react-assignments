import { Component } from "react";
import NxtwatchContext from "../../Contexts/NxtwatchContext";
import {
  VideoItem,
  VideoItemImage,
  VideoItemTitle,
  VideoItemDetail,
  VideoItemContent,
  VideoItemLogo,
  VideoItemChannel,
  VideoItemOtherDetail,
  VideoItemOtherDetailContainer,
  VideoItemImageContainer,
  VideoItemDetailContainer,
} from "./styledComponent";
import { formatDistanceToNow } from "date-fns";
import { withRouter, Link } from "react-router-dom";
import "./index.css";
import { GoPrimitiveDot } from "react-icons/go";

class SavedVideoItem extends Component {
  render() {
    const { data } = this.props;
    return (
      <NxtwatchContext.Consumer>
        {(value) => {
          const { isDarkMode } = value;
          const date = formatDistanceToNow(new Date(data.publishedAt), {
            addSuffix: true,
          });
          return (
            <Link
              to={"/Nxtwatch/video/" + data.id}
              className="nxtwatch-savedvideo-item"
            >
              <VideoItem>
                <VideoItemImageContainer>
                  <VideoItemImage src={data.thumbnailUrl} alt="" />
                </VideoItemImageContainer>
                <VideoItemContent>
                  <VideoItemLogo src={data.channel.profile_image_url} alt="" />
                  <VideoItemDetail>
                    <VideoItemTitle darkMode={isDarkMode}>
                      {data.title}
                    </VideoItemTitle>
                    <VideoItemDetailContainer darkMode={isDarkMode}>
                      <VideoItemChannel>
                        {data.channel.name}
                      </VideoItemChannel>
                      <GoPrimitiveDot className="nxtwatch-video-item-dot nxtwatch-video-item-dot-small" />
                      <VideoItemOtherDetailContainer>
                        <VideoItemOtherDetail>
                          {data.viewCount}
                        </VideoItemOtherDetail>
                        <GoPrimitiveDot className="nxtwatch-video-item-dot" />
                        <VideoItemOtherDetail>{date}</VideoItemOtherDetail>
                      </VideoItemOtherDetailContainer>
                    </VideoItemDetailContainer>
                  </VideoItemDetail>
                </VideoItemContent>
              </VideoItem>
            </Link>
          );
        }}
      </NxtwatchContext.Consumer>
    );
  }
}
export default withRouter(SavedVideoItem);
