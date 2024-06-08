import Draggable, { DraggableData } from "react-draggable";
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

import { cn } from "@/shared/utils";

import { InteriorType } from "@/shared/types";

interface InteriorProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  name: string;
  type: InteriorType;
  isEdit: boolean;
  isDraggable: { [key: string]: boolean };
  position: { x: number; y: number };
  initialPosition?: { x: number; y: number };
  handleDrag: (data: DraggableData) => void;
  onItemClick: () => void;
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

export function Interior(props: InteriorProps) {
  const {
    // src,
    name,
    type,
    isEdit,
    isDraggable,
    className,
    position,
    initialPosition,
    handleDrag,
    onItemClick,
    ...rest
  } = props;

  const imageSrc = images[name as keyof typeof images];

  const content = (
    <div
      {...rest}
      className={cn(
        "relative z-10",
        isEdit &&
          isDraggable[name] === true &&
          "border-solid border-2 border-gray300",
        className,
      )}
      onClick={onItemClick}
    >
      <img src={imageSrc} alt={name} className="full_img_contain" />
      {isEdit && isDraggable[name] === true && type === "hobby" && (
        <button className="absolute -top-3 -right-3 flex space-x-1 w-[24px] h-[24px] z-20">
          <img src={remove} alt="rmove" className="full_img_cover" />
        </button>
      )}
      {isEdit && isDraggable[name] === true && (
        <button className="handle absolute -bottom-3 -right-3 flex space-x-1 w-[24px] h-[24px] z-20">
          <img src={drag} alt="drag" className="full_img_cover" />
        </button>
      )}
    </div>
  );

  return isDraggable ? (
    <Draggable
      defaultPosition={initialPosition}
      position={position}
      handle=".handle"
      bounds="body"
      disabled={!isEdit && !isDraggable}
      onDrag={(_, data) => handleDrag(data)}
    >
      {content}
    </Draggable>
  ) : (
    content
  );
}
