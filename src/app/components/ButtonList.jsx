import { Button } from "@/components/ui/button";
import userStore from "@/lib/userStore";

export default function ButtonList({
  buttonContent,
  selectedButton,
  setSelectedButton,
  onButtonClick,
}) {
  const { setQuestionIndex } = userStore();

  return (
    <div className="basis-2/5">
      <div className="flex flex-col">
        {buttonContent.map((content, index) => (
          <Button
            key={index}
            className={`my-2 max-w-[140px] hover:bg-opacity-75 ${
              index === selectedButton && backgroundColor
            }`}
            // ... other props
          >
            {content.profile}
          </Button>
        ))}
      </div>
    </div>
  );
}
