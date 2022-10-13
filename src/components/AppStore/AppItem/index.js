import { Component } from "react";
import './index.css'

class AppItem extends Component{
    
    render(){
        const {imageUrl,name}=this.props;
        return(
            <div className="app-item">
                <img src={imageUrl} alt={name}/>
                <p>{name}</p>
            </div>
        )
    }
}

export default AppItem;