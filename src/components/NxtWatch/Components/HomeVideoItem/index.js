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
} from "./styledComponent";
import { formatDistanceToNow } from "date-fns";
import { withRouter, Link } from "react-router-dom";
import "./index.css";
import { GoPrimitiveDot } from "react-icons/go";

class HomeVideoItem extends Component {
  render() {
    const { data } = this.props;
    return (
      <NxtwatchContext.Consumer>
        {(value) => {
          const { isDarkMode } = value;
          const date = formatDistanceToNow(new Date(data.publishedAt),{  addSuffix: true});
          return (
            <Link
              to={"/Nxtwatch/video/" + data.id}
              className="nxtwatch-video-item"
            >
              <VideoItem>
                <VideoItemImage src={data.thumbnailUrl} alt="" />
                <VideoItemContent>
                  <VideoItemLogo src={data.channel.profile_image_url} alt="" />
                  <VideoItemDetail>
                    <VideoItemTitle darkMode={isDarkMode}>
                      {data.title}
                    </VideoItemTitle>
                    <VideoItemChannel darkMode={isDarkMode}>
                      {data.channel.name}
                    </VideoItemChannel>
                    <VideoItemOtherDetailContainer darkMode={isDarkMode}>
                      <VideoItemOtherDetail>
                        {data.viewCount}
                      </VideoItemOtherDetail>
                      <GoPrimitiveDot  className="nxtwatch-video-item-dot"/>
                      <VideoItemOtherDetail>{date}</VideoItemOtherDetail>
                    </VideoItemOtherDetailContainer>
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
export default withRouter(HomeVideoItem);
