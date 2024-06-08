import { useState } from "react";
import { useFunnel } from "@/shared/hooks";

import { GenericForm } from "@/shared/components";

import { SearchBookList, SetBookInfo } from "@/features/myHome/components";

const STEP = ["도서 검색", "도서 등록"] as const;

export function RegisterBookForm() {
  const [bookId, setBookId] = useState("" as string);
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
          <SearchBookList onNextStep={handleNextStep} setBookId={setBookId} />
        </Step>
        <Step name={STEP[1]}>
          <SetBookInfo onPrevStep={handlePrevStep} bookId={bookId} />
        </Step>
      </Funnel>
    </GenericForm>
  );
}
