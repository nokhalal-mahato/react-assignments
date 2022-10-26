import { Component } from "react";
import './index.css';

class PlanetItem extends Component{
    render(){
        const {data}=this.props;
        return (
          <div className="planet-item">
            <div className="planet-image">
              <img src={data.imageUrl} alt={data.name} />
            </div>
            <h2 className="planet-name">{data.name}</h2>
            <p className="planet-desc">{data.desc}</p>
          </div>
        );
    }
}
export default PlanetItem;