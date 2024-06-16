import defaultPoster from "@/assets/icons/my-home/movie-default.svg";

import { useMemo } from "react";

import { Flex } from "@soaf/react-components-layout";
import { StarRating } from "@/shared/components";
import { Movie, MovieDetail } from "@/shared/types";

import { cn } from "@/shared/utils";

interface Props {
  type?: "search" | "set" | "detail";
  onClick?: () => void;
  movie: Movie | MovieDetail;
}

export const MovieItem = ({ type = "search", onClick, movie }: Props) => {
  const isMovieDetail = (movie: Movie | MovieDetail): movie is MovieDetail => {
    return (movie as MovieDetail).genres !== undefined;
  };

  const director = useMemo((): string => {
    if (!isMovieDetail(movie)) return "";

    return movie.credits.crew.filter(crew => crew.department === "Directing")[0]
      .name;
  }, [movie]);

  const genre = useMemo((): string => {
    if (!isMovieDetail(movie)) return "";

    return movie.genres.reduce((acc, cur, idx) => {
      return idx === movie.genres.length - 1
        ? `${acc}${cur.name}`
        : `${acc}${cur.name}, `;
    }, "");
  }, [movie]);

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
      direction="column"
      gap={16}
      className="border-b border-solid border-border py-[8px]"
    >
      <Flex direction="row" gap={16} onClick={onClick}>
        <div className={posterClass}>
          <img
            src={
              movie.poster_path !== null
                ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
                : defaultPoster
            }
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
          <Flex direction="column" gap={8}>
            <p className={cn("line-clamp-1", titleClass)}>{movie.title}</p>
            <Flex direction="column" gap={4}>
              {isMovieDetail(movie) && (
                <p className="label3 text-gray400">{director}</p>
              )}
              <p className="label4 text-gray400">{movie.release_date}</p>
            </Flex>
          </Flex>
          {type === "search" && (
            <p className="line-clamp-4 body4">{movie.overview}</p>
          )}
          {type === "detail" && <StarRating size={24} onChange={() => {}} />}
        </Flex>
      </Flex>

      {isMovieDetail(movie) && (
        <Flex direction="row" justify="space-between" className="py-[8px]">
          <p className="label2 text-gray500">장르</p>
          <p className="label2 text-gray600">{genre}</p>
        </Flex>
      )}
    </Flex>
  );
};
