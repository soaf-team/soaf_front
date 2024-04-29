import { Emotion } from "./emotion";

export type Diary = {
  id: string;
  title: string;
  content: string;
  photos: string[];
  emotions: Emotion[];
  date: string;
  reactions: {
    [key: string]: number;
  };
};
