"use client";

import { useState } from "react";

export default function LiquorChoice() {
  const [liquorChoice, setLiquorChoice] = useState();
  const liquorOptions = ["Vodka", "Whiskey", "Rum", "Gin", "Tequila", "Brandy"];

  function handleLiquorChoice(liquor) {
    setLiquorChoice(liquor);
    console.log(`Debug liquorChoice State: ${liquorChoice}`);
  }

  function createLiquorButtons() {
    return liquorOptions.map((liquor, index) => {
      return (
        <button
          key={index}
          className="p-2 m-5 border-solid border-2 border-sky-500 rounded-lg"
          onClick={() => handleLiquorChoice(liquor)}
        >
          {liquor}
        </button>
      );
    });
  }

  return (
    <div>
      <h2>What liquor are you interested in using?</h2>
      <div>{createLiquorButtons()}</div>
    </div>
  );
}
