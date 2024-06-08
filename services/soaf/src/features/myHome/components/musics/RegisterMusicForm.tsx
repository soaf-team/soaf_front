import { useState } from "react";
import { useFunnel } from "@/shared/hooks";

import { GenericForm } from "@/shared/components";

import { SearchMusicList, SetMusicInfo } from "@/features/myHome/components";

const STEP = ["음악 검색", "음악 등록"] as const;

export function RegisterMusicForm() {
  const [music, setMusic] = useState<Record<string, string>>({
    name: "",
    artist: "",
  });

  const { Funnel, Step, setStep } = useFunnel(STEP[0]);

  const handleNextStep = () => {
    setStep(STEP[1]);
  };

  const handlePrevStep = () => {
    setStep(STEP[0]);
  };

  const handleSubmit = () => {
    // TODO: Submit 로직
  };

  return (
    <GenericForm formOptions={{ mode: "onSubmit" }} onSubmit={handleSubmit}>
      <Funnel>
        <Step name={STEP[0]}>
          <SearchMusicList onNextStep={handleNextStep} setMusic={setMusic} />
        </Step>
        <Step name={STEP[1]}>
          <SetMusicInfo onPrevStep={handlePrevStep} music={music} />
        </Step>
      </Funnel>
    </GenericForm>
  );
}
