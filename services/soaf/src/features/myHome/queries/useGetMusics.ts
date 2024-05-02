import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { MusicList } from "@/shared/types";

export const useGetMusics = ({ value }: { value: string }) => {
  const fetchMusics = async (value: string) => {
    try {
      const response = await axios.get(
        `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${value}&api_key=${import.meta.env.VITE_LAST_FM_API_KEY}&format=json`,
      );

      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const { data: musics = [] as MusicList[] } = useQuery({
    queryKey: ["musics", value],
    queryFn: () => fetchMusics(value),
    staleTime: Infinity,
    enabled: value.length > 0,
    select: (data) => data.results.trackmatches.track,
  });

  return {
    musics,
  };
};
