import { Component } from "react";
import MovieSlider from "../../Components/MovieSlider";
import moviesList from "../../Constants/moviesList";
import "./index.css";

class PrimeVideo extends Component {
  render() {
    const actionMovie = moviesList.filter(
      (item) => item.categoryId === "ACTION"
    );
    const comedyMovie = moviesList.filter(
      (item) => item.categoryId === "COMEDY"
    );
    return (
      <div className="prime-video-page">
        <div className="prime-video-image">
          <img
            src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
            alt="prime-video"
          />
        </div>
        <div className="movie-sliders-container">
          <h2 className="movie-slider-heading">Action Movies</h2>
          <MovieSlider movies={actionMovie} />
          <h2 className="movie-slider-heading">Comedy Movies</h2>
          <MovieSlider movies={comedyMovie} />
        </div>
      </div>
    );
  }
}

export default PrimeVideo;
