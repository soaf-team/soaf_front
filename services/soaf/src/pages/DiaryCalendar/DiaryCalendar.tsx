import { PageLayout } from "@shared/components";
import { Flex } from "@soaf/react-components-layout";
import { useToast } from "@shared/hooks";
import Hamburger from "@assets/icons/header/hamburger.svg";
import { EmotionButton } from "@/features/diary/components/emotion/EmotionButton";
import { useState } from "react";
import { Emotion } from "@/features/diary/components";
import { Input } from "@/shared/components/ui/Input";
import EmotionSticker from "@/shared/components/ui/EmotionSticker";

const DiaryCalendar = () => {
  const { toast } = useToast();
  const [selectedEmotions, setSelectedEmotions] = useState<Emotion[]>([
    "행복한",
    "기분좋은",
    "슬픈",
    "불안한",
    "화난",
    "외로운",
  ]);

  const [value, setValue] = useState("");

  return (
    <PageLayout
      header={{
        title: "",
        leftSlot: null,
        rightSlot: (
          <img
            src={Hamburger}
            alt="hamburger"
            onClick={() => toast({ description: "Hamburger clicked" })}
          />
        ),
      }}
    >
      <Flex
        direction="column"
        gap={10}
        justify="center"
        align="center"
        className="h-full"
      >
        <div className="grid grid-cols-2 gap-y-2 gap-x-3">
          {EMOTIONS.map((emotion) => (
            <EmotionButton
              key={emotion}
              emotion={emotion}
              selected={selectedEmotions.includes(emotion)}
              onClick={(emotion) =>
                setSelectedEmotions((prev) =>
                  prev.includes(emotion)
                    ? prev.filter((prevEmotion) => prevEmotion !== emotion)
                    : [...prev, emotion],
                )
              }
            />
          ))}
        </div>

        <Flex direction="row">
          {selectedEmotions.map((emotion, index) => (
            <EmotionSticker
              key={emotion}
              emotion={emotion}
              size="sm"
              style={{
                transform: `translateX(${index * -5}px)`,
                zIndex: selectedEmotions.length - index,
              }}
            />
          ))}
        </Flex>

        <Input
          placeholder="직접 입력할게요"
          value={value}
          onChange={(value) => setValue(value)}
          isResetButton
        />
      </Flex>
    </PageLayout>
  );
};

export default DiaryCalendar;

const EMOTIONS: Emotion[] = [
  "행복한",
  "기분좋은",
  "즐거운",
  "설레는",
  "뿌듯한",
  "편안한",
  "피곤한",
  "외로운",
  "슬픈",
  "우울한",
  "불안한",
  "화난",
];
