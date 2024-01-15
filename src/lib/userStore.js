import { create } from "zustand";

const userStore = create((set) => ({
  userFlavor: "",
  userLiquor: "",
  userMood: "",
  drinkRecipe: "",
  setUserFlavor: (flavor) => set((state) => ({ ...state, userFlavor: flavor })),
  setUserLiquor: (liquor) => set((state) => ({ ...state, userLiquor: liquor })),
  setUserMood: (mood) => set((state) => ({ ...state, userMood: mood })),
  setDrinkRecipe: (recipe) =>
    set((state) => ({ ...state, drinkRecipe: recipe })),
}));

export default userStore;
