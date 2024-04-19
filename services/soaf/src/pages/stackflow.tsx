import { stackflow } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { basicUIPlugin } from "@stackflow/plugin-basic-ui";
import { historySyncPlugin } from "@stackflow/plugin-history-sync";

import { BottomTab, Toaster } from "../shared/components";
import {
  DiaryCalendar,
  DiaryDetail,
  NewDiary,
  DiaryListPage,
} from "./DiaryCalendar";
import { DiaryStats } from "./DiaryStats";
import { SoafExplore, MatchedUser } from "./SoafExplore";
import { Chat } from "./Chat";
import { MyHome, UserHome } from "./MyHome";
import { Login, Terms, NickName } from "./Login";

export const { Stack, useFlow, useStepFlow } = stackflow({
  transitionDuration: 300,
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: "android",
      rootClassName: "screen",
    }),
    historySyncPlugin({
      routes: {
        DiaryCalendar: "/diary-calendar",
        DiaryStats: "/diary-stats",
        SoafExplore: "/soaf-explore",
        Chat: "/chat",
        MyHome: "/my-home",
        UserHome: "/user-home/:userId",
        Login: "/auth/login",
        Terms: "/auth/terms",
        NickName: "/auth/nick-name",
        DiaryDetail: "/diary-detail/:diaryId",
        DiaryListPage: "/diary-list",
        NewDiary: "/new-diary",
        MatchedUser: "/matched-user",
      },
      fallbackActivity: () => "DiaryCalendar",
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
    DiaryListPage,
    NewDiary,
    MatchedUser,
    UserHome,
  },
  initialActivity: () => "DiaryCalendar",
});
