import { stackflow } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { basicUIPlugin } from "@stackflow/plugin-basic-ui";

import { BottomTab, Toaster } from "../shared/components";
import { DiaryCalendar, DiaryDetail, NewDiary } from "./DiaryCalendar";
import { DiaryStats } from "./DiaryStats";
import { SoafExplore } from "./SoafExplore";
import { Chat } from "./Chat";
import { MyHome } from "./MyHome";
import { Login } from "./Login";
import { Terms } from "./Terms";
import { NickName } from "./NickName";

export const { Stack, useFlow, useStepFlow } = stackflow({
  transitionDuration: 300,
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: "android",
      rootClassName: "screen",
    }),
    () => {
      return {
        key: "my-plugin",
        render({ stack }) {
          return (
            <div className="layout">
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
    Login,
    Terms,
    NickName,
    DiaryDetail,
    NewDiary,
  },
  initialActivity: () => "Login",
});
