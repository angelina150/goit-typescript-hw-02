import { Photo } from "../../types";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

type ImageGalleryProps = {
  photos: Photo[];
  onPhotoClick: (photo: Photo) => void;
};
const ImageGallery: React.FC<ImageGalleryProps> = ({
  photos,
  onPhotoClick,
}) => {
  return (
    <div>
      <ul className={css.list}>
        {photos.map((photo) => (
          <li
            className={css.listItem}
            key={photo.id}
            onClick={() => onPhotoClick(photo)}
          >
            <ImageCard url={photo.urls.small} title={photo.alt_description} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
