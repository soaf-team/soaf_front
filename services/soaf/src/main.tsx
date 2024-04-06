import dayjs from "dayjs";
import "dayjs/locale/ko";
dayjs.locale("ko");

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@shared/styles";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
