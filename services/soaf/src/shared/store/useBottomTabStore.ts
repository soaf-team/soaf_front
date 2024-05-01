import { useEffect } from "react";

import { create } from "zustand";

type BottomTabStore = {
  isOpen: boolean;
  handleOpen: () => void;
  handleClose: () => void;
};

const useBottomTab = create<BottomTabStore>((set) => ({
  isOpen: !window.location.pathname.includes("my-home"),
  handleOpen: () => set({ isOpen: true }),
  handleClose: () => set({ isOpen: false }),
}));

export const useBottomTabStore = () => {
  const { isOpen, handleOpen, handleClose } = useBottomTab();

  useEffect(() => {
    if (window.location.pathname.includes("my-home")) {
      handleClose();
    } else {
      handleOpen();
    }
  }, [handleOpen, handleClose, window.location.pathname]); // eslint-disable-line

  return { isOpen, handleOpen, handleClose };
};
