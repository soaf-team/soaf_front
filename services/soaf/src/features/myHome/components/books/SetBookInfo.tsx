import { useBookDetail } from "../../queries";

import { Flex } from "@soaf/react-components-layout";
import { Header, BackButton, StarRating } from "@/shared/components";

import { ReviewSection } from "../ReviewSection";
import { BookItem } from "./BookItem";

interface Props {
  onPrevStep: () => void;
  bookId: string;
}

export const SetBookInfo = ({ onPrevStep, bookId }: Props) => {
  const { bookInfo } = useBookDetail({
    id: bookId.split(" ")[0] || bookId.split(" ")[1],
  });

  if (!bookInfo) return null;

  return (
    <>
      <Header
        leftSlot={<BackButton onClick={onPrevStep} />}
        rightSlot={
          <button type="submit" className="label2">
            저장
          </button>
        }
      >
        <h1 className="head6b">새로운 리뷰</h1>
      </Header>

      <Flex justify="center" className="pt-[58px] pb-[16px]">
        <StarRating size={40} onChange={() => {}} />
      </Flex>

      <Flex direction="column" gap={32}>
        <BookItem type="set" book={bookInfo} />

        <ReviewSection
          title="감상평"
          placeholder="책을 읽은 후 어떤 생각이 드셨나요?"
          maxLength={2000}
        />

        <ReviewSection
          title="줄거리"
          data={bookInfo.contents}
          maxLength={500}
        />
      </Flex>
    </>
  );
};
