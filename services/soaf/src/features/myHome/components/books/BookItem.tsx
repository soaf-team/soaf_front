import { Flex } from "@soaf/react-components-layout";
import default_cover from "@/assets/icons/my-home/books-default.svg";

import { StarRating } from "@/shared/components";
import { Document } from "@/shared/types";

import { cn } from "@/shared/utils";

interface Props {
  type?: "search" | "set" | "detail";
  onClick?: () => void;
  book: Document;
}

export function BookItem({ type = "search", onClick, book }: Props) {
  const posterClass = cn({
    "min-w-[92px] w-[92px] h-[134px] rounded-[8px]": type === "search",
    "min-w-[85px] w-[85px] h-[124px] rounded-[8px] ": type === "set",
    "min-w-[96px] w-[96px] h-[140px] rounded-[8px]": type === "detail",
  });

  const titleClass = cn(
    {
      label2: type === "search",
      head5b: type === "set" || "detail",
    },
    "text-black",
  );

  return (
    <Flex
      direction="column"
      gap={16}
      className="border-b border-solid border-border py-[8px]"
    >
      <Flex direction="row" gap={16} onClick={onClick}>
        <div className={posterClass}>
          <img
            src={book.thumbnail || default_cover}
            alt="cover"
            className={posterClass}
          />
        </div>

        <Flex
          direction="column"
          justify={type === "search" ? "space-between" : ""}
          gap={8}
          className="py-[8px]"
        >
          <Flex direction="column" gap={8}>
            <p className={cn("line-clamp-1", titleClass)}>{book.title}</p>
            <Flex direction="column" gap={4}>
              <p className="label3 text-gray400">{book.authors[0]}</p>
              <Flex gap={4}>
                <p className="text-gray400 label4">{book.publisher}</p>

                <p className="label4 text-gray400">
                  {`(${book.datetime.split("T")[0]})`}
                </p>
              </Flex>
            </Flex>
          </Flex>
          {type === "search" && (
            <p className="line-clamp-3 body4">{book.contents}</p>
          )}
          {type === "detail" && <StarRating size={24} onChange={() => {}} />}
        </Flex>
      </Flex>
    </Flex>
  );
}
