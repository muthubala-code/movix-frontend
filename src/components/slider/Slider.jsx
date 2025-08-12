// src/components/Slider.js

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./slider.css";
import jw from "../../assets/jw.mp4";
import eg from "../../assets/eg.mp4";

const movies = [
  {
    id: 1,
    title: "End game",
    genre: "Action, Crime, Thriller",
    rating: "8.2",
    year: "2023",
    duration: "170 mins",
    tag: "TV-MA",
    video: eg,
  },
  {
    id: 1,
    title: "End game",
    genre: "Action, Crime, Thriller",
    rating: "8.2",
    year: "2023",
    duration: "170 mins",
    tag: "TV-MA",
    video: eg,
  },
];

const Slider = () => {
  return (
    <Swiper spaceBetween={0} slidesPerView={1} pagination={{ clickable: true }}>
      {movies.map((movie) => (
        <SwiperSlide key={movie.id}>
          <div className="video-wrapper">
            <video
              //   autoPlay
              loop
              muted
              playsInline
              className="background-video"
              src={movie.video}
              onClick={(e) => e.target.play()}
            />
            <div className="overlay">
              <div className="content">
                <p className="genre">{movie.genre}</p>
                <h1 className="title">{movie.title}</h1>
                <p className="details">
                  ⭐ {movie.rating} • {movie.year} • {movie.duration} •{" "}
                  <span className="tag">{movie.tag}</span>
                </p>
                <p className="desc">
                  Enjoy exclusive Amazon Originals as well as popular movies and
                  TV shows.
                </p>
                <div className="buttons">
                  <button className="slider-btn play">▶ Play Now</button>
                  <button className="slider-btn watch">🔖 Watch Later</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
