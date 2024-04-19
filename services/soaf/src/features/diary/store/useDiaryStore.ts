import { Emotion } from "@/shared/types";
import { create } from "zustand";

type DiaryFormType = {
  id?: string;
  rating: number | null;
  title: string;
  content: string;
  photos: string[];
  emotions: Emotion[];
  date: string;
};

type DiaryRatingStore = {
  diary: DiaryFormType;
  setSelectedRating: (rating: number) => void;
};

export const useDiaryStore = create<DiaryRatingStore>((set) => {
  const defaultDiary: DiaryFormType = {
    rating: null,
    title: "",
    content: "",
    photos: [],
    emotions: [],
    date: "",
  };

  return {
    diary: defaultDiary,
    setSelectedRating: (rating) =>
      set((state) => ({
        diary: {
          ...state.diary,
          rating,
        },
      })),
    setEmotions: (emotions: Emotion[]) =>
      set((state) => ({
        diary: {
          ...state.diary,
          emotions,
        },
      })),
    setTitle: (title: string) =>
      set((state) => ({
        diary: {
          ...state.diary,
          title,
        },
      })),
    setContent: (content: string) =>
      set((state) => ({
        diary: {
          ...state.diary,
          content,
        },
      })),

    resetAll: () =>
      set({
        diary: defaultDiary,
      }),
  };
});
