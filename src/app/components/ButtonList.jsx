import { Button } from "@/components/ui/button";
import userStore from "@/lib/userStore";
import React, { useState, useRef } from "react";

export default function ButtonList({
  buttonContent,
  selectedButton,
  setSelectedButton,
  onButtonClick,
}) {
  const { setQuestionIndex } = userStore();
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
