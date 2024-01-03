"use client";

import { useState } from "react";

export default function LiquorChoice() {
  const [liquorChoice, setLiquorChoice] = useState();
  const [recipe, setRecipe] = useState();
  const liquorOptions = ["Vodka", "Whiskey", "Rum", "Gin", "Tequila", "Brandy"];

  const handleLiquorChoice = async (liquor) => {
    setLiquorChoice(liquor);

    try {
      const response = await fetch("/api/gptrequest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ liquor }),
      });

      const data = await response.json();

      if (data.data.choices && data.data.choices.length > 0) {
        setRecipe(JSON.parse(data.data.choices[0].message.content));
        console.log(data);
      } else {
        setRecipe("Error: Unexpected response structure");
      }
    } catch (error) {
      console.error(error);
      setRecipe("Error");
      console.log(error.response);
    }
  };

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

  function showState() {
    console.log(recipe);
    console.log("test");
    console.log(`Name: ${recipe.name}`);
    console.log(`Ingredients: ${recipe.ingredients}`);
    console.log(`Instructionss: ${recipe.instructions}`);
  }

  return (
    <div>
      <h2>What liquor are you interested in using?</h2>
      <div>{createLiquorButtons()}</div>
      <div className="m-5 text-2xl text-red-600">
        {recipe ? recipe.name : ""}
      </div>
      <button
        onClick={() => showState()}
        className="rounded-xl p-2 m-5 border-solid border-2 border-green-500"
      >
        show recipe state
      </button>
      <button
        onClick={() => testAPI()}
        className="rounded-xl p-2 m-5 border-solid border-2 border-green-500"
      >
        test API
      </button>
    </div>
  );
}
