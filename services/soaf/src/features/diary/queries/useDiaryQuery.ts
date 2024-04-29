import { useQuery, useSuspenseQuery } from "@tanstack/react-query";

// import { axiosBase } from "@/shared/apis";
import { QUERY_KEY } from "@/shared/constants";
import { Diary } from "@/shared/types";

export const useDiaryQuery = ({ diaryId }: { diaryId: string }) => {
  const fetchDiary = async (diaryId: string) => {
    // const response = await axiosBase.get("/diary");
    // return response.data;

    return {
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
        cheer: 5,
      },
    } as Diary;
  };

  const { data: diary } = useSuspenseQuery<Diary>({
    queryKey: [QUERY_KEY.DIARY, diaryId],
    queryFn: () => fetchDiary(diaryId),
  });

  return { diary };
};
