import search from "@/assets/icons/input/search.svg";

import { useState } from "react";

import { DrawerClose, Input } from "@/shared/components";
import { Flex } from "@soaf/react-components-layout";

interface Props {
  type: "music" | "movie" | "book" | "youtube";
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchInput = ({ type, setSearchQuery }: Props) => {
  const placeholder = {
    music: "좋아하는 음악을 검색해보세요",
    movie: "좋아하는 영화를 검색해보세요",
    book: "좋아하는 도서를 검색해보세요",
    youtube: "유튜브 링크를 등록해보세요",
  } as const;

  const [isSearch, setIsSearch] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (value: string) => {
    setInputValue(value);
    setIsSearch(value.length > 0);
  };

  const handleSearchSubmit = () => {
    setSearchQuery(inputValue);
  };

  return (
    <Flex gap={13} align="center" className="sticky py-[20px] top-0 bg-white">
      <Input
        variant="box"
        leftSlot={<img src={search} alt="search" width={24} height={24} />}
        value={inputValue}
        placeholder={placeholder[type]}
        onChange={handleInputChange}
        isResetButton={true}
        className="flex-1"
      />
      {isSearch === false ? (
        <DrawerClose>
          <button type="button" className="label2">
            취소
          </button>
        </DrawerClose>
      ) : (
        <button type="button" className="label2" onClick={handleSearchSubmit}>
          검색
        </button>
      )}
    </Flex>
  );
};
