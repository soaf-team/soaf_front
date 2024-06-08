import { Flex } from "@soaf/react-components-layout";

type StepProps = {
  currentStep: number;
  totalStep: number;
  mainMessage?: string;
  subMessage?: string;
};

export function Step({
  currentStep,
  totalStep,
  mainMessage,
  subMessage,
}: StepProps) {
  return (
    <Flex direction="column" align="center" className="text-center">
      <p className="body2 text-gray300 text-center mb-[6px]">
        STEP {currentStep}/{totalStep}
      </p>
      {!!mainMessage && (
        <h2 className="head3 whitespace-pre-line">{mainMessage}</h2>
      )}
      {!!subMessage && (
        <p className="py-[8px] text-gray800 body3 whitespace-pre-line">
          {subMessage}
        </p>
      )}
    </Flex>
  );
}
