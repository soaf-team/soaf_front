import { useState } from "react";
import { useGetMovies } from "../../queries";

import { Flex } from "@soaf/react-components-layout";

import { Movie } from "@/shared/types";
import { SearchInput } from "../SearchInput";
import { MovieItem } from "./MovieItem";

interface Props {
  onNextStep: () => void;
  setMovieId: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchMovieList = ({ onNextStep, setMovieId }: Props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { movies } = useGetMovies({ value: searchQuery });

  const handleItemClick = (movie: Movie) => {
    setMovieId(movie.id.toString());
    onNextStep();
  };

  if (!movies) return null;

  return (
    <Flex direction="column">
      <SearchInput type="movie" setSearchQuery={setSearchQuery} />

      {movies.map((movie: Movie) => (
        <MovieItem
          key={movie.id}
          movie={movie}
          onClick={() => handleItemClick(movie)}
        />
      ))}
    </Flex>
  );
};
