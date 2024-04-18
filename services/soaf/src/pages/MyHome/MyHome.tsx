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

  const [positions, setPositions] = useState<{
    [key: string]: { x: number; y: number };
  }>({});

  const [prevPositions, setPrevPositions] = useState<{
    [key: string]: { x: number; y: number };
  }>({});

  return (
    <PageLayout
      header={{
        title: isEdit ? <span className="head6b">방 꾸미기</span> : null,
        leftSlot: isEdit ? (
          <button
            className="w-[12px] h-[12px]"
            onClick={() => {
              setIsEdit(false);
              Object.keys(prevPositions).forEach((key) => {
                setPositions((prevPositions) => ({
                  ...prevPositions,
                  [key]: prevPositions[key],
                }));
              });
            }}
          >
            <img src={x} alt="x-icon" className="full_img_cover" />
          </button>
        ) : null,
        rightSlot: isEdit ? (
          <button
            className="w-[24px] h-[24px]"
            onClick={() => setIsEdit(false)}
          >
            <img src={check} alt="check-icon" className="full_img_cover" />
          </button>
        ) : (
          <HeaderActionButtons onBrushClick={() => setIsEdit(true)} />
        ),
        headerClass: "bg-transparent",
      }}
      className={cn(["relative", backgroundClass])}
    >
      <InteriorItems
        isEdit={isEdit}
        isAfter6PM={isAfter6PM}
        positions={positions}
        setPositions={setPositions}
        setPrevPositions={setPrevPositions}
      />
      <Soaf className="z-10 w-1/2 absolute_center" />
      <DeskAndChair
        isAfter6PM={isAfter6PM}
        className="absolute bottom-0 left-0 right-0 w-full max-w-[440px] h-[60%] my-0 mx-auto"
      />
      {isEdit === false && <UpButton onClick={() => console.log("hi")} />}
    </PageLayout>
  );
};

export default MyHome;
