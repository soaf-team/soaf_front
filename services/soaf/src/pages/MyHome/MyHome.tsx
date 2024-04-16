import dayjs from "dayjs";

import mainDay from "@/assets/icons/my-home/interior/main-day.svg";
import mainNight from "@/assets/icons/my-home/interior/main-night.svg";
import books from "@/assets/icons/my-home/interior/books.svg";
import picture from "@/assets/icons/my-home/interior/picture.svg";
import music from "@/assets/icons/my-home/interior/music.svg";
import youtube from "@/assets/icons/my-home/interior/youtube.svg";
import windowDay from "@/assets/icons/my-home/interior/window-day.svg";
import windowNight from "@/assets/icons/my-home/interior/window-night.svg";
import plant from "@/assets/icons/my-home/interior/plant.svg";
import sofa from "@/assets/icons/my-home/interior/sofa.svg";
import movie from "@/assets/icons/my-home/interior/movie.svg";

import { PageLayout } from "@shared/components";
import { HeaderActionButtons } from "@/features/myHome/components";

const MyHome = () => {
  const isAfter6PM = dayjs().hour() >= 18;
  const backgroundClass = isAfter6PM ? "bg-[#0F1A2A]" : "bg-[#D3E6F4]";

  return (
    <PageLayout
      header={{
        title: <span className="head6b">마이홈</span>,
        leftSlot: "back",
        rightSlot: <HeaderActionButtons />,
        headerClass: "bg-transparent",
      }}
      className={backgroundClass}
    >
      <div className="fixed bottom-0 left-0 right-0 w-full max-w-[440px] h-[60%] my-0 mx-auto">
        <img
          src={isAfter6PM ? mainNight : mainDay}
          alt="main-day"
          className="full_img_cover"
        />
      </div>
    </PageLayout>
  );
};

export default MyHome;
