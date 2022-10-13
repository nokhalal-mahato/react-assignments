import { Component } from "react";
import './index.css';

class ThumbnailItem extends Component{

    setSelectedPictureHandler=()=>{
        const {id,onclick}=this.props;
        onclick(id);
    }

    render(){
        const {id,imageurl}=this.props;
        return(
            <div className="thumbnail-item" id={id} onClick={this.setSelectedPictureHandler}>
                <img src={imageurl} alt={id}/>
            </div>
        );
    }
}
export default ThumbnailItem;