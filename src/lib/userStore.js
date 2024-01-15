import { create } from "zustand";

const userStore = create((set) => ({
  userFlavor: "",
  userLiquor: "",
  userMood: "",
  setUserFlavor: (flavor) => set((state) => ({ ...state, userFlavor: flavor })),
  setUserLiquor: (liquor) => set((state) => ({ ...state, userLiquor: liquor })),
  setUserMood: (mood) => set((state) => ({ ...state, userMood: mood })),
}));

export default userStore;
