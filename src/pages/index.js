import Image from "next/image";
import { Inter } from "next/font/google";
import MovieFeed from "@/components/MovieFeed";
import Header from "@/components/Header";
import { useEffect, useState } from "react";

export default function Home({ movies }) {
  const [filterMovies, setFilterMovies] = useState();

  useEffect(() => {
    if (movies) {
      setFilterMovies([...movies]);
    }
  }, [movies]);

  return (
    <div>
      <Header movies={movies} setFilterMovies={setFilterMovies} />
      <MovieFeed movies={filterMovies} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const movies = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  ).then((res) => res.json().then((json) => json.results));

  return {
    props: {
      movies,
    },
  };
}
