import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieItem from "../MovieItem";
import sliderSettings from "../../Constants/sliderSetting";

class MovieSlider extends Component {
  render() {
    const {movies}=this.props;
    return (
      <div className="movie-slider">
        <Slider {...sliderSettings}>
            {movies.map(item=><MovieItem key={item.id} data={item}/>)}
        </Slider>
      </div>
    );
  }
}

export default MovieSlider;
