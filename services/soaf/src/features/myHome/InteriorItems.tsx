import { useDebounce } from "@/shared/hooks";

import { Interior } from "./components";
import { DraggableData } from "react-draggable";

interface Props {
  isEdit?: boolean;
  isAfter6PM?: boolean;
  positions: {
    [key: string]: { x: number; y: number };
  };
  setPositions: React.Dispatch<
    React.SetStateAction<{
      [key: string]: { x: number; y: number };
    }>
  >;
  setPrevPositions: React.Dispatch<
    React.SetStateAction<{
      [key: string]: { x: number; y: number };
    }>
  >;
}

export const InteriorItems = ({
  isEdit,
  isAfter6PM,
  positions,
  setPositions,
  setPrevPositions,
}: Props) => {
  const { debounced: handleOnDrag } = useDebounce(
    (id: string, data: DraggableData) => {
      setPositions((prevPositions) => ({
        ...prevPositions,
        [id]: { x: data.x, y: data.y },
      }));
    },
    100,
  );

  const handleOnDragStart = () => {
    setPrevPositions(positions);
  };

  return (
    <>
      <Interior
        src="books"
        isEdit={isEdit}
        className="absolute w-1/4 top-16"
        initialPosition={positions["books"]}
        handleDrag={(data) => handleOnDrag("books", data)}
        onDragStart={handleOnDragStart}
      />
      <Interior
        src="movie"
        isEdit={isEdit}
        className="absolute z-10 w-1/4 top-1/3"
        initialPosition={positions["movie"]}
        handleDrag={(data) => handleOnDrag("movie", data)}
        onDragStart={handleOnDragStart}
      />
      <Interior
        src="music"
        isEdit={isEdit}
        className="absolute w-1/5 top-[18%] left-[10%]"
        initialPosition={positions["music"]}
        handleDrag={(data) => handleOnDrag("music", data)}
        onDragStart={handleOnDragStart}
      />
      <Interior
        src="picture"
        isEdit={isEdit}
        className="absolute w-1/5 left-[45%]"
        initialPosition={positions["picture"]}
        handleDrag={(data) => handleOnDrag("picture", data)}
        onDragStart={handleOnDragStart}
      />
      <Interior
        src="plant"
        isEdit={isEdit}
        className="absolute z-10 top-[35%] right-1/4 w-1/10"
        initialPosition={positions["plant"]}
        handleDrag={(data) => handleOnDrag("plant", data)}
        onDragStart={handleOnDragStart}
      />
      <Interior
        src="sofa"
        isEdit={isEdit}
        className="absolute right-[5%] top-1/3 z-10"
        initialPosition={positions["sofa"]}
        handleDrag={(data) => handleOnDrag("sofa", data)}
        onDragStart={handleOnDragStart}
      />
      <Interior
        src={isAfter6PM ? "windowNight" : "windowDay"}
        isEdit={isEdit}
        className="absolute w-1/4 top-14 right-4"
        initialPosition={positions["window"]}
        handleDrag={(data) => handleOnDrag("window", data)}
        onDragStart={handleOnDragStart}
      />
      <Interior
        src="youtube"
        isEdit={isEdit}
        className="absolute w-[15%] left-1/2 top-1/4"
        initialPosition={positions["youtube"]}
        handleDrag={(data) => handleOnDrag("youtube", data)}
        onDragStart={handleOnDragStart}
      />
    </>
  );
};
