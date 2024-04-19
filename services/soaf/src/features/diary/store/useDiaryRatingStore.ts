import { create } from "zustand";

type DiaryRatingStore = {
  selectedRating: number | null;
  setSelectedRating: (rating: number) => void;
};

export const useDiaryRatingStore = create<DiaryRatingStore>((set) => ({
  selectedRating: null,
  setSelectedRating: (rating: number) => set({ selectedRating: rating }),
}));
