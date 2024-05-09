import { useState } from "react";
import { useGetMovies } from "../../queries";

import { Flex } from "@soaf/react-components-layout";

import { Movie } from "@/shared/types";
import { SearchInput } from "../SearchInput";
import { MovieItem } from "./MovieItem";

interface Props {
  onNextStep: () => void;
}

export const SearchMovieList = ({ onNextStep }: Props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { movies } = useGetMovies({ value: searchQuery });

  if (!movies) return null;

  return (
    <Flex direction="column">
      <SearchInput type="movie" setSearchQuery={setSearchQuery} />

      {movies.map((movie: Movie) => (
        <MovieItem
          key={movie.id}
          title={movie.title}
          release_date={movie.release_date}
          overview={movie.overview}
          poster_path={movie.poster_path}
          onClick={onNextStep}
        />
      ))}
    </Flex>
  );
};
