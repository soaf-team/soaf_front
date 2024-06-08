import { Flex } from "@soaf/react-components-layout";
import none from "@/assets/icons/shared/none-diary.svg";

type NonDataFallbackProps = {
  children: React.ReactNode;
};

export function NonDataFallback({ children }: NonDataFallbackProps) {
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
        {children}
      </Flex>
    </Flex>
  );
}
