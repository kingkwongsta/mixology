"use client";
import ModeToggle from "./ModeToggle";
import userStore from "@/lib/userStore";
import { Button } from "@/components/ui/button";

export default function Header() {
  const { questionIndex, setQuestionIndex, setDrinkRecipe } = userStore();

  return (
    <div className="flex flex-row justify-center">
      <Button
        variant="outline"
        size="icon"
        onClick={() => {
          setQuestionIndex(-questionIndex);
          setDrinkRecipe("");
        }}
        className={`${isDarkMode ? "dark:text-white" : ""}`}
      >
        <HomeIcon className="h-[1.2rem] w-[1.2rem]" />
      </Button>
      <ModeToggle />
    </div>
  );
}
