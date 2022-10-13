import { Component } from "react";
import './index.css';
import ThumbnailItem from "./ThumbnailItem/Index";
import galleryPhoto from "./galleryList";
import MainImage from "./MainImage";

class Gallery extends Component{
    state={selectedPhoto:galleryPhoto[0]};

    setSelectedPicture=(id)=>{
        this.setState({selectedPhoto:galleryPhoto.find((item)=>item.id===id)});
    }

    render(){
        const {selectedPhoto}=this.state;
        return(
            <div className="gallery-page">
                <div className="gallery-content">
                    <MainImage imageurl={selectedPhoto.imageurl}/>
                    <h2 className="gallery-header">Nature Photography</h2>
                    <p className="gallery-tagline">Nature Photography by Nokhalal</p>
                    <div className="thumbnail-container">
                        {galleryPhoto.map((item)=><ThumbnailItem id={item.id} key={item.id} imageurl={item.imageurl} isActive={item.id===selectedPhoto.id} onclick={this.setSelectedPicture}/>)}
                    </div>
                </div>                
            </div>
        );
    }
}
export default Gallery;