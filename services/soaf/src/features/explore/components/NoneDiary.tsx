import { Flex } from "@soaf/react-components-layout";
import none from "@/assets/icons/shared/none-diary.svg";

export const NoneDiary = () => {
  return (
    <Flex direction="column" align="center" justify="center" gap={12}>
      <div className="w-[52px] h-[52px]">
        <img
          src={none}
          alt="none-diary"
          className="object-cover w-full h-full"
        />
      </div>

      <Flex direction="column" className="body2">
        <p>아직 작성된 일기가 없어요.</p>
        <p>일기를 먼저 작성해야 탐색이 가능해요.</p>
      </Flex>
    </Flex>
  );
};
