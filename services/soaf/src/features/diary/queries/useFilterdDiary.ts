import { useQuery } from "@tanstack/react-query";

import { axiosBase } from "@/shared/apis";
import { Diary } from "@/shared/types";

export const useFilterdDiary = ({
  isPrivate,
  date,
}: {
  isPrivate?: string;
  date: string;
}) => {
  const fetchDiary = async () => {
    const response = await axiosBase.get(`/diary/${isPrivate}/${date}`);
    return response.data;
  };

  const { data: diaries = [] as Diary[] } = useQuery({
    queryKey: ["myDiary", isPrivate, date],
    queryFn: fetchDiary,
    enabled: isPrivate !== undefined,
  });

  return { diaries };
};
