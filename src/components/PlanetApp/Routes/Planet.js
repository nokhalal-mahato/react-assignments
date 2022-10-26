import { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./planet.css";
import planetList from "../Constants/planetList";
import PlanetItem from "../Components/PlanetItem";

class PlanetApp extends Component {
  render() {
    return (
      <div className="planet-app">
        <div className="planet-app-content">
          <h1 className="planet-app-heading">PLANETS</h1>
          <Slider slidesToShow={1} slidesToScroll={1}>
            {planetList.map((item) => (
              <PlanetItem key={item.id} data={item} />
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}

export default PlanetApp;
