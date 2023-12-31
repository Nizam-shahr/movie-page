import MovieItem from "@/components/MovieItem";
import Image from "next/image";
import { useRouter } from "next/router";
function MovieDetails({
  movieDetails: { backdrop_path, id, release_date, runtime, title, overview },
}) {
  const router = useRouter();
  return (
    <div>
      <div className="movieDetailsContainer">
        <div className="movieDetailsLeft">
          <div className="movieBox" onClick={() => router.push("/")}>
            <Image src="/images/tv.jpg" width={50} height={50} />
            <h2>MovieBox</h2>
          </div>
          <div className="sideBarNav">
            <div className="home">
              <img src="/images/Home.jpg" />
              <h2 onClick={() => router.push("/")}>Home</h2>
            </div>
            <div className="movie">
              <img src="/images/MovieProjector.jpg" />
              <h2>Movies</h2>
            </div>
            <div className='tv'>
              <img src="/images/TVShow.jpg" />
              <h2>TV Series</h2>
            </div>
            <div className="sideBarNavDiv">
              <img src="/images/Calendar.jpg" />
              <h2>Upcoming</h2>
            </div>
          </div>
          <div className="startPlaying">
            <h2>Play movie quizes and earn free tickets</h2>
            <h3>50k people are playing now</h3>
            <h4>Start playing</h4>
          </div>
          <div className="logOut">
            <img src="/images/Logout.png" width={30} height={30} />
            <h2>Log out</h2>
          </div>
        </div>
        <div className="movieDetailsContent">
          <MovieItem
            key={id}
            image={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
            releaseDate={release_date}
            runtime={runtime}
            title={title}
            overview={overview}
          />
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const movieDetails = await fetch(
    `https://api.themoviedb.org/3/movie/${context.params.id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  ).then((res) => res.json());
  return {
    props: {
      movieDetails,
    },
  };
}

export default MovieDetails;
