"use client";
import { useState } from "react";
import ButtonList from "./ButtonList";
import userStore from "@/lib/userStore";

export default function MoodChoice() {
  const { setUserMood } = userStore();
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
      <h2 className="m-3">
        A single sip takes people back to a cherished moment, sparking joy,
        nostalgia, or bittersweet longing
      </h2>
      <h2 className="m-3">What kind of mood are you in?</h2>
      <ButtonList
        buttonContent={moodSelections}
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
        onButtonClick={setUserMood}
      />
    </>
  );
}
