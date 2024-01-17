import { Button } from "@/components/ui/button";
import userStore from "@/lib/userStore";

export default function ButtonListDropdown({
  buttonContent,
  selectedButton,
  setSelectedButton,
  isHovered,
  setIsHovered,
  onButtonClick,
}) {
  const { setQuestionIndex } = userStore();

  return (
    <>
      <div className="flex flex-row">
        <div>
          {buttonContent.map((content, index) => (
            <Button
              key={index}
              className={`m-5 max-w-[150px] ${
                index === selectedButton && "bg-sky-500"
              }`}
              onMouseEnter={() => setIsHovered(content.description)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={(e) => {
                onButtonClick(event.target.textContent);
                setSelectedButton(index);
                setQuestionIndex(1);
              }}
            >
              {content.profile}
            </Button>
          ))}
        </div>
        <div>
          {isHovered && (
            <div className="hover-description mx-5 my-2 max-w-[400px]">
              {isHovered}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
