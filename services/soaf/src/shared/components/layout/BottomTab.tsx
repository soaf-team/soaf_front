import DiaryCalendar from "@assets/icons/bottom-tab/diaryCalendar.svg";
import DiaryCalendarActive from "@assets/icons/bottom-tab/diaryCalendarActive.svg";
import DiaryStats from "@assets/icons/bottom-tab/diaryStats.svg";
import DiaryStatsActive from "@assets/icons/bottom-tab/diaryStatsActive.svg";
import SoafExplore from "@assets/icons/bottom-tab/soafExplore.svg";
import SoafExploreActive from "@assets/icons/bottom-tab/soafExploreActive.svg";
import Chat from "@assets/icons/bottom-tab/chat.svg";
import ChatActive from "@assets/icons/bottom-tab/chatActive.svg";
import MyHome from "@assets/icons/bottom-tab/myHome.svg";
import MyHomeActive from "@assets/icons/bottom-tab/myHomeActive.svg";

import { ACTIVITY } from "@shared/constants/activity";
import { Stack } from "@stackflow/core";
import { useActiveActivity } from "@shared/hooks";
import { useBottomTabStore } from "@/shared/store";
import { useFlow } from "@/pages/stackflow";

export const BottomTab = ({ stack }: { stack: Stack }) => {
  const { replace } = useFlow();
  const { isBottomTabAcitivity, activeActivity } = useActiveActivity(stack);
  const { isOpen } = useBottomTabStore();

  const handleTabClick = (activity: string) => {
    if (activity === activeActivity.name) {
      return;
    }

    // @ts-ignore
    replace(activity, {}, { animate: false });
  };

  if (!isBottomTabAcitivity) {
    return null;
  }

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 h-[83px] rounded-t-[24px]
    flex items-center justify-around bg-white shadow-bottomTab
    px-[18px] pb-[12px] z-[1000] max-w-window mx-auto
    transition-transform duration-500 ease-in-out
    ${isOpen ? "translate-y-0" : "translate-y-full"}`}
    >
      {TABS.map((tab) => {
        const Icon =
          tab.activity === activeActivity.name ? tab.activeIcon : tab.icon;

        return (
          <button
            className="w-[67px] h-[40px]"
            key={tab.activity}
            onClick={() => handleTabClick(tab.activity)}
          >
            <img src={Icon} alt={tab.activity} />
          </button>
        );
      })}
    </div>
  );
};

export const TABS = [
  {
    icon: DiaryCalendar,
    activeIcon: DiaryCalendarActive,
    activity: ACTIVITY.DIARY_CALENDAR,
  },
  {
    icon: DiaryStats,
    activeIcon: DiaryStatsActive,
    activity: ACTIVITY.DIARY_STATS,
  },
  {
    icon: SoafExplore,
    activeIcon: SoafExploreActive,
    activity: ACTIVITY.SOAF_EXPLORE,
  },
  {
    icon: Chat,
    activeIcon: ChatActive,
    activity: ACTIVITY.CHAT,
  },
  {
    icon: MyHome,
    activeIcon: MyHomeActive,
    activity: ACTIVITY.MY_HOME,
  },
] as const;
