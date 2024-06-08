import { useEffect } from "react";
import { useFlow } from "@/pages/stackflow";

export const useHandleBackButton = () => {
  const { pop } = useFlow();

  useEffect(() => {
    const handleBackButton = () => {
      pop();
    };

    window.addEventListener("popstate", handleBackButton);

    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, []);
};
