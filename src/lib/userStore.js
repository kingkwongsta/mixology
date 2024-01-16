import { create } from "zustand";

const userStore = create((set) => ({
  userFlavor: "",
  userLiquor: "",
  userMood: "",
  drinkRecipe: "",
  questionIndex: 1,
  setUserFlavor: (flavor) => set((state) => ({ ...state, userFlavor: flavor })),
  setUserLiquor: (liquor) => set((state) => ({ ...state, userLiquor: liquor })),
  setUserMood: (mood) => set((state) => ({ ...state, userMood: mood })),
  setDrinkRecipe: (recipe) =>
    set((state) => ({ ...state, drinkRecipe: recipe })),
  setQuestionIndex: (amount) =>
    set((state) => ({
      ...state,
      questionIndex: state.questionIndex + amount,
    })),
}));

export default userStore;
