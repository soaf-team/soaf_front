import { Flex } from "@soaf/react-components-layout";
import { EmotionSticker } from "@/shared/components";

function EmotionGroup() {
  return (
    <Flex direction="column" gap={8} align="center" justify="center">
      <Flex direction="row" gap={4}>
        <EmotionSticker emotion="편안한" />
        <EmotionSticker emotion="피곤한" />
      </Flex>
      <Flex direction="row" gap={60}>
        <EmotionSticker emotion="슬픈" />
        <EmotionSticker emotion="행복한" />
      </Flex>
      <Flex direction="row" gap={4}>
        <EmotionSticker emotion="설레는" />
        <EmotionSticker emotion="화난" />
      </Flex>
    </Flex>
  );
}

export default EmotionGroup;
