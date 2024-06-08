import dayjs from "dayjs";
import "dayjs/locale/ko";

import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@shared/styles";

dayjs.locale("ko");

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
