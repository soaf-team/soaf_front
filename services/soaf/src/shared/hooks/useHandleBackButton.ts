import { useFlow } from "@/pages/stackflow";
import { useEffect } from "react";

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
