import { Button } from "@/components/ui/button";

export default function ButtonList({
  buttonContent,
  selectedButton,
  setSelectedButton,
  setUserMood,
}) {
  return buttonContent.map((content, index) => {
    return (
      <Button
        key={index}
        className={`m-5 ${index === selectedButton && "bg-sky-500"}`}
        onClick={() => {
          setSelectedButton(index);
          setUserMood(content);
        }}
      >
        {content}
      </Button>
    );
  });
}
