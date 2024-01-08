"use client";

import { useState } from "react";
import LiquorButtons from "./LiquorButtons";

export default function LiquorChoice({ setLiquorChoice }) {
  const [selectedButton, setSelectedButton] = useState();

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
    </div>
  );
}
