import { useState } from "react";
import { useGetMovies } from "../../queries";

import { Movie } from "@/shared/types";
import { SearchInput } from "../SearchInput";
import { MovieItem } from "./MovieItem";
import { useObserver } from "@/shared/hooks";

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

      {movies?.map((movie: Movie) => (
        <MovieItem
          key={movie.id}
          movie={movie}
          onClick={() => handleItemClick(movie)}
        />
      ))}
      {isFetching ? (
        <div>로딩 중...</div>
      ) : (
        <div ref={pageRef} className="h-px" />
      )}
    </>
  );
};
