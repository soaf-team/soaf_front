import { create } from "zustand";
import { Music } from "@/shared/types";

type MusicStoreType = {
  music: Music;
  setMusic: (music: Music) => void;
  clearMusic: () => void;
};

export const useMusicStore = create<MusicStoreType>((set) => {
  const initialState = {
    url: "",
    name: "",
    artist: "",
    image: "",
    review: "",
  };

  return {
    music: initialState,
    setMusic: (music: Music) => set({ music }),
    clearMusic: () => set({ music: initialState }),
  };
});
