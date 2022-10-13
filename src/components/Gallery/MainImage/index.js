import { Component } from "react";
import './index.css';

class MainImage extends Component{

    render(){
        const {imageurl}=this.props;
        return(
            <div className="gallery-main-image">
                <img src={imageurl} alt='main-image'/>
            </div>
        )
    }
}
export default MainImage;