"use client";
import { useState, useEffect } from "react";

export default function GenerateCocktail({
  userFlavor,
  liquorChoice,
  userMood,
  recipe,
  setRecipe,
}) {
  const [randomNum, setRandomNum] = useState();
  const [selected, setSelected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

  const getCocktail = async () => {
    setIsLoading(true);

    try {
      const response = await fetch("/api/gptrequest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ liquor, userFlavor }),
      });

      const data = await response.json();

      if (data.data.choices && data.data.choices.length > 0) {
        setRecipe(JSON.parse(data.data.choices[0].message.content));
        console.log(data);
      } else {
        setRecipe("Error: Unexpected response structure");
      }
    } catch (error) {
      console.error(error);
      setRecipe("Error");
      console.log(error.response);
    } finally {
      setIsLoading(false);
    }
  };

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
      <div className="m-5 text-slate-500 text-xl">
        {isLoading ? <p>Shaking up your signature sip... </p> : ""}
      </div>
      <div className="">{recipe ? renderRecipe() : ""}</div>
    </div>
  );
}
