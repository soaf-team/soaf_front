import search from "@/assets/icons/input/search.svg";
import { Flex } from "@soaf/react-components-layout";

import {
  PlusButton,
  Input,
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose,
} from "@/shared/components";

import { useState } from "react";
import { useDebounce } from "@/shared/hooks";
import { useGetMusics } from "../queries";

interface Props {
  type: "music" | "movie" | "book" | "youtube";
}

export const MyHomeDrawer = ({ type }: Props) => {
  const [inputValue, setInputValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearch, setIsSearch] = useState(false);

  const { debounced: debouncedInputChange } = useDebounce((value: string) => {
    setSearchQuery(value);
  });

  const { musics } = useGetMusics({ value: searchQuery });

  console.log(musics);

  const placeholder = {
    music: "좋아하는 음악을 검색해보세요",
    movie: "좋아하는 영화를 검색해보세요",
    book: "좋아하는 도서를 검색해보세요",
    youtube: "유튜브 링크를 등록해보세요",
  } as const;

  const handleInputChange = (value: string) => {
    setInputValue(value);
    debouncedInputChange(value);
    setIsSearch(value.length > 0);
  };

  return (
    <Drawer>
      <DrawerTrigger>
        <PlusButton />
      </DrawerTrigger>
      <DrawerContent>
        <Flex direction="column" gap={14} align="center">
          <Flex gap={13} align="center" className="w-full">
            <Input
              variant="box"
              leftSlot={
                <img src={search} alt="search" width={24} height={24} />
              }
              value={inputValue}
              placeholder={placeholder[type]}
              onChange={handleInputChange}
              isResetButton={true}
              className="flex-1"
            />
            {isSearch === false ? (
              <DrawerClose>
                <span className="label2">취소</span>
              </DrawerClose>
            ) : (
              <button className="label2" onClick={() => {}}>
                검색
              </button>
            )}
          </Flex>

          <DrawerClose>
            {musics !== undefined && (
              <img
                src={musics.track.album.image[3]["#text"]}
                alt="dd"
                width={100}
                height={100}
              />
            )}
          </DrawerClose>
        </Flex>
      </DrawerContent>
    </Drawer>
  );
};
