import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const useGetMusics = ({ value }: { value: string }) => {
  const fetchMusics = async (value: string) => {
    try {
      const response = await axios.get(
        `http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${import.meta.env.VITE_LAST_FM_API_KEY}&artist=백예린&track=${value}&format=json`,
      );

      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const { data: musics } = useQuery({
    queryKey: ["musics", value],
    queryFn: () => fetchMusics(value),
    staleTime: Infinity,
    enabled: value.length > 0,
  });

  return {
    musics,
  };
};
