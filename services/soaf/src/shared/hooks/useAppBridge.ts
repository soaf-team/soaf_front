import { useEffect } from "react";

type AppBridgeMessage = {
  type: "LOADING_EVENT";
  data: any;
};

export const useAppBridge = () => {
  const sendMessageToNative = (message: AppBridgeMessage) => {
    // @ts-ignore
    if (typeof window !== "undefined" && window.ReactNativeWebView) {
      // @ts-ignore
      window.ReactNativeWebView.postMessage(JSON.stringify(message));
    }
  };

  useEffect(() => {
    sendMessageToNative({ type: "LOADING_EVENT", data: "SUCCESS" });
  }, []);

  return { sendMessageToNative };
};
