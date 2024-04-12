import { Stack } from "@pages/stackflow";
import Providers from "./shared/providers";

if (import.meta.env.VITE_ENV === "development") {
  import("./mocks/browser").then(({ worker }) => {
    worker.start();
  });
}

if (import.meta.env.VITE_ENV === "production") {
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
