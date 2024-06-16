import axios from "axios";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Books } from "@/shared/types";

interface Props {
  value: string;
}

export const useGetBooks = ({ value }: Props) => {
  const fetchBooks = async ({
    value,
    page,
  }: {
    value: string;
    page: number;
  }) => {
    try {
      const response = await axios.get(
        "https://dapi.kakao.com/v3/search/book",
        {
          params: {
            query: value,
            page: page,
          },
          headers: {
            Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_API_KEY}`,
            Accept: "application/json",
          },
        },
      );

      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const { data, hasNextPage, fetchNextPage, isFetching } =
    useInfiniteQuery<Books>({
      queryKey: ["books", value],
      queryFn: ({ pageParam = 1 }) =>
        fetchBooks({ value, page: pageParam as number }),
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage.meta.is_end) {
          return undefined;
        }

        return allPages.length + 1;
      },
      staleTime: Infinity,
      enabled: !!value,
    });

  const handleFetchNextPage = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  return {
    books: data?.pages.flatMap(page => page.documents),
    handleFetchNextPage,
    isFetching,
  };
};
