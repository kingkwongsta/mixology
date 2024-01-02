"use client";

import { useState } from "react";

export default function LiquorChoice() {
  const [liquorChoice, setLiquorChoice] = useState();
  const [recipe, setRecipe] = useState();
  const liquorOptions = ["Vodka", "Whiskey", "Rum", "Gin", "Tequila", "Brandy"];

  function handleLiquorChoice(liquor) {
    setLiquorChoice(liquor);
    console.log(`Debug liquorChoice State: ${liquorChoice}`);

    setRecipe(getGPT(liquor));
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

async function getGPT(liquor) {
  try {
    const response = await fetch("/api/gptrequest", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ liquor }),
    });

    const data = await response.json();
    return data.data.choices[0].message.content;
  } catch (error) {
    console.error(error);
    setResponse("Error: Failed to communicate with the server.");
  }
}
