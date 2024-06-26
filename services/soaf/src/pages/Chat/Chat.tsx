import { PageLayout } from "@shared/components";
import SpeechBubble from "@shared/components/ui/SpeechBubble";

const DUMMY_CHAT = [
  { message: "안녕", sentAt: new Date().toISOString(), userId: 1 },
  { message: "안녕하세요", sentAt: new Date().toISOString(), userId: 1 },
  { message: "테스트", sentAt: new Date().toISOString(), userId: 1 },
  {
    message:
      "네 안녕하세요네 안녕하세요네 안녕하세요네 안녕하세요네 안녕하세요네 안녕하세요네 안녕하세요네 안녕하세요네 안녕하세요네 안녕하세요네 안녕하세요네 안녕하세요네 안녕하세요네 안녕하세요네 안녕하세요네 안녕하세요네 안녕하세요네 안녕하세요네 안녕하세요네 안녕하세요네 안녕하세요네 안녕하세요네 안녕하세요네 안녕하세요",
    nickname: "정훈",
    sentAt: new Date().toISOString(),
    userId: 2,
  },
  {
    message: "반갑네요",
    nickname: "정훈",
    sentAt: new Date().toISOString(),
    userId: 2,
  },
  {
    message:
      "까불지 마세요 까불지 마세요까불지 마세요까불지 마세요까불지 마세요까불지 마세요까불지 마세요까불지 마세요까불지 마세요까불지 마세요까불지 마세요까불지 마세요까불지 마세요까불지 마세요까불지 마세요까불지 마세요까불지 마세요까불지 마세요까불지 마세요까불지 마세요",
    sentAt: new Date().toISOString(),
    userId: 1,
  },
];

const CUSTOMER_ID = 1;

const Chat = () => {
  return (
    <PageLayout
      header={{
        title: "",
        leftSlot: null,
        rightSlot: "아이콘",
      }}
    >
      {DUMMY_CHAT.map((data, index, arr) => {
        const isMine = data.userId === CUSTOMER_ID;
        const isFirst = index === 0 || arr[index - 1].userId !== data.userId;

        const currentMessage = arr[index];
        const nextMessage = arr[index + 1];
        const isGap =
          isFirst ||
          index === arr.length - 1 ||
          nextMessage.userId === currentMessage.userId
            ? false
            : true;

        const isLast = !nextMessage || nextMessage.userId !== data.userId;

        return (
          <SpeechBubble
            key={index}
            message={data.message}
            sentAt={data.sentAt}
            nickname={data.nickname}
            variant={isMine ? "isMine" : "isOpponent"}
            order={
              isFirst ? (isMine ? "isFirst" : "isOpponentFirst") : undefined
            }
            isLast={isLast}
            isGap={isGap}
          />
        );
      })}
    </PageLayout>
  );
};

export default Chat;
