import { create } from "zustand";

type BottomTabStore = {
  isOpen: boolean;
  handleOpen: () => void;
  handleClose: () => void;
};

const isMyHome = window.location.pathname.includes("my-home");

export const useBottomTabStore = create<BottomTabStore>((set) => ({
  isOpen: isMyHome ? false : true,
  handleOpen: () => set({ isOpen: true }),
  handleClose: () => set({ isOpen: false }),
}));
