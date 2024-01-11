import { Button } from "@/components/ui/button";

export default function ButtonListDropdown({
  buttonContent,
  selectedButton,
  setSelectedButton,
  isHovered,
  setIsHovered,
  onButtonClick,
}) {
  return (
    <>
      <div className="button-container min-h-[200px]">
        {buttonContent.map((content, index) => (
          <Button
            key={index}
            className={`m-5 ${index === selectedButton && "bg-sky-500"}`}
            onMouseEnter={() => setIsHovered(content.description)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={(e) => {
              onButtonClick(event.target.textContent);
              setSelectedButton(index);
            }}
          >
            {content.profile}
          </Button>
        ))}
        {isHovered && (
          <div className="hover-description mx-5 my-2 max-w-[400px]">
            {isHovered}
          </div>
        )}
      </div>
    </>
  );
}
