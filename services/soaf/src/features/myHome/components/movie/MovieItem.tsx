import { Flex } from "@soaf/react-components-layout";
import { Movie } from "@/shared/types";

import { cn } from "@/shared/utils";

interface Props extends Movie {
  type?: "search" | "set" | "detail";
  onClick?: () => void;
}

export const MovieItem = ({
  type = "search",
  onClick,
  title,
  release_date,
  overview,
  poster_path,
}: Props) => {
  const posterClass = cn({
    "min-w-[92px] w-[92px] h-[134px] rounded-[8px]": type === "search",
    "w-[85px] h-[124px] rounded-[8px]": type === "set",
    "w-[96px] h-[140px] rounded-[8px]": type === "detail",
  });

  const titleClass = cn(
    {
      label2: type === "search",
      head5b: type === "set" || "detail",
    },
    "text-black",
  );

  return (
    <Flex
      direction="row"
      gap={16}
      className="py-[8px] border-solid border-b border-border"
      onClick={onClick}
    >
      <div className={posterClass}>
        <img
          src={`https://image.tmdb.org/t/p/w342${poster_path}`}
          alt="cover"
          className={posterClass}
        />
      </div>

      <Flex
        direction="column"
        justify={type === "search" ? "space-between" : ""}
        gap={8}
        className="py-[8px]"
      >
        <Flex direction="column" gap={4}>
          <p className={cn("line-clamp-1", titleClass)}>{title}</p>
          <p className={cn("label4 text-gray400")}>{release_date}</p>
        </Flex>
        {overview && <p className="line-clamp-3 body4">{overview}</p>}
      </Flex>
    </Flex>
  );
};
