import { Button } from "@/components/ui/button";
import userStore from "@/lib/userStore";
import React, { useState, useRef } from "react";

export default function ButtonListDropdown({
  buttonContent,
  selectedButton,
  setSelectedButton,
  isHovered,
  setIsHovered,
}) {
  const { setQuestionIndex, setUserFlavor } = userStore();
  const [colorCount, setColorCount] = useState(0);
  const intervalRef = useRef(null);

  const handleClick = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setColorCount((prevCount) => prevCount + 1);
    }, 200); // Change color every 0.5 seconds

    setTimeout(() => {
      clearInterval(intervalRef.current); // Stop after 3 cycles
      setColorCount(0);
    }, 800); // Stop after 3 seconds (6 color changes)
  };

  const backgroundColor = colorCount % 2 === 0 ? "bg-slate-600" : "bg-gray-100";

  return (
    <>
      <div className="flex flex-row m-8">
        <div className="flex">
          <div className="flex flex-col">
            {buttonContent.map((content, index) => (
              <Button
                key={index}
                className={`bg-[#D9D9D9] my-2 min-w-[100px] max-w-[160px] hover:bg-opacity-75 ${
                  index === selectedButton && backgroundColor
                }`}
                onMouseEnter={() => setIsHovered(content.description)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={(e) => {
                  setUserFlavor(event.target.textContent);
                  setSelectedButton(index);
                  handleClick();
                  setTimeout(() => {
                    setQuestionIndex(1);
                  }, 800);
                }}
              >
                {content.profile}
              </Button>
            ))}
          </div>
        </div>
        <div className="mx-10">
          {isHovered && (
            <div className="hover-description my-2 max-w-[400px] text-[#D9D9D9] text-md font-medium">
              {isHovered}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
