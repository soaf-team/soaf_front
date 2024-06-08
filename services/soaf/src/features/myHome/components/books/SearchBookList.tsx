import { useState } from "react";
import { useGetBooks } from "../../queries";

import { Document } from "@/shared/types";
import { SearchInput } from "../SearchInput";
import { BookItem } from "./BookItem";

interface Props {
  onNextStep: () => void;
  setBookId: React.Dispatch<React.SetStateAction<string>>;
}

export function SearchBookList({ onNextStep, setBookId }: Props) {
  const [searchQuery, setSearchQuery] = useState("");
  const { books } = useGetBooks({ value: searchQuery });

  const handleItemClick = (book: Document) => {
    setBookId(book.isbn);
    onNextStep();
  };

  return (
    <>
      <SearchInput type="book" setSearchQuery={setSearchQuery} />

      {books?.map((book: Document) => (
        <BookItem
          key={book.isbn}
          book={book}
          onClick={() => handleItemClick(book)}
        />
      ))}
    </>
  );
}
