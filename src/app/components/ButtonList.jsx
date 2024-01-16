import { Button } from "@/components/ui/button";
import userStore from "@/lib/userStore";

export default function ButtonList({
  buttonContent,
  selectedButton,
  setSelectedButton,
  onButtonClick,
}) {
  const { setQuestionIndex } = userStore();
  return buttonContent.map((content, index) => {
    return (
      <Button
        key={index}
        className={`m-5 ${index === selectedButton && "bg-sky-500"}`}
        onClick={() => {
          setSelectedButton(index);
          onButtonClick(content);
          setQuestionIndex(1);
        }}
      >
        {content}
      </Button>
    );
  });
}
