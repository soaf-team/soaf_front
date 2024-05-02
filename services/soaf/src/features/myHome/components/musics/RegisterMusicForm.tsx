import { useFunnel } from "@/shared/hooks";

import { GenericForm } from "@/shared/components";

import { SearchMusicList, SetMusicInfo } from "@/features/myHome/components";

const STEP = ["음악 검색", "음악 등록"] as const;

export const RegisterMusicForm = () => {
  const { Funnel, Step, setStep } = useFunnel(STEP[0]);

  const handleNextStep = () => {
    setStep(STEP[1]);
  };

  const handlePrevStep = () => {
    setStep(STEP[0]);
  };

  return (
    <GenericForm formOptions={{ mode: "onSubmit" }}>
      <Funnel>
        <Step name={STEP[0]}>
          <SearchMusicList onNextStep={handleNextStep} />
        </Step>
        <Step name={STEP[1]}>
          <SetMusicInfo onPrevStep={handlePrevStep} />
        </Step>
      </Funnel>
    </GenericForm>
  );
};
