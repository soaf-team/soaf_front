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

import { useState } from "react";

import { cn } from "@/shared/utils";

import Draggable, { DraggableData } from "react-draggable";

interface InteriorProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  isEdit?: boolean;
  imgClass?: string;
  initialPosition?: { x: number; y: number };
  handleDrag: (data: DraggableData) => void;
  onDragStart?: () => void;
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
    className,
    imgClass = "full_img_contain",
    initialPosition,
    handleDrag,
    onDragStart,
    ...rest
  } = props;

  const [isDraggable, setIsDraggable] = useState(false);

  const imageSrc = images[src as keyof typeof images];

  const content = (
    <div
      {...rest}
      className={cn(
        "relative",
        isEdit && isDraggable && "border-solid border-2 border-gray300",
        className,
      )}
      onClick={() => isEdit && setIsDraggable((prev) => !prev)}
    >
      <img src={imageSrc} alt="interior-item" className={imgClass} />
      {isEdit && isDraggable && (
        <button className="handle absolute -bottom-3 -right-3 flex space-x-1 w-[24px] h-[24px]">
          <img src={drag} alt="drag" className="full_img_cover" />
        </button>
      )}
    </div>
  );

  return isDraggable ? (
    <Draggable
      position={initialPosition}
      handle=".handle"
      bounds="body"
      disabled={!isEdit && !isDraggable}
      onDrag={(_, data) => handleDrag(data)}
      onStart={onDragStart}
    >
      {content}
    </Draggable>
  ) : (
    content
  );
};
