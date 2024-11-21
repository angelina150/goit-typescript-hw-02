import React from "react";
import css from "./ImageCard.module.css";
type ImageCardProps = {
  url: string;
  title: string;
};
const ImageCard: React.FC<ImageCardProps> = ({ url, title }) => {
  return (
    <div>
      <img src={url} alt={title} className={css.img} />
    </div>
  );
};

export default ImageCard;
