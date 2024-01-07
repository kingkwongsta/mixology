"use client";
import { useState } from "react";
import ButtonList from "./ButtonList";

export default function Mood({ userMood, setUserMood }) {
  const [selectedButton, setSelectedButton] = useState();

  const moodSelections = [
    "Celebratory",
    "Nostalgic",
    "Comforting",
    "Adventurous",
    "Reflective",
    "Flirty",
    "Creative",
  ];

  return (
    <>
      <h2>hello</h2>
      <ButtonList
        buttonContent={moodSelections}
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
      />
    </>
  );
}
