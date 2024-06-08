import { useEffect } from "react";
import { Stack } from "@pages/stackflow";
import Providers from "./shared/providers";
import { useHandleBackButton } from "./shared/hooks";

if (import.meta.env.MODE === "production") {
  console.log = () => {};
}

function App() {
  useHandleBackButton();

  useEffect(() => {
    const modalDiv = document.getElementById("modal");
    if (!modalDiv) {
      const div = document.createElement("div");
      div.id = "modal";
      document.body.appendChild(div);
    }
  }, []);

  return (
    <Providers>
      <div className="relative max-w-window mx-auto shadow-shadow1">
        <Stack />
      </div>
    </Providers>
  );
}

export default App;
