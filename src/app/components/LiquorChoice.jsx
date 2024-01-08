"use client";

import { useState } from "react";
import LiquorButtons from "./LiquorButtons";

export default function LiquorChoice({ setLiquorChoice }) {
  const [recipe, setRecipe] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedButton, setSelectedButton] = useState();

  // const handleLiquorChoice = async (liquor) => {
  //   setLiquorChoice(liquor);
  //   setIsLoading(true);

  //   try {
  //     const response = await fetch("/api/gptrequest", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ liquor, userFlavor }),
  //     });

  //     const data = await response.json();

  //     if (data.data.choices && data.data.choices.length > 0) {
  //       setRecipe(JSON.parse(data.data.choices[0].message.content));
  //       console.log(data);
  //     } else {
  //       setRecipe("Error: Unexpected response structure");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     setRecipe("Error");
  //     console.log(error.response);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  function renderRecipe() {
    return (
      <div>
        <h2 className="my-3">Cocktail: {recipe.name}</h2>
        <div className="my-3">
          <strong>Ingredients:</strong>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>
                {ingredient.name}: {ingredient.quantity}
              </li>
            ))}
          </ul>
        </div>
        <div className="my-3">
          <strong>Instructions:</strong>
          <ol>
            {recipe.instructions.split("\n").map((instruction, index) => (
              <li key={index}>{instruction.trim()}</li>
            ))}
          </ol>
        </div>
      </div>
    );
  }

  function showState() {
    console.log(recipe);
    console.log(`Name: ${recipe.name}`);
    console.log(`Ingredients: ${recipe.ingredients}`);
    console.log(`Instructionss: ${recipe.instructions}`);
  }

  return (
    <div className="mx-5">
      <h2>What liquor are you interested in using?</h2>
      <LiquorButtons
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
        setLiquorChoice={setLiquorChoice}
      />
      <div className="">{recipe ? renderRecipe() : ""}</div>
      <div className="m-5 text-slate-500 text-xl">
        {isLoading ? <p>Shaking up your signature sip... </p> : ""}
      </div>
      {/* --------- Debug State --------- */}
      {/* <button
        onClick={() => showState()}
        className="rounded-xl p-2 m-5 border-solid border-2 border-green-500"
      >
        show recipe state
      </button> */}
    </div>
  );
}
