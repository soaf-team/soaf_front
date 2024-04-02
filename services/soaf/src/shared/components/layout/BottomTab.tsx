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
import { useFlow } from "@src/stackflow";
import { useActivity, useStack } from "@stackflow/react";
import { ACTIVITY } from "@src/shared/constants/activity";

const TABS = [
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
];

export const BottomTab = () => {
  const activity = useActivity();
  const { push } = useFlow();

  const currentActivityName = activity?.name;
  const mainTab = TABS.find((tab) => tab.activity === currentActivityName);

  const handleTabClick = (activity: string) => {
    push(activity, {}, { animate: false });
  };

  if (!mainTab) {
    return null;
  }

  return (
    <div
      className="fixed bottom-0 left-0 right-0 h-[83px] rounded-t-[24px]
                    flex items-center justify-around bg-white shadow-2xl
                    px-[18px] pb-[12px]
                    "
    >
      {TABS.map((tab) => {
        const Icon =
          tab.activity === currentActivityName ? tab.activeIcon : tab.icon;

        return (
          <button
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
