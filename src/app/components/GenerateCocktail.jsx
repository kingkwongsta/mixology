"use client";
import { useState, useEffect } from "react";

export default function GenerateCocktail({
  userFlavor,
  liquorChoice,
  userMood,
}) {
  const [randomNum, setRandomNum] = useState();
  const [selected, setSelected] = useState(false);

  const generateNames = [
    "Shake It Up!",
    "Pour Me Something Perfect",
    "Surprise Me, Bartender!",
    "Let's Get This Party Started",
    "Mix Me a Masterpiece",
    "What's My Cocktail Personality?",
    "Reveal My Drink Destiny",
    "Craft My Cocktail Lab Experiment",
    "Spin the Cocktail Wheel of Fortune",
    "Deal Me a Delicious Drink", // Emoji included
    "Find My Flavor Match",
    "Unlock My Ultimate Cocktail",
    "Quench My Thirst for Something New",
    "Nail My Next Drink",
    "Celebrate with a Custom Cocktail",
    "Mix My Magic Potion",
    "Create My Cocktail Kingdom",
    "Blast Off to Flavortown",
    "Escape to Cocktail Island",
    "Shake Your Tailfeather (and My Cocktail)",
  ];

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * generateNames.length);
    setRandomNum(randomIndex);
  }, []);

  return (
    <div className="my-4">
      <button
        className={`p-2 m-5 border-solid border-2 border-sky-500 rounded-lg ${
          selected && "bg-sky-500"
        }`}
        onClick={() => {
          setSelected(!selected);
        }}
      >
        {generateNames[randomNum]}
      </button>
    </div>
  );
}
