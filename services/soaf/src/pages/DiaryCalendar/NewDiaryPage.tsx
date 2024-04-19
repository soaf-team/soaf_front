/* eslint-disable react/prop-types */
import { ActivityComponentType } from "@stackflow/react";

import { PageLayout } from "@/shared/components";
import x from "@assets/icons/header/x.svg";
import { useFlow } from "../stackflow";
import { DailyRaitingWidget } from "@/features/diary/components";

type NewDiaryProps = {
  step: number;
};

const NewDiaryPage: ActivityComponentType<NewDiaryProps> = ({ params }) => {
  const { step = 1 } = params;

  return (
    <PageLayout
      header={{
        rightSlot: <RightIcon />,
      }}
    >
      {step === 1 && <DailyRaitingWidget />}
    </PageLayout>
  );
};

export default NewDiaryPage;

const RightIcon = () => {
  const { pop } = useFlow();

  return (
    <button onClick={pop}>
      <img src={x} alt="x" className="w-[12px] h-[12px]" />
    </button>
  );
};
