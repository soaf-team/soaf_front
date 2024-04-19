import dayjs from "dayjs";

import check from "@/assets/icons/my-home/header/check.svg";
import x from "@/assets/icons/header/x.svg";

import {
  DeskAndChair,
  Soaf,
  UpButton,
  HeaderActionButtons,
} from "@/features/myHome/components";
import { InteriorItems } from "@/features/myHome";
import { PageLayout } from "@shared/components";

import { useState } from "react";

import { cn } from "@/shared/utils";

const isAfter6PM = dayjs().hour() >= 18;
const backgroundClass = isAfter6PM ? "bg-[#BECFDC]" : "bg-[#D3E6F4]";

const MyHome = () => {
  const [isEdit, setIsEdit] = useState(false);

  // 인테리어 요소들의 초기 위치 (불변)
  // 추후 서버에서 받아온 좌표 값으로 적용
  // 서버에 저장된 좌표 값이 없으면, x: 0, y: 0으로 적용
  const [initialPositions] = useState<{
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
    setPositions(initialPositions);
  };

  const handleStartEdit = () => {
    setIsEdit(true);
  };

  const handleSaveEdit = () => {
    setIsEdit(false);
  };

  return (
    <PageLayout
      header={{
        title: isEdit ? <span className="head6b">방 꾸미기</span> : null,
        leftSlot: isEdit ? (
          <button className="w-[12px] h-[12px]" onClick={handleCancelEdit}>
            <img src={x} alt="x-icon" className="full_img_cover" />
          </button>
        ) : null,
        rightSlot: isEdit ? (
          <button className="w-[24px] h-[24px]" onClick={handleSaveEdit}>
            <img src={check} alt="check-icon" className="full_img_cover" />
          </button>
        ) : (
          <HeaderActionButtons onBrushClick={handleStartEdit} />
        ),
        headerClass: "bg-transparent",
      }}
      className={cn(["relative", backgroundClass])}
    >
      <InteriorItems
        isEdit={isEdit}
        isAfter6PM={isAfter6PM}
        positions={positions}
        initialPositions={initialPositions}
        setPositions={setPositions}
      />
      <Soaf className="z-10 w-1/2 absolute_center" />
      <DeskAndChair
        isAfter6PM={isAfter6PM}
        className="absolute bottom-0 left-0 right-0 w-full max-w-window h-[60%] my-0 mx-auto"
      />
      {!isEdit && <UpButton onClick={() => console.log("hi")} />}
    </PageLayout>
  );
};

export default MyHome;
