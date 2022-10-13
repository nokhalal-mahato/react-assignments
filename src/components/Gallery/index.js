import { Component } from "react";
import './index.css';
import ThumbnailItem from "./ThumbnailItem/Index";

const galleryPhoto=[
    {id:"id1",imageurl:"https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
    {id:"id2",imageurl:"https://www.mickeyshannon.com/photos/fine-art-nature-photography.jpg"},
    {id:"id3",imageurl:"https://shotkit.com/wp-content/uploads/2021/01/Nature-photography-niko-photos.jpg"},
    {id:"id4",imageurl:"https://media.istockphoto.com/photos/canadian-rockies-banff-national-park-dramatic-landscape-picture-id1342152935?b=1&k=20&m=1342152935&s=170667a&w=0&h=q9-vhO5MC7zwaxX8_zFUiqMnQJ5udMjEBf0npeCCAGs="},
    {id:"id5",imageurl:"https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2018/10/bluebells,_oxfordshire.jpg?fit=1500%2C1000&ssl=1"},
    {id:"id6",imageurl:"https://cdn.pixabay.com/photo/2015/07/05/10/18/tree-832079__340.jpg"},
    {id:"id7",imageurl:"https://webneel.com/daily/sites/default/files/images/daily/10-2013/16-nature-photography-forest-by-larsvandegoor.jpg"},
    {id:"id8",imageurl:"https://media.istockphoto.com/photos/high-angle-view-of-a-lake-and-forest-picture-id1337232523?b=1&k=20&m=1337232523&s=170667a&w=0&h=ueU7jzT1l-Qs_i4HwtBHO00RLGwgnlzRRKcja79EOgo="},
]
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
                    <div className="gallery-main-image">
                        <img src={selectedPhoto.imageurl} alt='main-image'/>
                    </div>
                    <h2 className="gallery-header">Nature Photography</h2>
                    <p className="gallery-tagline">Nature Photography by Nokhalal</p>
                    <div className="thumbnail-container">
                        {galleryPhoto.map((item)=><ThumbnailItem id={item.id} key={item.id} imageurl={item.imageurl} onclick={this.setSelectedPicture}/>)}
                    </div>
                </div>                
            </div>
        );
    }
}
export default Gallery;