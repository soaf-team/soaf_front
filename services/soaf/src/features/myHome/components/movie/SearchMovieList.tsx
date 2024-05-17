import { useState } from "react";
import { useGetMovies } from "../../queries";

import { Movie } from "@/shared/types";
import { SearchInput } from "../SearchInput";
import { MovieItem } from "./MovieItem";
import { useObserver } from "@/shared/hooks";
import { NonDataFallback } from "@/shared/components";

interface Props {
  onNextStep: () => void;
  setMovieId: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchMovieList = ({ onNextStep, setMovieId }: Props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { movies, handleFetchNextPage, isFetching } = useGetMovies({
    value: searchQuery,
  });
  const pageRef = useObserver(() => handleFetchNextPage());

  const handleItemClick = (movie: Movie) => {
    setMovieId(movie.id.toString());
    onNextStep();
  };

  return (
    <>
      <SearchInput type="movie" setSearchQuery={setSearchQuery} />

      {movies?.length === 0 ? (
        <div className="w-full absolute_center">
          <NonDataFallback>
            <p className="font-medium body2 text-gray300">
              {searchQuery}에 대한 검색결과가 없습니다.
            </p>
            <p className="font-medium body2 text-gray300">
              단어의 철자가 정확한지 확인해주세요.
            </p>
          </NonDataFallback>
        </div>
      ) : (
        movies?.map((movie: Movie) => (
          <MovieItem
            key={movie.id}
            movie={movie}
            onClick={() => handleItemClick(movie)}
          />
        ))
      )}

      {isFetching ? (
        <div>로딩 중...</div>
      ) : (
        <div ref={pageRef} className="h-px" />
      )}
    </>
  );
};
