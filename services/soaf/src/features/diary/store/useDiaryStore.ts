import { Emotion } from "@/shared/types";
import { create } from "zustand";

export type DiaryFormType = {
  id?: string;
  rating: number | null;
  title: string;
  content: string;
  photos: string[];
  emotions: Emotion[];
  reactions: any[];
  date: Date | string;
};

type DiaryRatingStore = {
  diary: DiaryFormType;
  onChangeDate: (date: Date | string) => void;
  onChangeRating: (rating: number) => void;
  onChangeEmotions: (emotions: Emotion[]) => void;
  onChangeEmotionOrder: (emotions: Emotion[]) => void;
  onChangePhotos: (photos: string[]) => void;
  onChangeTitle: (title: string) => void;
  onChangeContent: (content: string) => void;
  resetAllDiaryState: () => void;
};

export const useDiaryStore = create<DiaryRatingStore>((set) => {
  const defaultDiary: DiaryFormType = {
    rating: null,
    title: "",
    content: "",
    photos: [],
    emotions: [],
    reactions: [],
    date: "",
  };

  const reorderEmotions = (emotions: Emotion[]) => {
    const [first, ...rest] = emotions;
    return [...rest, first];
  };

  return {
    diary: defaultDiary,
    onChangeDate: (date) =>
      set((state) => ({
        diary: {
          ...state.diary,
          date,
        },
      })),
    onChangeRating: (rating) =>
      set((state) => ({
        diary: {
          ...state.diary,
          rating,
        },
      })),
    onChangeEmotions: (emotions: Emotion[]) =>
      set((state) => ({
        diary: {
          ...state.diary,
          emotions,
        },
      })),
    onChangeEmotionOrder: (emotions: Emotion[]) =>
      set((state) => ({
        diary: {
          ...state.diary,
          emotions: reorderEmotions(emotions),
        },
      })),
    onChangePhotos: (photos: string[]) =>
      set((state) => ({
        diary: {
          ...state.diary,
          photos,
        },
      })),
    onChangeTitle: (title: string) =>
      set((state) => ({
        diary: {
          ...state.diary,
          title,
        },
      })),
    onChangeContent: (content: string) =>
      set((state) => ({
        diary: {
          ...state.diary,
          content,
        },
      })),

    resetAllDiaryState: () =>
      set({
        diary: defaultDiary,
      }),
  };
});
