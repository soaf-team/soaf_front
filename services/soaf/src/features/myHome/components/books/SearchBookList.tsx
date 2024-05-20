import { useState } from "react";
import { useGetBooks } from "../../queries";
import { useObserver } from "@/shared/hooks";

import { Document } from "@/shared/types";
import { SearchInput } from "../SearchInput";
import { BookItem } from "./BookItem";
import { NonDataFallback, LoadingDots } from "@/shared/components";

interface Props {
  onNextStep: () => void;
  setBookId: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchBookList = ({ onNextStep, setBookId }: Props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { books, handleFetchNextPage, isFetching } = useGetBooks({
    value: searchQuery,
  });
  const pageRef = useObserver(() => handleFetchNextPage());

  const handleItemClick = (book: Document) => {
    setBookId(book.isbn);
    onNextStep();
  };

  return (
    <>
      <SearchInput type="book" setSearchQuery={setSearchQuery} />

      {books?.length === 0 ? (
        <div className="w-full absolute_center">
          <NonDataFallback>
            <p className="font-medium body2 text-gray300">
              {searchQuery}에 대한 검색결과가 없습니다.
            </p>
            <p className="font-medium body2 text-gray300">
              단어의 철자가 정확한지 확인해주세요.
            </p>
          </NonDataFallback>
        </div>
      ) : (
        books?.map((book: Document) => (
          <BookItem
            key={book.isbn}
            book={book}
            onClick={() => handleItemClick(book)}
          />
        ))
      )}
      {isFetching ? (
        <div className="absolute_center">
          <LoadingDots />
        </div>
      ) : (
        <div ref={pageRef} className="h-px" />
      )}
    </>
  );
};
