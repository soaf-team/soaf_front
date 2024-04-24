import { stackflow } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { basicUIPlugin } from "@stackflow/plugin-basic-ui";
import { historySyncPlugin } from "@stackflow/plugin-history-sync";

import { BottomTab, Toaster } from "../shared/components";
import {
  DiaryCalendar,
  DiaryDetailPage,
  DiaryListPage,
  NewDiaryPage,
  NewDiaryStep1,
  NewDiaryStep2,
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
        /*** 메인 탭 ***/
        DiaryCalendar: "/diary-calendar",
        DiaryStats: "/diary-stats",
        SoafExplore: "/soaf-explore",
        Chat: "/chat",
        MyHome: "/my-home",

        /*** 인증 ***/
        Login: "/auth/login",
        Terms: "/auth/terms",
        NickName: "/auth/nick-name",

        /*** 다이어리 ***/
        DiaryDetailPage: "/diary-detail/:diaryId",
        DiaryListPage: "/diary-list",
        // 다이어리 작성
        NewDiaryStep1: "/new-diary/step1",
        NewDiaryStep2: "/new-diary/step2",
        NewDiaryPage: "/new-diary/form",

        /*** 유저 ***/
        MatchedUser: "/matched-user",
        UserHome: "/user-home/:userId",
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
    /*** 메인 탭 ***/
    DiaryCalendar,
    DiaryStats,
    SoafExplore,
    Chat,
    MyHome,

    /*** 인증 ***/
    Login,
    Terms,
    NickName,

    /*** 다이어리 ***/
    DiaryListPage,
    DiaryDetailPage,
    // 다이어리 작성
    NewDiaryStep1,
    NewDiaryStep2,
    NewDiaryPage,

    /*** 유저 ***/
    MatchedUser,
    UserHome,
  },
  initialActivity: () => "DiaryCalendar",
});
