import React, { useState } from "react";
import { useGetYoutube } from "../../queries";

import { Youtube } from "@/shared/types";
import { SearchInput } from "../SearchInput";
import { YoutubeItem, YoutubeItemProps } from "./YoutubeItem";
import { NonDataFallback } from "@/shared/components";

interface Props {
  onNextStep: () => void;
  setYoutubeInfo: React.Dispatch<React.SetStateAction<YoutubeItemProps>>;
}

export const SearchYoutubeList = ({ onNextStep, setYoutubeInfo }: Props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { youtube } = useGetYoutube({ videoId: searchQuery.split("v=")[1] });

  const handleItemClick = (video: Youtube["items"][0]) => {
    setYoutubeInfo({
      title: video.snippet.title,
      channelTitle: video.snippet.channelTitle,
      publishedAt: video.snippet.publishedAt,
      thumbnail: video.snippet.thumbnails.medium.url,
    });
    onNextStep();
  };

  return (
    <>
      <SearchInput type="youtube" setSearchQuery={setSearchQuery} />

      {youtube === undefined ? (
        <div className="w-full absolute_center">
          <NonDataFallback>
            <p className="font-medium body2 text-gray300">
              검색 결과가 없습니다.
            </p>
            <p className="font-medium body2 text-gray300">
              링크가 정확한지 확인해주세요.
            </p>
          </NonDataFallback>
        </div>
      ) : (
        <YoutubeItem
          key={youtube?.id}
          type="search"
          onClick={() => handleItemClick(youtube)}
          youtube={
            youtube && {
              title: youtube.snippet.title,
              channelTitle: youtube.snippet.channelTitle,
              publishedAt: youtube.snippet.publishedAt,
              thumbnail: youtube.snippet.thumbnails.medium.url,
            }
          }
        />
      )}
    </>
  );
};
