import { useState } from "react";
import { useFlow } from "@/pages/stackflow";
import { useMatchedUserQuery } from "@/features/explore/queries";
import { PageLayout, Button } from "@/shared/components";
import { MatchedUserItem } from "@/features/explore/components";
import { IconBack } from "@stackflow/plugin-basic-ui";
import { Flex } from "@soaf/react-components-layout";
import x from "@assets/icons/header/x.svg";
import { User } from "@/shared/types";

const MatchedUser = () => {
  const { replace } = useFlow();
  const { matchedUsers } = useMatchedUserQuery();

  const [selectedUser, setSelectedUser] = useState<number | null>(null);

  const handleSelect = (id: number) => {
    setSelectedUser(prev => (prev === id ? null : id));
  };

  return (
    <PageLayout
      header={{
        leftSlot: <LeftIcon />,
        rightSlot: <RightIcon />,
      }}
    >
      <Flex direction="column" align="center" justify="center" gap={8}>
        <p className="head4b">매칭된 유저 목록</p>

        <Flex direction="column" className="body3 mb-[12px]">
          <p>원하는 유저를 선택하여</p>
          <p>취향을 탐색하고 소프를 맺어 소통해보세요!</p>
        </Flex>

        <Flex
          direction="column"
          align="center"
          justify="center"
          gap={12}
          className="w-[95%]"
        >
          {matchedUsers
            .sort((a: any, b: any) =>
              a.percent > b.percent ? -1 : a.percent < b.percent ? 1 : 0,
            )
            .map((user: User, index: number) => (
              <MatchedUserItem
                key={user.id}
                name={user.name}
                percent={user.percent}
                onClick={() => handleSelect(user.id)}
                isSelected={selectedUser === user.id}
                className={
                  index === matchedUsers.length - 1 ? "mb-[120px]" : ""
                }
              />
            ))}
        </Flex>
      </Flex>
      <div className="fixed_bottom_button">
        <Button
          variant={selectedUser === null ? "primary_disabled" : "primary"}
          disabled={selectedUser === null}
          onClick={() => replace("UserHome", { userId: selectedUser })}
        >
          방문하기
        </Button>
      </div>
    </PageLayout>
  );
};

export default MatchedUser;

const LeftIcon = () => {
  const { pop } = useFlow();

  return (
    <button onClick={pop}>
      <IconBack />
    </button>
  );
};

const RightIcon = () => {
  const { replace } = useFlow();

  return (
    <button onClick={() => replace("DiaryCalendar", {})}>
      <img src={x} alt="x" className="w-[12px] h-[12px]" />
    </button>
  );
};
