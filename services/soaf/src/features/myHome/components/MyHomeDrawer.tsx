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

interface Props {
  type: "music" | "movie" | "book" | "youtube";
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  list: React.ReactNode;
}

export const MyHomeDrawer = ({ type, setSearchQuery, list }: Props) => {
  const [inputValue, setInputValue] = useState("");
  const [isSearch, setIsSearch] = useState(false);

  const { debounced: debouncedInputChange } = useDebounce((value: string) => {
    setSearchQuery(value);
  });

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
      <DrawerContent className="overflow-auto min-h-[92%] max-h-[92%] after:content-none">
        <Flex direction="column">
          <Flex
            gap={13}
            align="center"
            className="sticky py-[20px] top-0 bg-white"
          >
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

          <div>{list}</div>
        </Flex>
      </DrawerContent>
    </Drawer>
  );
};
