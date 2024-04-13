import { HttpResponse, http } from "msw";
import diary from "./diary.json";

const BASE_URL = "http://soaf:3000";

export const handlers = [
  http.get(`${BASE_URL}/diary`, async () => {
    return HttpResponse.json(diary, { status: 200 });
  }),
  http.post("/diary", async () => {
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
