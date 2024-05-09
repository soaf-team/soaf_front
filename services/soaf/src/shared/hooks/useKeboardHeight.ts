import { useEffect, useState } from "react";

export const useKeboardHeight = () => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    function handleResize() {
      const newHeight = window.innerHeight;
      if (windowHeight > newHeight) {
        setKeyboardHeight(windowHeight - newHeight);
      } else {
        setKeyboardHeight(0);
      }
      setWindowHeight(newHeight);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowHeight]);

  return keyboardHeight;
};
