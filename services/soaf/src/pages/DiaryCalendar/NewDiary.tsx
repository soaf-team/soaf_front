import { PageLayout } from "@/shared/components";
import x from "@assets/icons/header/x.svg";
import { useFlow } from "../stackflow";

const NewDiary = () => {
  return (
    <PageLayout
      header={{
        rightSlot: <RightIcon />,
      }}
    >
      <div>일기작성</div>
    </PageLayout>
  );
};

export default NewDiary;

const RightIcon = () => {
  const { pop } = useFlow();

  return (
    <button onClick={pop}>
      <img src={x} alt="x" className="w-[12px] h-[12px]" />
    </button>
  );
};
