import { useState, useEffect } from "react";
import { Stack } from "@pages/stackflow";
import Providers from "./shared/providers";
import { worker } from "@mocks/browser";
import { useHandleBackButton } from "./shared/hooks";

if (import.meta.env.MODE === "production") {
  console.log = () => {};
}

function App() {
  const [workerReady, setWorkerReady] = useState(false);
  const [workerStarted, setWorkerStarted] = useState(false);
  useHandleBackButton();

  useEffect(() => {
    if (
      import.meta.env.MODE === "production" ||
      import.meta.env.MODE === "development"
    ) {
      // worker.start() 호출 전에 worker가 이미 시작되었는지 확인
      if (!workerStarted) {
        worker.start().then(() => {
          setWorkerReady(true);
          setWorkerStarted(true);
        });
      } else {
        setWorkerReady(true);
      }
    }
  }, [workerStarted]);

  if (!workerReady) return null;

  return (
    <Providers>
      <div className="relative max-w-[440px] mx-auto shadow-shadow1">
        <Stack />
      </div>
    </Providers>
  );
}

export default App;
