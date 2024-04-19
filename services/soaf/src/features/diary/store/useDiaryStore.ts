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
  handleSelectedRating: (rating: number) => void;
  handleEmotions: (emotions: Emotion[]) => void;
  handleTitle: (title: string) => void;
  handleContent: (content: string) => void;
  resetAll: () => void;
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
    handleSelectedRating: (rating) =>
      set((state) => ({
        diary: {
          ...state.diary,
          rating,
        },
      })),
    handleEmotions: (emotions: Emotion[]) =>
      set((state) => ({
        diary: {
          ...state.diary,
          emotions,
        },
      })),
    handleTitle: (title: string) =>
      set((state) => ({
        diary: {
          ...state.diary,
          title,
        },
      })),
    handleContent: (content: string) =>
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
