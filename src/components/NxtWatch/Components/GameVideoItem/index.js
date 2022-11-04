import { Component } from "react";
import NxtwatchContext from "../../Contexts/NxtwatchContext";
import {Link} from 'react-router-dom';
import {
  GameItemContainer,
  GameItemImage,
  GameItemTitle,
  GameItemViewCount,
} from "./styledComponent";
import './index.css';

class GameVideoItem extends Component {
  render() {
    const { data } = this.props;
    return (
      <NxtwatchContext.Consumer>
        {(value) => {
          const { isDarkMode } = value;
          return (
            <Link
              to={"/Nxtwatch/video/" + data.id}
              className="nxtwatch-gamevideo-item"
            >
              <GameItemContainer>
                <GameItemImage src={data.thumbnailUrl} />
                <GameItemTitle darkMode={isDarkMode}>
                  {data.title}
                </GameItemTitle>
                <GameItemViewCount darkMode={isDarkMode}>
                  {data.viewCount} Watching Worldwide
                </GameItemViewCount>
              </GameItemContainer>
            </Link>
          );
        }}
      </NxtwatchContext.Consumer>
    );
  }
}

export default GameVideoItem;
