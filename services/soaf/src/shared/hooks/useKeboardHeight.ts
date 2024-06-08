import { useEffect, useState } from "react";

export const useKeboardHeight = () => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  const isOnKeyboard = keyboardHeight > 0;

  useEffect(() => {
    function handleResize(event: Event) {
      const newHeight = (event.target as VisualViewport).height;
      if (windowHeight > newHeight) {
        setKeyboardHeight(windowHeight - newHeight);
      } else {
        setKeyboardHeight(0);
      }
      setWindowHeight(newHeight);
    }

    visualViewport?.addEventListener("resize", handleResize);

    return () => {
      visualViewport?.removeEventListener("resize", handleResize);
    };
  }, [windowHeight]);

  return { keyboardHeight, isOnKeyboard };
};
