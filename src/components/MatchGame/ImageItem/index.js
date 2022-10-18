import { Component } from "react";
import "./index.css";

class ImageItem extends Component {
  onSelectImageHandler=()=>{
    const {onSelectImage,id}=this.props;
    onSelectImage(id);
  }
  render() {
    return (
      <img src={this.props.imageUrl} onClick={this.onSelectImageHandler} alt='' className="match-imageitem"/>
    );
  }
}
export default ImageItem;
