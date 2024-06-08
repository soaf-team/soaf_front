import { Flex } from "@soaf/react-components-layout";
import { Header, BackButton } from "@/shared/components";

import { ReviewSection } from "../ReviewSection";
import { YoutubeItem, YoutubeItemProps } from "./YoutubeItem";

interface Props {
  onPrevStep: () => void;
  youtubeInfo: YoutubeItemProps;
}

export function SetYoutubeInfo({ onPrevStep, youtubeInfo }: Props) {
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

      <Flex direction="column" gap={32} className="pt-[58px]">
        <YoutubeItem type="search" youtube={youtubeInfo} />

        <ReviewSection
          title="감상평"
          placeholder="영상을 본 후 어떤 생각이 드셨나요?"
          maxLength={2000}
        />
      </Flex>
    </>
  );
}
