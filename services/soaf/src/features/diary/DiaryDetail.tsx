import { DiaryContent, DiaryReaction } from "./components";
import { useDiaryQuery } from "./queries";

type DiaryDetailProps = {
  diaryId: string;
};

export const DiaryDetail = ({ diaryId }: DiaryDetailProps) => {
  const { diary } = useDiaryQuery({ diaryId });

  const reactions = diary!.reactions;

  return (
    <div className="flex flex-col justify-between h-full">
      {diary && <DiaryContent diary={diary} />}
      <DiaryReaction reactions={reactions} />
    </div>
  );
};
