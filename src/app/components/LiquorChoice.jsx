"use client";
import { useState } from "react";
import LiquorButtons from "./LiquorButtons";

export default function LiquorChoice({ setUserLiquor }) {
  const [selectedButton, setSelectedButton] = useState();

  return (
    <div className="mx-5">
      <h2>What liquor are you interested in using?</h2>
      <LiquorButtons
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
        setUserLiquor={setUserLiquor}
      />
    </div>
  );
}
