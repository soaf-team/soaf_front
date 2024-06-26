import { useState } from "react";
import { useFunnel } from "@/shared/hooks";

import { GenericForm } from "@/shared/components";
import {
  SearchYoutubeList,
  SetYoutubeInfo,
  YoutubeItemProps,
} from "../youtube";

const STEP = ["유튜브 검색", "유튜브 등록"] as const;

export const RegisterYoutubeForm = () => {
  const [youtubeInfo, setYoutubeInfo] = useState<YoutubeItemProps>({
    title: "",
    channelTitle: "",
    publishedAt: "",
    thumbnail: "",
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
          <SearchYoutubeList
            onNextStep={handleNextStep}
            setYoutubeInfo={setYoutubeInfo}
          />
        </Step>
        <Step name={STEP[1]}>
          <SetYoutubeInfo
            onPrevStep={handlePrevStep}
            youtubeInfo={youtubeInfo}
          />
        </Step>
      </Funnel>
    </GenericForm>
  );
};
