import dayjs from "dayjs";

import {
  DeskAndChair,
  Soaf,
  UpButton,
  HeaderActionButtons,
  BottomActionButtons,
  CheckButton,
} from "@/features/myHome/components";
import { InteriorItems } from "@/features/myHome";
import { PageLayout, XButton } from "@shared/components";

import { useState, useEffect } from "react";
import { useBottomTabStore } from "@/shared/store";
import { useInteriorItems } from "@/features/myHome/queries";

import { cn } from "@/shared/utils";

const isAfter6PM = dayjs().hour() >= 18;
const backgroundClass = isAfter6PM ? "bg-[#BECFDC]" : "bg-[#D3E6F4]";

const MyHome = () => {
  const { interiorItems } = useInteriorItems();
  const { isOpen, handleClose } = useBottomTabStore();

  const [isEdit, setIsEdit] = useState(false);
  const [isDraggable, setIsDraggable] = useState<{ [key: string]: boolean }>(
    {},
  );

  // 인테리어 요소들의 초기 위치 (불변)
  const [initialPositions, setInitialPositions] = useState<{
    [key: string]: { x: number; y: number };
  }>({});

  // 인테리어 요소들의 위치 (가변)
  const [positions, setPositions] = useState<{
    [key: string]: { x: number; y: number };
  }>({
    books: { x: 0, y: 0 },
    movie: { x: 0, y: 0 },
    music: { x: 0, y: 0 },
    picture: { x: 0, y: 0 },
    plant: { x: 0, y: 0 },
    sofa: { x: 0, y: 0 },
    window: { x: 0, y: 0 },
    youtube: { x: 0, y: 0 },
  });

  const handleCancelEdit = () => {
    setIsEdit(false);
    setIsDraggable({});
    setPositions(initialPositions);
  };

  const handleStartEdit = () => {
    setIsEdit(true);
    handleClose();
  };

  const handleSaveEdit = () => {
    setIsEdit(false);
    setIsDraggable({});
  };

  // 서버에서 받아온 인테리어 아이템 데이터의 위치를 초기 위치로 설정
  useEffect(() => {
    if (interiorItems.length > 0) {
      const initialPositions = interiorItems.reduce(
        (acc, item) => {
          acc[item.name] = item.position;
          return acc;
        },
        {} as { [key: string]: { x: number; y: number } },
      );

      setInitialPositions(initialPositions);
    }
  }, [interiorItems]);

  // 각 아이템들의 초기 draggable 상태 설정
  useEffect(() => {
    if (interiorItems.length > 0) {
      setIsDraggable(
        interiorItems.reduce(
          (acc, item) => {
            acc[item.name] = false;
            return acc;
          },
          {} as { [key: string]: boolean },
        ),
      );
    }
  }, [interiorItems]);

  return (
    <PageLayout
      header={{
        title: isEdit ? <span className="head6b">방 꾸미기</span> : null,
        leftSlot: isEdit ? <XButton onClick={handleCancelEdit} /> : null,
        rightSlot: isEdit ? (
          <CheckButton onClick={handleSaveEdit} />
        ) : (
          <HeaderActionButtons onBrushClick={handleStartEdit} />
        ),
        headerClass: "bg-transparent",
      }}
      className={cn(["relative", backgroundClass])}
    >
      <InteriorItems
        interiorItems={interiorItems}
        isEdit={isEdit}
        isAfter6PM={isAfter6PM}
        isDraggable={isDraggable}
        setIsDraggable={setIsDraggable}
        positions={positions}
        initialPositions={initialPositions}
        setPositions={setPositions}
      />
      <Soaf className="z-10 w-1/2 absolute_center" />
      <DeskAndChair
        isAfter6PM={isAfter6PM}
        className="absolute bottom-0 left-0 right-0 w-full max-w-window h-[60%] my-0 mx-auto"
      />
      {!isEdit && !isOpen && <UpButton />}

      {isEdit && <BottomActionButtons interiorItems={interiorItems} />}
    </PageLayout>
  );
};

export default MyHome;
