import Image from "next/image";

function MovieItem({ image, releaseDate, runtime, title, overview }) {
  return (
    <div>
      <div>
        <img src={image} className="backdrop" />
        <div className="movieItemsContainer">
        <h2 className="movieItems" data-testid='movie-title'>{title} .</h2>
        <h2  className="movieItems" data-testid='movie-release-date'>Released: {releaseDate} </h2>
        <h2  className="movieItems" data-testid='movie-runtime'>Play Time: {runtime}Mins.</h2>
        </div>
        <p>{overview}</p>
      </div>
    </div>
  );
}

export default MovieItem;
