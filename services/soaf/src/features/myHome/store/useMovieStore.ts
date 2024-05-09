import { create } from "zustand";
import { Movie } from "@/shared/types";

type MovieStoreType = {
  movie: Movie;
  setMovie: (movie: Movie) => void;
  clearMovie: () => void;
};

export const useMovieStore = create<MovieStoreType>((set) => {
  const initialState = {
    title: "",
    release_date: "",
    overview: "",
    poster_path: "",
    director: "",
    genre: "",
    rating: 0,
  };

  return {
    movie: initialState,
    setMovie: (movie: Movie) => set({ movie }),
    clearMovie: () => set({ movie: initialState }),
  };
});
