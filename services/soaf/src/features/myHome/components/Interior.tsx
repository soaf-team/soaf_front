import books from "@/assets/icons/my-home/interior/books.svg";
import movie from "@/assets/icons/my-home/interior/movie.svg";
import music from "@/assets/icons/my-home/interior/music.svg";
import picture from "@/assets/icons/my-home/interior/picture.svg";
import plant from "@/assets/icons/my-home/interior/plant.svg";
import sofa from "@/assets/icons/my-home/interior/sofa.svg";
import windowDay from "@/assets/icons/my-home/interior/window-day.svg";
import windowNight from "@/assets/icons/my-home/interior/window-night.svg";
import youtube from "@/assets/icons/my-home/interior/youtube.svg";

import remove from "@/assets/icons/my-home/delete.svg";
import drag from "@/assets/icons/my-home/move.svg";

import Draggable from "react-draggable";

interface InteriorProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  isEdit?: boolean;
  isDraggable?: boolean;
  imgClass?: string;
}

const images: { [key: string]: string } = {
  books,
  movie,
  music,
  picture,
  plant,
  sofa,
  windowDay,
  windowNight,
  youtube,
};

export const Interior = (props: InteriorProps) => {
  const {
    src,
    isEdit,
    isDraggable,
    className,
    imgClass = "full_img_contain",
    ...rest
  } = props;

  const imageSrc = images[src as keyof typeof images];

  return (
    <Draggable>
      <div {...rest} className={className}>
        <img src={imageSrc} alt="interior-item" className={imgClass} />
      </div>
    </Draggable>
  );
};
