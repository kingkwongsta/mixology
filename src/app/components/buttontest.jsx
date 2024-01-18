import React, { useState, useEffect, useRef } from "react";

function ColorSwitchingButton() {
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

  const backgroundColor = colorCount % 2 === 0 ? "bg-blue-500" : "bg-green-500";

  return (
    <button
      className={`px-4 py-2 rounded-md ${backgroundColor} text-white hover:bg-opacity-75`}
      onClick={handleClick}
    >
      Click Me
    </button>
  );
}

export default ColorSwitchingButton;
