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
      <div className="flex flex-row justify-center">
        <div className="basis-2/5 flex justify-center">
          <div className="flex flex-col">
            {buttonContent.map((content, index) => (
              <Button
                key={index}
                className={`my-2 max-w-[140px] ${
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
                {index}
                {content.profile}
              </Button>
            ))}
          </div>
        </div>
        <div className="basis-3/5">
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
