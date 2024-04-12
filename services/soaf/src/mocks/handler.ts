import { HttpResponse, delay, http } from "msw";
import diary from "./diary.json";

export const handlers = [
  http.get("/diary", async () => {
    await delay(500);
    return HttpResponse.json(diary);
  }),
  http.post("/diary", async () => {
    await delay(500);
    diary.push({
      id: "4",
      date: "2024.04.12",
      title: "title4",
      photos: ["photo1", "photo2"],
      content: "content4",
      emotions: ["tired"],
      reactions: ["reaction1", "reaction2"],
    });

    return HttpResponse.json(diary);
  }),
];
