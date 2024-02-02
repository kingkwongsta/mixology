"use client";
import { useState } from "react";
import ButtonList from "./ButtonList";
import userStore from "@/lib/userStore";
import QuestionCard from "./QuestionCard";

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
      <QuestionCard
        question="What kind of mood are you in?"
        buttons={
          <ButtonList
            buttonContent={moodSelections}
            selectedButton={selectedButton}
            setSelectedButton={setSelectedButton}
            onButtonClick={setUserMood}
          />
        }
      />
    </>
  );
}
