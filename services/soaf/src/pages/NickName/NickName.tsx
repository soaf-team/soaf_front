import { useState, useEffect, useRef } from "react";
import { useFlow } from "../stackflow";
import { PageLayout, Button, Input } from "@/shared/components";
import { Flex } from "@soaf/react-components-layout";
import { IconBack } from "@stackflow/plugin-basic-ui";

const NickName = () => {
  const { pop, replace } = useFlow();
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <PageLayout
      header={{
        title: "",
        leftSlot: (
          <div onClick={() => pop({ animate: false })}>
            <IconBack />
          </div>
        ),
        rightSlot: null,
      }}
    >
      <Flex direction="column">
        <Flex
          direction="column"
          gap={8}
          className="text-[22px] leading-[32px] font-bold text-black mb-[42px]"
        >
          <p>어떻게 불러드리는게</p>
          <p>좋을까요?</p>
        </Flex>

        <Flex direction="column" gap={5} className="mb-[20px]">
          <Input
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e)}
            placeholder="사용할 닉네임을 적어주세요"
            isResetButton
            maxLength={10}
          />

          <Flex
            direction="row"
            justify="end"
            gap={2}
            className="font-medium text-[14px] leading-5"
          >
            <p className={value.length === 10 ? "text-black" : "text-gray300"}>
              {value.length}
            </p>
            /<p>10</p>
          </Flex>
        </Flex>

        <Button
          onClick={() => replace("DiaryCalendar", {}, { animate: false })}
        >
          완료
        </Button>
      </Flex>
    </PageLayout>
  );
};

export default NickName;
