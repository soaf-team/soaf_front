import { useQuery } from "@tanstack/react-query";

import { axiosBase } from "@/shared/apis";
import { QUERY_KEY } from "@/shared/constants";

export const useDiaryQuery = () => {
  const fetchDiary = async () => {
    const response = await axiosBase("/diary");
    return response.data;
  };

  const { data: myDiaries = [] } = useQuery({
    queryKey: [QUERY_KEY.MY_DIARY],
    queryFn: fetchDiary,
  });

  return { myDiaries };
};
