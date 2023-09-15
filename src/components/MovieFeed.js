import React from "react";
import Movies from "./Movies";

function MovieFeed({ movies }) {
  return (
    <div className="featuredMovieContainer" >
      <div className="featuredMovie">
        <h1>Featured Movie</h1>
      <h2>see more &gt;</h2></div>
      <div className="movieContainer">
        {movies?.slice(0,10).map(({ id, title, release_date, poster_path }) => (
          <Movies
            key={id}
            id={id}
            title={title}
            releaseDate={release_date}
            image={`https://image.tmdb.org/t/p/w500${poster_path}`}
          />
        ))}
      </div>
      
    </div>
  );
}

export default MovieFeed;
