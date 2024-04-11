import { RecoilRoot } from "recoil";
import { Stack } from "@pages/stackflow";
import { useAppBridge } from "./shared/hooks";

function App() {
  useAppBridge();

  return (
    <RecoilRoot>
      <Stack />
    </RecoilRoot>
  );
}

export default App;
