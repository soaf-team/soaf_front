import { useEffect } from "react";

type AppBridgeMessage = {
  type: "LOADING_EVENT";
  data: unknown;
};

export const useAppBridge = () => {
  const sendMessageToNative = (message: AppBridgeMessage) => {
    // @ts-expect-error window is not defined in react-native
    if (typeof window !== "undefined" && window.ReactNativeWebView) {
      // @ts-expect-error window is not defined in react-native
      window.ReactNativeWebView.postMessage(JSON.stringify(message));
    }
  };

  useEffect(() => {
    sendMessageToNative({ type: "LOADING_EVENT", data: "SUCCESS" });
  }, []);

  return { sendMessageToNative };
};
