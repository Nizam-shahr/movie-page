import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
function Movies({ id, title, image, releaseDate }) {
  const router = useRouter();
  return (
    <Link href={`/movie-details/${id}`}>
      <div className="movieContainer">
        <div>
          <Image src={image} width={250} height={370} alt="" />
          <h2>{title}</h2>
          <h3>Realeased: {releaseDate}</h3>
        </div>
      </div>
    </Link>
  );
}

export default Movies;
