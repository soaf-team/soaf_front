import { useState } from "react";
import { useFlow } from "@/pages/stackflow";
import { PageLayout, Button } from "@/shared/components";
import { CheckBox, Check } from "@/shared/components";
import { IconBack } from "@stackflow/plugin-basic-ui";
import { Flex } from "@soaf/react-components-layout";
import ChevronRight from "@/assets/icons/shared/chevron-right.svg";

// TODO: 선택 약관 동의 여부를 저장해야함 react-hook-form으로 동의 여부와 닉네임을 저장해서 submit??

const Terms = () => {
  const { pop, push } = useFlow();
  const [allChecked, setAllChecked] = useState(false);
  const [checked, setChecked] = useState(
    TERMS.map(term => (term.optional === false ? allChecked : false)),
  );

  const handleAllChecked = () => {
    const newAllChecked = !allChecked;
    setAllChecked(newAllChecked);
    setChecked(
      TERMS.map(term => (term.optional === false ? newAllChecked : false)),
    );
  };

  const handleChecked = (index: number) => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);

    if (
      TERMS.every((term, i) => (term.optional === false ? newChecked[i] : true))
    ) {
      setAllChecked(true);
    } else {
      setAllChecked(false);
    }
  };

  return (
    <PageLayout
      header={{
        title: "",
        leftSlot: (
          <div onClick={pop}>
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
          className="text-[22px] leading-[32px] font-bold text-black"
        >
          <p>이용 약관에</p>
          <p>동의해주세요</p>
        </Flex>

        {/* TODO: border 왜 적용 안되지 */}
        <div className="py-[16px] border-border border-b">
          <CheckBox
            isChecked={allChecked}
            onClick={handleAllChecked}
            label="필수 약관 전체동의"
          />
        </div>

        <Flex direction="column" gap={20} className="w-full mt-[10px]">
          {TERMS.map((term, index) => (
            <Flex
              key={term.id}
              direction="row"
              align="center"
              justify="space-between"
              className="w-full"
            >
              <Check
                isChecked={checked[index]}
                onClick={() => handleChecked(index)}
                label={term.title}
              />

              <a href={term.link} target="_blank" rel="noopener noreferrer">
                <div className="w-[24px] h-[24px]">
                  <img
                    src={ChevronRight}
                    alt="chevron-right"
                    className="full_img_cover"
                  />
                </div>
              </a>
            </Flex>
          ))}
        </Flex>
      </Flex>

      <div className="absolute left-0 right-0 bottom-10 px-[18px]">
        <Button
          onClick={() => push("NickName", {})}
          variant={allChecked ? "primary" : "primary_disabled"}
          disabled={!allChecked}
        >
          동의하기
        </Button>
      </div>
    </PageLayout>
  );
};

export default Terms;

const TERMS = [
  {
    id: 1,
    title: "[필수] 서비스 이용약관",
    optional: false,
    link: "https://www.notion.so/sapienslee/5834a930e1c047c8b3e8d0c778eaba54",
  },
  {
    id: 2,
    title: "[필수] 개인정보 수집·이용 동의",
    optional: false,
    link: "https://www.notion.so/sapienslee/727990d0a6ca4b5bb67850d971ac8d08",
  },
  {
    id: 3,
    title: "[필수] 민감정보 수집·이용 동의",
    optional: false,
    link: "https://www.notion.so/sapienslee/9779ec41490d49bb8fe835dbc7ee8bed",
  },
  {
    id: 4,
    title: "[필수] 개인정보 제 3자 제공 동의",
    optional: false,
    link: "https://www.notion.so/sapienslee/3-74bf97972cef4a72951fb076bc67e9ae",
  },
  {
    id: 5,
    title: "[필수] 개인정보 국외 이전 동의",
    optional: false,
    link: "https://www.notion.so/sapienslee/cfa08e562dd64fde9bb274c15dc62341",
  },
  {
    id: 6,
    title: "[필수] 만 14세 이상 입니다.",
    optional: false,
    link: "https://www.notion.so/sapienslee/14-f8d5458efe3840989a3fe009302dc427",
  },
  {
    id: 7,
    title: "[선택] 마케팅 활용 동의",
    optional: true,
    link: "https://www.notion.so/sapienslee/2679f35a460343149f03d1535d113fde",
  },
] as const;
