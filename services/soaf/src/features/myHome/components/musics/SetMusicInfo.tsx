import { useMusicDetail } from "../../queries";

import { Flex } from "@soaf/react-components-layout";
import { Header, BackButton } from "@/shared/components";

import { MusicItem } from "./MusicItem";
import { ReviewSection } from "../ReviewSection";

interface Props {
  onPrevStep: () => void;
  music: Record<string, string>;
}

export const SetMusicInfo = ({ onPrevStep, music }: Props) => {
  const { musicInfo } = useMusicDetail({
    name: music.name,
    artist: music.artist,
  });

  if (!musicInfo) return null;

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
        <MusicItem type="detail" music={musicInfo} />

        <ReviewSection type="music" />
      </Flex>
    </>
  );
};
