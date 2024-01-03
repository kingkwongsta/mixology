"use client";

import { useState } from "react";
import LiquorButtons from "./LiquorButtons";

export default function LiquorChoice() {
  const [liquorChoice, setLiquorChoice] = useState();
  const [recipe, setRecipe] = useState();

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

  function renderRecipe() {
    return Object.entries(recipe).map(([key, value], index) => {
      return (
        <div key={index} className="m-5 text-lg text-slate-300">
          <strong>{key}:</strong>{" "}
          {Array.isArray(value)
            ? value.map((item, index2) => (
                <div key={index2}>
                  <p>
                    <strong>{item.name}:</strong> {item.quantity}
                  </p>
                </div>
              ))
            : value}
        </div>
      );
    });
  }

  function showState() {
    console.log(recipe);
    console.log(`Name: ${recipe.name}`);
    console.log(`Ingredients: ${recipe.ingredients}`);
    console.log(`Instructionss: ${recipe.instructions}`);
  }

  return (
    <div>
      <h2>What liquor are you interested in using?</h2>
      <LiquorButtons handleLiquorChoice={handleLiquorChoice} />
      <div className="">{recipe ? renderRecipe() : ""}</div>
      <button
        onClick={() => showState()}
        className="rounded-xl p-2 m-5 border-solid border-2 border-green-500"
      >
        show recipe state
      </button>
    </div>
  );
}
