import { Stack } from "@pages/stackflow";
import Providers from "./shared/providers";
import { worker } from "@mocks/browser";

if (
  import.meta.env.MODE === "production" ||
  import.meta.env.MODE === "development"
) {
  worker.start();
}

if (import.meta.env.MODE === "production") {
  console.log = () => {};
}

function App() {
  return (
    <Providers>
      <div className="relative max-w-[440px] mx-auto shadow-shadow1">
        <Stack />
      </div>
    </Providers>
  );
}

export default App;
