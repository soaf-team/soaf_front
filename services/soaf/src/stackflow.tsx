import { stackflow } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { basicUIPlugin } from "@stackflow/plugin-basic-ui";

import { BottomTab, Toaster } from "./shared/components";
import { DiaryCalendar } from "./pages/DiaryCalendar";
import { DiaryStats } from "./pages/DiaryStats";
import { SoafExplore } from "./pages/SoafExplore";
import { Chat } from "./pages/Chat";
import { MyHome } from "./pages/MyHome";

export const { Stack, useFlow, useStepFlow } = stackflow({
  transitionDuration: 350,
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: "android",
    }),
    () => {
      return {
        key: "my-plugin",
        render({ stack }) {
          return (
            <div className="my-rendering">
              {stack.render().activities[0].render()}
              <BottomTab stack={stack} />
              <Toaster stack={stack} />
            </div>
          );
        },
      };
    },
  ],
  activities: {
    DiaryCalendar,
    DiaryStats,
    SoafExplore,
    Chat,
    MyHome,
  },
  initialActivity: () => "DiaryCalendar",
});
