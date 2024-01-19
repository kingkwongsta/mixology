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
    <div className="flex flex-row m-8">
      {buttonContent.map((content, index) => (
        <Button
          key={index}
          className={`min-w-[140px] ${
            index === selectedButton && "bg-sky-500"
          }`}
          onClick={() => {
            setSelectedButton(index);
            onButtonClick(content);
            setQuestionIndex(1);
          }}
        >
          {content}
        </Button>
      ))}
    </div>
  );
}
