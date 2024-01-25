"use client";
import { useState, useEffect, useMemo } from "react";
import userStore from "@/lib/userStore";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import RecipeCard from "./RecipeCard";

export default function GenerateCocktail({}) {
  const {
    userFlavor,
    userLiquor,
    userMood,
    drinkRecipe,
    setDrinkRecipe,
    setQuestionIndex,
  } = userStore();

  const [selected, setSelected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [buttonName, setButtonName] = useState("");
  const [progress, setProgress] = useState(0);

  const buttonNameList = useMemo(
    () => [
      "Shake It Up!",
      "Pour Me Something Perfect",
      "Surprise Me, Bartender!",
      "Let's Get This Party Started",
      "Mix Me a Masterpiece",
      "What's My Cocktail Personality?",
      "Spin the Cocktail Wheel of Fortune",
      "Deal Me a Delicious Drink",
      "Find My Flavor Match",
      "Unlock My Ultimate Cocktail",
      "Quench My Thirst for Something New",
      "Celebrate with a Custom Cocktail",
      "Mix My Magic Potion",
      "Create My Cocktail Kingdom",
      "Blast Off to Flavortown",
      "Escape to Cocktail Island",
    ],
    []
  );

  useEffect(() => {
    // Generate a random index only once on component mount
    const calculateRandomIndex = () =>
      Math.floor(Math.random() * buttonNameList.length);
    const randomIndex = calculateRandomIndex();
    setButtonName(buttonNameList[randomIndex]);
  }, []);
  useEffect(() => {
    let timerId;

    const incrementProgress = () => {
      setProgress((prevProgress) => Math.min(prevProgress + 5, 100)); // Increment by 10%, capped at 100%
    };

    timerId = setInterval(incrementProgress, 1000); // Update every 500ms

    return () => clearInterval(timerId); // Clear interval on unmount
  }, []);

  const getCocktail = async () => {
    setIsLoading(true);

    try {
      const response = await fetch("/api/gptrequest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userFlavor, userLiquor, userMood }),
      });

      const data = await response.json();

      if (data.data.choices && data.data.choices.length > 0) {
        setDrinkRecipe(JSON.parse(data.data.choices[0].message.content));
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

  return (
    <div className="mt-10 flex flex-col items-center">
      <div>
        <p className="text-lg">
          You are in a{" "}
          <span
            onClick={() => setQuestionIndex(-3)}
            className="text-xl font-semibold text-[#F2ADA7] lowercase "
          >
            {userMood}
          </span>{" "}
          mood and are looking for{" "}
          <span className="text-xl font-semibold text-[#F2ADA7] lowercase ">
            {userFlavor}
          </span>{" "}
          drink with{" "}
          <span className="text-xl font-semibold text-[#F2ADA7] lowercase ">
            {userLiquor}
          </span>{" "}
        </p>
      </div>
      {drinkRecipe ? (
        ""
      ) : (
        <Button
          className={`max-w-[250px] mt-12 ${selected && "bg-[#2E83F2]"}`}
          onClick={() => {
            setSelected(!selected);
            getCocktail();
          }}
        >
          {buttonName}
        </Button>
      )}
      <div className=" text-slate-500 text-xl">
        {isLoading ? (
          <div className="flex flex-col items-center space-y-8 mt-8">
            <p>Shaking up your signature sip... </p>
            <Progress value={progress} className="w-[60%]" />
          </div>
        ) : (
          ""
        )}
      </div>
      {/* <<<<<< RENDER RECIPE >>>>> */}
      <div className="min-h-[300px]">
        {drinkRecipe ? <RecipeCard drinkRecipe={drinkRecipe} /> : ""}
      </div>
      <div>
        {drinkRecipe ? (
          <Button
            className="mt-[50px] bg-[#2E83F2]"
            onClick={() => {
              setQuestionIndex(-4);
              setDrinkRecipe("");
            }}
          >
            Start Over
          </Button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
