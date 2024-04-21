import { useQuery } from "@tanstack/react-query";

import { axiosBase } from "@/shared/apis";
import { QUERY_KEY } from "@/shared/constants";

export const useDiaryQueryByMonth = ({ params }: { params: string }) => {
  const fetchDiariesByMonth = async () => {
    const response = await axiosBase.get(`/diary/${params}`);
    return response.data;
  };

  const { data: diariesByMonth = [] } = useQuery({
    queryKey: [QUERY_KEY.MY_DIARY_BY_MONTH, params],
    queryFn: fetchDiariesByMonth,
  });

  return { diariesByMonth };
};
