import dayjs from "dayjs";

import {
  Interior,
  DeskAndChair,
  Soaf,
  UpButton,
  HeaderActionButtons,
} from "@/features/myHome/components";
import { PageLayout } from "@shared/components";

import { useState } from "react";

import { cn } from "@/shared/utils";

const MyHome = () => {
  const isAfter6PM = dayjs().hour() >= 18;
  const backgroundClass = isAfter6PM ? "bg-[#BECFDC]" : "bg-[#D3E6F4]";

  const [isEdit, setIsEdit] = useState(false);

  return (
    <PageLayout
      header={{
        title: isEdit ? <span className="head6b">방 꾸미기</span> : null,
        rightSlot: <HeaderActionButtons onBrushClick={() => setIsEdit(true)} />,
        headerClass: "bg-transparent",
      }}
      className={cn(["relative", backgroundClass])}
    >
      <Interior src="books" isEdit={isEdit} className="absolute w-1/4 top-16" />
      <Interior
        src="movie"
        isEdit={isEdit}
        className="absolute z-10 w-1/4 top-1/3"
      />
      <Interior
        src="music"
        isEdit={isEdit}
        className="absolute w-1/5 top-[18%] left-[10%]"
      />
      <Interior
        src="picture"
        isEdit={isEdit}
        className="absolute w-1/5 left-[45%]"
      />
      <Interior
        src="plant"
        isEdit={isEdit}
        className="absolute z-10 top-[35%] right-1/4 w-1/10"
      />
      <Interior
        src="sofa"
        isEdit={isEdit}
        className="absolute right-[5%] top-1/3 z-10"
      />
      <Interior
        src={isAfter6PM ? "windowNight" : "windowDay"}
        isEdit={isEdit}
        className="absolute w-1/4 top-14 right-4"
      />
      <Interior
        src="youtube"
        isEdit={isEdit}
        className="absolute w-[15%] left-1/2 top-1/4"
      />
      <Soaf className="absolute left-0 right-0 z-10 w-1/2 top-1/2" />
      <DeskAndChair
        isAfter6PM={isAfter6PM}
        className="absolute bottom-0 left-0 right-0 w-full max-w-[440px] h-[60%] my-0 mx-auto"
      />
      <UpButton onClick={() => console.log("hi")} />
    </PageLayout>
  );
};

export default MyHome;
