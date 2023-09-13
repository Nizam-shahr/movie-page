import axios from "axios";
import { redirect } from "next/dist/server/api-utils";
import React from "react";

function MovieDetails() {
  return <div>Hello</div>;
}

export async function getServerSideProps(context) {
  const res = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/${context.params.id}`,

    {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjQ2YjA1M2ZkNTQyYmNiZTEzMjQ4NDFlMDMxYjA0ZSIsInN1YiI6IjY1MDE0ZWRmZTBjYTdmMDBhZTNmYTQ5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4ey4EKVZrpxnhqGMfNbHNcG0GG83eRlofhRbgmUV4VU",
      },
    }
  );

  // const response = await fetch(
  //   `https://api.themoviedb.org/3/trending/movie/${context.params.id}`
  // )
  //   .then((res) => res.json().then((json) => json.results))
  //   .catch((err) => {
  //     console.log(err);

  //   });

  return {
    props: {
      res,
    },
  };
}

export default MovieDetails;
