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
      <h2 className="text-2xl mb-10 mt-8">
        A single sip takes people back to a cherished moment, sparking joy,
        nostalgia, or bittersweet longing
      </h2>
      <h2 className="text-xl mb-7 text-[#F2ADA7]">
        What kind of mood are you in?
      </h2>
      <ButtonList
        buttonContent={moodSelections}
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
        onButtonClick={setUserMood}
      />
    </>
  );
}
