import { useMusicStore } from "../../store";

import { Flex } from "@soaf/react-components-layout";
import { Header, BackButton } from "@/shared/components";

import { MusicItem } from "./MusicItem";
import { ReviewSection } from "../ReviewSection";

interface Props {
  onPrevStep: () => void;
}

export const SetMusicInfo = ({ onPrevStep }: Props) => {
  const { music } = useMusicStore();

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
        <h1 className="head6b">나의 음악</h1>
      </Header>

      <Flex direction="column" gap={32} className="pt-[58px]">
        <MusicItem
          type="detail"
          url={music.url}
          name={music.name}
          artist={music.artist}
          image={music.image[3]["#text"]}
          review={music.review}
        />

        <ReviewSection type="music" />
      </Flex>
    </>
  );
};
