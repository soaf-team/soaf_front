import { useState } from "react";
import { useGetMovies } from "../../queries";
import { useMovieStore } from "../../store";

import { Flex } from "@soaf/react-components-layout";

import { Movie } from "@/shared/types";
import { SearchInput } from "../SearchInput";
import { MovieItem } from "./MovieItem";

interface Props {
  onNextStep: () => void;
}

export const SearchMovieList = ({ onNextStep }: Props) => {
  const { setMovie } = useMovieStore();
  const [searchQuery, setSearchQuery] = useState("");
  const { movies } = useGetMovies({ value: searchQuery });

  const handleSelectMovie = (movie: Movie) => {
    setMovie(movie);
    onNextStep();
  };

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
          onClick={() => handleSelectMovie(movie)}
        />
      ))}
    </Flex>
  );
};
