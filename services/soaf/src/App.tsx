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
  useHandleBackButton();

  useEffect(() => {
    worker.start().then(() => setWorkerReady(true));
  }, []);

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
