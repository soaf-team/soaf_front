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

  useEffect(() => {
    const modalDiv = document.getElementById("modal");
    if (!modalDiv) {
      const div = document.createElement("div");
      div.id = "modal";
      document.body.appendChild(div);
    }
  }, []);

  if (!workerReady) return null;

  return (
    <Providers>
      <div className="relative max-w-window mx-auto shadow-shadow1">
        <Stack />
      </div>
    </Providers>
  );
}

export default App;
