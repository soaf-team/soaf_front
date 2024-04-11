import { RecoilRoot } from "recoil";
import { Stack } from "@pages/stackflow";

function App() {
  return (
    <RecoilRoot>
      <div className="relative max-w-[440px] mx-auto shadow-shadow1">
        <Stack />
      </div>
    </RecoilRoot>
  );
}

export default App;
