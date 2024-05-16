import axios from "axios";
import { useInfiniteQuery } from "@tanstack/react-query";
import { MusicList } from "@/shared/types";

export const useGetMusics = ({ value }: { value: string }) => {
  const fetchMusics = async ({
    value,
    page,
  }: {
    value: string;
    page: number;
  }) => {
    try {
      const response = await axios.get(
        `http://ws.audioscrobbler.com/2.0/?method=album.search&format=json`,
        {
          params: {
            album: value,
            api_key: import.meta.env.VITE_LAST_FM_API_KEY,
            page: page,
          },
        },
      );

      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const { data, hasNextPage, fetchNextPage, isFetching } =
    useInfiniteQuery<MusicList>({
      queryKey: ["musics", value],
      queryFn: ({ pageParam = 1 }) =>
        fetchMusics({ value, page: pageParam as number }),
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage.results.length < 30) {
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
    musics: data?.pages
      .flatMap((page) => page.results)
      .flatMap((result) => result.albummatches.album),
    handleFetchNextPage,
    isFetching,
  };
};
