import { Component } from "react";
import imagesList from "./imageList";
import "./index.css";
import MatchGameNav from "./MatchGameNav";
import { v4 as uuidv4 } from "uuid";
import TabItem from "./TabItem";
import ImageItem from "./ImageItem";
import MatchFinishCard from "./MatchFinishCard";

const tabList = [
  { id: uuidv4(), name: "Fruits", value: "FRUIT" },
  { id: uuidv4(), name: "Animals",value: "ANIMAL" },
  { id: uuidv4(), name: "Places", value: "PLACE" },
];
class MatchGame extends Component {
  state = {
    score: 0,
    timer: 60,
    mainPicture: "",
    start: true,
    activeTab: tabList[0],
  };

  componentDidMount() {
    this.randomImage();
    clearInterval(this.countInterval);
    this.countInterval = setInterval(this.tick, 1000);
  }
  setActiveTab = (tabname) => {
    this.setState({ activeTab: tabname });
  };
  tick = () => {
    const { timer } = this.state;
    if (timer - 1 < 0) {
      this.setState({ start: false });
      clearInterval(this.countInterval);
      return;
    }
    this.setState((prevState) => ({ timer: prevState.timer - 1 }));
  };
  onSelectImage = (id) => {
    const { mainPicture} = this.state;
    if(id===mainPicture.id){
        this.setState((prevState)=>({score:prevState.score +1}));
        this.randomImage();
    }
    else{
        this.setState({start:false});
        clearInterval(this.countInterval);
    }
  };
  randomImage=()=>{
    const image = imagesList[Math.floor(Math.random() * 30)];
    this.setState({ mainPicture: image });
  }
  onPlayAgain=()=>{
    this.setState({ score: 0, start: true, activeTab: tabList[0] ,timer:60});
    clearInterval(this.countInterval);
    this.countInterval = setInterval(this.tick, 1000);
    this.randomImage();
  }
  render() {
    const { score, timer, mainPicture, activeTab,start } = this.state;
    const filteredImageList = imagesList.filter((item)=>item.category===activeTab.value);

    return (
      <div className="matchgame-page">
        <MatchGameNav score={score} timer={timer} />
        <div className="matchgame-content">
          {start && (
            <>
              <div className="matchgame-main-image">
                <img src={mainPicture.imageUrl} alt="match game" />
              </div>
              <div className="matchgame-tab-container">
                {tabList.map((item) => (
                  <TabItem
                    key={item.id}
                    data={item}
                    onSelectTab={this.setActiveTab}
                    active={activeTab.name == item.name}
                  />
                ))}
              </div>
              <div className="matchItem-container">
                {filteredImageList.map((item) => (
                  <ImageItem
                    key={item.id}
                    id={item.id}
                    imageUrl={item.thumbnailUrl}
                    onSelectImage={this.onSelectImage}
                  />
                ))}
              </div>
            </>
          )}
          {!start && <MatchFinishCard onPlayAgain={this.onPlayAgain} score={score}/>}
        </div>
      </div>
    );
  }
}
export default MatchGame;
