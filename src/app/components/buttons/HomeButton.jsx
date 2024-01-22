import userStore from "@/lib/userStore";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "@radix-ui/react-icons";

export default function HomeButton() {
  const { questionIndex, setQuestionIndex, setDrinkRecipe } = userStore();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => {
        setQuestionIndex(-questionIndex);
        setDrinkRecipe("");
      }}
      //   className={`${isDarkMode ? "dark:text-white" : ""}`}
    >
      <HomeIcon className="h-[1.2rem] w-[1.2rem]" />
    </Button>
  );
}
