import { DiaryContent, DiaryReaction } from "./components";
import { useDiaryQuery } from "./queries";

type DiaryDetailProps = {
  diaryId: string;
};

export function DiaryDetail({ diaryId }: DiaryDetailProps) {
  const { diary } = useDiaryQuery({ diaryId });

  const { reactions } = diary!;

  return (
    <div className="flex flex-col justify-between h-full">
      {diary && <DiaryContent diary={diary} isImageClickable />}
      <DiaryReaction reactions={reactions} />
    </div>
  );
}
