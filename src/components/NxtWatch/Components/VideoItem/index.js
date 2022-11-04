import { Component } from "react";
import NxtwatchContext from "../../Contexts/NxtwatchContext";
import {
  VideoItemActionBtn,
  VideoItemActionText,
  VideoItemBottomRight,
  VideoItemBottomSection,
  VideoItemChannel,
  VideoItemChannelDetail,
  VideoItemContent,
  VideoItemDetail,
  VideoItemHr,
  VideoItemLogo,
  VideoItemOtherDetail,
  VideoItemOtherDetailContainer,
  VideoItemOtherDetailLeft,
  VideoItemOtherDetailRight,
  VideoItemSubscriber,
  VideoItemTitle,
  VideoItemTopSection,
} from "./styledComponent";
import Player from "react-player";
import "./index.css";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { GoPrimitiveDot } from "react-icons/go";
import { formatDistanceToNow } from "date-fns";
import { RiPlayListAddLine } from "react-icons/ri";

class VideoItem extends Component {
  state = { liked: false, disliked: false, saveVideo: false };

  static contextType = NxtwatchContext;
  
  componentDidMount() {
    const {data}=this.props;
    const context = this.context;
    const savedVideo=context.savedVideo;
    if(savedVideo.find(item=>item.id===data.id)){
      this.setState({saveVideo:true});
    }
    if (context.likedVideo.find((item) => item.id === data.id)) {
      this.setState({ liked: true });
    }
    if (context.dislikedVideo.find((item) => item.id === data.id)) {
      this.setState({ disliked: true });
    }
  }

  onToggleLike = () => {
    const { liked, disliked } = this.state;
    if (!liked && disliked) {
      this.setState({ liked: true, disliked: false });
    } else {
      this.setState((prevState) => ({ liked: !prevState.liked }));
    }
  };
  onToggleDislike = () => {
    const { liked, disliked } = this.state;
    if (!disliked && liked) {
      this.setState({ liked: false, disliked: true });
    } else {
      this.setState((prevState) => ({ disliked: !prevState.disliked }));
    }
  };
  onToggleSave = () => {
    this.setState((prevState) => ({ saveVideo: !prevState.saveVideo }));
  };
  render() {
    const { data } = this.props;
    const { liked, disliked, saveVideo } = this.state;
    return (
      <NxtwatchContext.Consumer>
        {(value) => {
          const { isDarkMode, toggleSavedVideo ,toggleLikedVideo,toggleDislikedVideo} = value;
          const date = formatDistanceToNow(new Date(data.publishedAt), {
            addSuffix: true,
          });
          const toggleSave = () => {
            toggleSavedVideo(data);
            this.onToggleSave();
          };
          const toggleLike = () => {
            toggleLikedVideo(data);
            this.onToggleLike();
          };
          const toggleDislike = () => {
            toggleDislikedVideo(data);
            this.onToggleDislike();
          };
          return (
            <VideoItemContent>
              <Player
                url={data.videoUrl}
                controls
                width="100%"
                className="nxtwatch-video-player"
              />
              <VideoItemDetail>
                <VideoItemTopSection>
                  <VideoItemTitle darkMode={isDarkMode}>
                    {data.title}
                  </VideoItemTitle>
                  <VideoItemOtherDetailContainer>
                    <VideoItemOtherDetailLeft>
                      <VideoItemOtherDetail>
                        {data.viewCount}
                      </VideoItemOtherDetail>
                      <GoPrimitiveDot className="nxtwatch-video-item-dot" />
                      <VideoItemOtherDetail>{date}</VideoItemOtherDetail>
                    </VideoItemOtherDetailLeft>
                    <VideoItemOtherDetailRight>
                      <VideoItemActionBtn
                        isActive={liked}
                        onClick={toggleLike}
                      >
                        <AiOutlineLike />
                        <VideoItemActionText>Like</VideoItemActionText>
                      </VideoItemActionBtn>
                      <VideoItemActionBtn
                        isActive={disliked}
                        onClick={toggleDislike}
                      >
                        <AiOutlineDislike />
                        <VideoItemActionText>Dislike</VideoItemActionText>
                      </VideoItemActionBtn>
                      <VideoItemActionBtn
                        isActive={saveVideo}
                        onClick={toggleSave}
                      >
                        <RiPlayListAddLine />
                        <VideoItemActionText>Save</VideoItemActionText>
                      </VideoItemActionBtn>
                    </VideoItemOtherDetailRight>
                  </VideoItemOtherDetailContainer>
                </VideoItemTopSection>
                <VideoItemHr />
                <VideoItemBottomSection>
                  <VideoItemLogo src={data.channel.profile_image_url} alt="" />
                  <VideoItemBottomRight>
                    <VideoItemChannel darkMode={isDarkMode}>
                      {data.channel.name}
                    </VideoItemChannel>
                    <VideoItemSubscriber>
                      {data.channel.subscriber_count} subscribers
                    </VideoItemSubscriber>
                    <VideoItemChannelDetail darkMode={isDarkMode}>
                      {data.description}
                    </VideoItemChannelDetail>
                  </VideoItemBottomRight>
                </VideoItemBottomSection>
              </VideoItemDetail>
            </VideoItemContent>
          );
        }}
      </NxtwatchContext.Consumer>
    );
  }
}

export default VideoItem;
