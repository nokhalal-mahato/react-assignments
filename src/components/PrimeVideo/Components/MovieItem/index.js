import { Component } from "react";
import "./index.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Player from "react-player";
import { IoMdClose } from "react-icons/io";

class MovieItem extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="prime-video-movie-item">
        <Popup
          modal
          trigger={
            <div className="prime-video-movie-image">
              <img src={data.thumbnailUrl} alt={data.id} />
            </div>
          }
          className="prime-video-popup"
        >
          {(close) => (
            <>
              <IoMdClose
                onClick={() => close()}
                className="prime-close-popup"
              />
              <Player url={data.videoUrl} controls className='prime-video-player' width='93%' />
            </>
          )}
        </Popup>
      </div>
    );
  }
}

export default MovieItem;
