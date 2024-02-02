"use client";
import { useState } from "react";
import ButtonList from "./ButtonList";
import userStore from "@/lib/userStore";
import QuestionCard from "./QuestionCard";

export default function LiquorChoice() {
  const { setUserLiquor, setQuestionIndex } = userStore();
  const [selectedButton, setSelectedButton] = useState();
  const liquorOptions = [
    "Vodka",
    "Soju",
    "Whiskey",
    "Rum",
    "Gin",
    "Tequila",
    "Brandy",
  ];

  return (
    <QuestionCard
      question="What liquor are you interested in using?"
      buttons={
        <ButtonList
          buttonContent={liquorOptions}
          selectedButton={selectedButton}
          setSelectedButton={setSelectedButton}
          onButtonClick={setUserLiquor}
        />
      }
    />
  );
}
