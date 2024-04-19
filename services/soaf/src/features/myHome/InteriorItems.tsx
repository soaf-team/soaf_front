import { useDebounce } from "@/shared/hooks";

import { Interior } from "./components";
import { DraggableData } from "react-draggable";

interface Props {
  isEdit?: boolean;
  isAfter6PM?: boolean;
  positions: {
    [key: string]: { x: number; y: number };
  };
  initialPositions: {
    [key: string]: { x: number; y: number };
  };
  setPositions: React.Dispatch<
    React.SetStateAction<{
      [key: string]: { x: number; y: number };
    }>
  >;
}

export const InteriorItems = ({
  isEdit,
  isAfter6PM,
  positions,
  initialPositions,
  setPositions,
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

  return (
    <>
      <Interior
        src="books"
        isEdit={isEdit}
        className="absolute w-1/4 top-16"
        position={positions["books"]}
        initialPosition={initialPositions["books"]}
        handleDrag={(data) => handleOnDrag("books", data)}
      />
      <Interior
        src="movie"
        isEdit={isEdit}
        className="absolute z-10 w-1/4 top-1/3"
        position={positions["movie"]}
        initialPosition={initialPositions["movie"]}
        handleDrag={(data) => handleOnDrag("movie", data)}
      />
      <Interior
        src="music"
        isEdit={isEdit}
        className="absolute w-1/5 top-[18%] left-[10%]"
        position={positions["music"]}
        initialPosition={initialPositions["music"]}
        handleDrag={(data) => handleOnDrag("music", data)}
      />
      <Interior
        src="picture"
        isEdit={isEdit}
        className="absolute w-1/5 left-[45%]"
        position={positions["picture"]}
        initialPosition={initialPositions["picture"]}
        handleDrag={(data) => handleOnDrag("picture", data)}
      />
      <Interior
        src="plant"
        isEdit={isEdit}
        className="absolute z-10 top-[35%] right-1/4 w-1/10"
        position={positions["plant"]}
        initialPosition={initialPositions["plant"]}
        handleDrag={(data) => handleOnDrag("plant", data)}
      />
      <Interior
        src="sofa"
        isEdit={isEdit}
        className="absolute right-[5%] top-1/3 z-10"
        position={positions["sofa"]}
        initialPosition={initialPositions["sofa"]}
        handleDrag={(data) => handleOnDrag("sofa", data)}
      />
      <Interior
        src={isAfter6PM ? "windowNight" : "windowDay"}
        isEdit={isEdit}
        className="absolute w-1/4 top-14 right-4"
        position={positions["window"]}
        initialPosition={initialPositions["window"]}
        handleDrag={(data) => handleOnDrag("window", data)}
      />
      <Interior
        src="youtube"
        isEdit={isEdit}
        className="absolute w-[15%] left-1/2 top-1/4"
        position={positions["youtube"]}
        initialPosition={initialPositions["youtube"]}
        handleDrag={(data) => handleOnDrag("youtube", data)}
      />
    </>
  );
};
