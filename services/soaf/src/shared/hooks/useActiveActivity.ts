import { Stack } from "@stackflow/core";

export const useActiveActivity = (stack: Stack) => {
  const activeActivity = stack.activities.find(
    (activity) => activity.isActive,
  )!;
  const isBottomTabAcitivity = ["DiaryCalendar", "DiaryStats", "Chat"].includes(
    activeActivity.name,
  );

  return { activeActivity, isBottomTabAcitivity };
};
