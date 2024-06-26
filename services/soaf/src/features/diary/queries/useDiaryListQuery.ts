import { useQuery } from "@tanstack/react-query";

// import { axiosBase } from "@/shared/apis";
import { QUERY_KEY } from "@/shared/constants";

export const useDiaryListQuery = () => {
  const fetchDiary = async () => {
    // const response = await axiosBase.get("/diary");
    // return response.data;

    return [
      {
        id: "1",
        date: "2024.04.01",
        title: "화난 하루",
        photos: ["https://source.unsplash.com/random/48x48"],
        content:
          "<p>오늘은 뭘 잘못먹었는지 배가 고프다.</p><p>근데 오늘 축구해서 그건 좋다!</p><p>오늘은 뭘 잘못먹었는지 배가 고프다.</p><p>근데 오늘 축구해서 그건 좋다!</p>",
        emotions: [
          "화난",
          "행복한",
          "뿌듯한",
          "설레는",
          "슬픈",
          "외로운",
          "피곤한",
        ],
        reactions: {
          best: 1,
          funny: 2,
          angry: 4,
          sad: 3,
          chear: 5,
        },
      },
      {
        id: "2",
        date: "2024.04.02",
        title: "피곤한 하루",
        photos: ["https://source.unsplash.com/random/48x48"],
        content:
          "<p>오늘은 뭘 잘못먹었는지 배가 고프다.</p><p>근데 오늘 축구해서 그건 좋다!</p><p>오늘은 뭘 잘못먹었는지 배가 고프다.</p><p>근데 오늘 축구해서 그건 좋다!</p>",
        emotions: ["피곤한"],
        reactions: {},
      },
      {
        id: "3",
        date: "2024.04.4",
        title: "슬픈 하루",
        photos: ["https://source.unsplash.com/random/48x48"],
        content:
          "<p>오늘은 뭘 잘못먹었는지 배가 고프다.</p><p>근데 오늘 축구해서 그건 좋다!</p><p>오늘은 뭘 잘못먹었는지 배가 고프다.</p><p>근데 오늘 축구해서 그건 좋다!</p>",
        emotions: ["슬픈"],
        reactions: {},
      },
      {
        id: "4",
        date: "2024.04.6",
        title: "행복한 하루",
        photos: ["https://source.unsplash.com/random/48x48"],
        content:
          "<p>오늘은 뭘 잘못먹었는지 배가 고프다.</p><p>근데 오늘 축구해서 그건 좋다!</p><p>오늘은 뭘 잘못먹었는지 배가 고프다.</p><p>근데 오늘 축구해서 그건 좋다!</p>",
        emotions: ["행복한"],
        reactions: {},
      },
      {
        id: "5",
        date: "2024.04.7",
        title: "외로운 하루",
        photos: ["https://source.unsplash.com/random/48x48"],
        content:
          "<p>오늘은 뭘 잘못먹었는지 배가 고프다.</p><p>근데 오늘 축구해서 그건 좋다!</p><p>오늘은 뭘 잘못먹었는지 배가 고프다.</p><p>근데 오늘 축구해서 그건 좋다!</p>",
        emotions: ["외로운"],
        reactions: {},
      },
      {
        id: "6",
        date: "2024.04.9",
        title: "설레는 하루",
        photos: ["https://source.unsplash.com/random/48x48"],
        content:
          "<p>오늘은 뭘 잘못먹었는지 배가 고프다.</p><p>근데 오늘 축구해서 그건 좋다!</p><p>오늘은 뭘 잘못먹었는지 배가 고프다.</p><p>근데 오늘 축구해서 그건 좋다!</p>",
        emotions: ["설레는"],
        reactions: {},
      },
      {
        id: "7",
        date: "2024.04.10",
        title: "뿌듯한 하루",
        photos: ["https://source.unsplash.com/random/48x48"],
        content:
          "<p>오늘은 뭘 잘못먹었는지 배가 고프다.</p><p>근데 오늘 축구해서 그건 좋다!</p><p>오늘은 뭘 잘못먹었는지 배가 고프다.</p><p>근데 오늘 축구해서 그건 좋다!</p>",
        emotions: ["뿌듯한"],
        reactions: {},
      },
    ] as any;
  };

  const { data: myDiaries = [] } = useQuery({
    queryKey: [QUERY_KEY.MY_DIARY],
    queryFn: fetchDiary,
  });

  return { myDiaries };
};
