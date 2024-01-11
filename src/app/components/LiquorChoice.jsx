"use client";
import { useState } from "react";
import ButtonList from "./ButtonList";

export default function LiquorChoice({ setUserLiquor }) {
  const [selectedButton, setSelectedButton] = useState();
  const liquorOptions = ["Vodka", "Whiskey", "Rum", "Gin", "Tequila", "Brandy"];

  return (
    <div className="mx-5">
      <h2>What liquor are you interested in using?</h2>
      <ButtonList
        buttonContent={liquorOptions}
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
        onButtonClick={setUserLiquor}
      />
    </div>
  );
}
