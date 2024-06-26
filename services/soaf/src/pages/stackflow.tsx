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
import { DiaryStatsPage } from "./DiaryStats";
import { SoafExplore, MatchedUser } from "./SoafExplore";
import { Chat } from "./Chat";
import {
  MyHome,
  MyBooks,
  MyMovie,
  MyMusic,
  MyYoutube,
  MyDiary,
  UserHome,
} from "./MyHome";
import { Login, Terms, NickName } from "./Login";
import { ImageDetailPage } from "./Common";

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
        DiaryStatsPage: "/diary-stats",
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

        /*** 마이 홈 ***/
        MyBooks: "/my-home/books",
        MyMovie: "/my-home/movie",
        MyMusic: "/my-home/music",
        MyYoutube: "/my-home/youtube",
        MyDiary: "/my-home/diary",

        /*** 기타  ***/
        ImageDetailPage: "/image-detail/:src/:alt",
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
    DiaryStatsPage,
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

    /*** 마이 홈 ***/
    MyBooks,
    MyMovie,
    MyMusic,
    MyYoutube,
    MyDiary,

    /*** 기타 ***/
    ImageDetailPage,
  },
});
