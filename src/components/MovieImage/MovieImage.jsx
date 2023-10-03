import React from "react";
import { ImageThumb, Image } from "./MovieImage.styled";

const MovieImage = ({ imgPath, title }) => {
  const defaultImg =
    "https://placehold.co/600x400/lightpurple/white?text=No Image Given";

  return (
    <ImageThumb>
      <Image
        src={`https://image.tmdb.org/t/p/w500${imgPath}` || defaultImg}
        width={400}
        height={400}
        alt={title}
      />
    </ImageThumb>
  );
};

export default MovieImage;
