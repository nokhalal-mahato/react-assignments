import { Component } from "react";
import './index.css';

class DestinationItem extends Component{
    render(){
        const {name,imageUrl,id}=this.props;
        return(
            <div id={id} className="destination-item">
                <img src={imageUrl} className='destination-item-image'/>
                <p>{name}</p>
            </div>
        );
    }
}

export default DestinationItem;