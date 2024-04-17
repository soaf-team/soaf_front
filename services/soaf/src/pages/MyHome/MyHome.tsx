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
import up from "@/assets/icons/my-home/up.svg";

import { cn } from "@/shared/utils";
import { PageLayout } from "@shared/components";
import { HeaderActionButtons } from "@/features/myHome/components";
import { Flex } from "@soaf/react-components-layout";

const MyHome = () => {
  const isAfter6PM = dayjs().hour() >= 18;
  const backgroundClass = isAfter6PM ? "bg-[#BECFDC]" : "bg-[#D3E6F4]";

  return (
    <PageLayout
      header={{
        rightSlot: <HeaderActionButtons />,
        headerClass: "bg-transparent",
      }}
      className={cn(["relative", backgroundClass])}
    >
      {/* interior img */}
      <div className="absolute w-1/4 top-10">
        <img src={books} alt="books" className="full_img_contain" />
      </div>

      <div className="absolute w-1/5 left-[45%]">
        <img src={picture} alt="picture" className="full_img_contain" />
      </div>

      <div className="absolute w-1/4 top-14 right-4">
        <img
          src={isAfter6PM ? windowNight : windowDay}
          alt="window"
          className="full_img_contain"
        />
      </div>

      <div className="absolute w-1/5 top-[15%] left-[10%]">
        <img src={music} alt="music" className="full_img_contain" />
      </div>

      <div className="absolute w-[15%] left-1/2 top-1/4">
        <img src={youtube} alt="youtube" className="full_img_contain" />
      </div>

      <div className="absolute z-10 w-1/4 top-1/3">
        <img src={movie} alt="movie" className="full_img_contain" />
      </div>

      <div className="absolute z-10 top-[35%] right-1/4 w-1/10">
        <img src={plant} alt="plant" className="full_img_contain" />
      </div>

      <div className="absolute right-[5%] top-1/3 z-10">
        <img src={sofa} alt="sofa" className="full_img_contain" />
      </div>

      {/* bottom soaf img */}
      <div className="absolute bottom-0 left-0 right-0 w-full max-w-[440px] h-[60%] my-0 mx-auto">
        <img
          src={isAfter6PM ? mainNight : mainDay}
          alt="main-day"
          className="full_img_cover"
        />
      </div>

      {/* up button */}
      <Flex
        align="center"
        justify="center"
        className="absolute left-0 right-0 w-full bottom-10 animate-bounce"
      >
        <div className="w-[40px] h-[40px]">
          <img src={up} alt="up-icon" className="full_img_cover" />
        </div>
      </Flex>
    </PageLayout>
  );
};

export default MyHome;
