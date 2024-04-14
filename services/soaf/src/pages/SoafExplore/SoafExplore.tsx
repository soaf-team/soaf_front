import { useFlow } from "@/pages/stackflow";
import { useCalendar } from "@/features/diary/hooks";
import { useDiaryQuery } from "@/shared/hooks";
import triangle from "@assets/icons/triangle.svg";
import { YearMonthSelectDrawer, DiaryCard } from "@/features/diary/components";
import { PageLayout, Button } from "@shared/components";
import { IconBack } from "@stackflow/plugin-basic-ui";
import { Flex } from "@soaf/react-components-layout";
import { Drawer, DrawerTrigger } from "@/shared/components/dialog";
import { Diary } from "@/shared/types";

const SoafExplore = () => {
  const { replace } = useFlow();
  const { currentDate, handleYearMonthChange } = useCalendar();
  const { myDiaries } = useDiaryQuery();

  return (
    <PageLayout
      header={{
        title: "",
        leftSlot: (
          <div onClick={() => replace("DiaryCalendar", {}, { animate: false })}>
            <IconBack />
          </div>
        ),
        rightSlot: null,
      }}
      className="overflow-y-auto"
    >
      <Flex
        direction="column"
        align="center"
        justify="center"
        className="overflow-hidden"
      >
        <Flex direction="column" gap={8} className="mb-[22px]">
          <p className="text-[20px] leading-[32px] font-bold">소프 탐색</p>

          <Flex direction="column" className="font-normal label3 text-gray800">
            <p>원하는 일기를 고르고 탐색하기 버튼을 누르면</p>
            <p>비슷한 이야기를 가진 상대의 홈을 탐색할 수 있어요.</p>
          </Flex>
        </Flex>

        <Drawer>
          <DrawerTrigger className="mb-[24px]">
            <Flex align="center" gap={4}>
              <h2 className="label1sb">
                {currentDate.getFullYear()}.
                {currentDate.getMonth() + 1 < 10
                  ? `0${currentDate.getMonth() + 1}`
                  : `${currentDate.getMonth() + 1}`}
              </h2>
              <img src={triangle} alt="triangle" className="w-[8px] h-[5px]" />
            </Flex>
          </DrawerTrigger>
          <YearMonthSelectDrawer
            currentDate={currentDate}
            handleYearMonthChange={handleYearMonthChange}
          />
        </Drawer>

        <Flex direction="column" gap={12}>
          {myDiaries.map((diary: Diary, index: number) => (
            <DiaryCard
              key={diary.id}
              diary={diary}
              isCheckable
              className={`${index === myDiaries.length - 1 ? "mb-[100px]" : ""}`}
            />
          ))}
        </Flex>

        <div className="bg-white h-[80px] pt-[8px] px-[18px] fixed left-0 right-0 bottom-0 z-50">
          <Button>소프 탐색</Button>
        </div>
      </Flex>
    </PageLayout>
  );
};

export default SoafExplore;
