import { Button } from "@/components/ui/button";
import userStore from "@/lib/userStore";
import React, { useState, useRef } from "react";

export default function ButtonList({
  buttonContent,
  selectedButton,
  setSelectedButton,
  onButtonClick,
}) {
  const { setQuestionIndex, setUserLiquor } = userStore();
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
    <div className="">
      <div className="flex flex-col">
        {buttonContent.map((content, index) => (
          <Button
            key={index}
            className={`bg-[#FF7F50] hover:bg-[#ffd299] my-2 min-w-[100px] max-w-[160px] hover:bg-opacity-75 drop-shadow-md ${
              index === selectedButton && backgroundColor
            }`}
            onClick={(e) => {
              onButtonClick(event.target.textContent);
              setSelectedButton(index);
              handleClick();
              setTimeout(() => {
                setQuestionIndex(1);
              }, 800);
            }}
          >
            {content}
          </Button>
        ))}
      </div>
    </div>
  );
}
