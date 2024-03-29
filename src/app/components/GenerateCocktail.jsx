"use client";
import { useState, useEffect, useMemo } from "react";
import userStore from "@/lib/userStore";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import RecipeCard from "./RecipeCard";
import Image from "next/image";
import { toast } from "sonner";
import { createCompletion } from "./../actions";

export default function GenerateCocktail({}) {
  const {
    userFlavor,
    userLiquor,
    userMood,
    drinkRecipe,
    setDrinkRecipe,
    drinkImage,
    setDrinkImage,
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
    [],
  );
  // Create random number to set button text
  useEffect(() => {
    const calculateRandomIndex = () =>
      Math.floor(Math.random() * buttonNameList.length);
    const randomIndex = calculateRandomIndex();
    setButtonName(buttonNameList[randomIndex]);
  }, []);
  // Progress bar generator
  useEffect(() => {
    let timerId;

    const incrementProgress = () => {
      setProgress((prevProgress) => Math.min(prevProgress + 5, 100)); // Increment by 10%, capped at 100%
    };

    timerId = setInterval(incrementProgress, 1000); // Update every 500ms

    return () => clearInterval(timerId); // Clear interval on unmount
  }, []);
  async function getRecipe() {
    setIsLoading(true);
    try {
      const response = await createCompletion(userFlavor, userLiquor, userMood);
      //   const imageResponse = await createImage();

      //   if (response && imageResponse) {
      //     // Check for existence of recipe
      //     setDrinkRecipe(response);
      //     setDrinkImage(imageResponse);
      //   } else {
      //     console.log("recipe unavailable");
      //   }
      // } catch (error) {
      //   console.log(error);
      // } finally {
      //   setIsLoading(false);

      if (response) {
        setDrinkRecipe(response);
      } else {
        console.log("recipe unavailable");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div className="mt-10 flex flex-col items-center">
      <div className="shadow-xs rounded-lg p-2">
        <p className="text-lg">
          Feeling{" "}
          <span
            onClick={() => setQuestionIndex(-3)}
            className="text-xl font-semibold lowercase text-[#dd6236] "
          >
            {userMood}
          </span>
          {", "}
          you search for a drink with a{" "}
          <span className="text-xl font-semibold lowercase text-[#dd6236] ">
            {userFlavor}
          </span>{" "}
          taste, perhaps something containing{" "}
          <span className="text-xl font-semibold lowercase text-[#dd6236] ">
            {userLiquor}
          </span>{" "}
        </p>
      </div>
      {drinkRecipe ? (
        ""
      ) : (
        <form action={getRecipe}>
          <Button
            className={`mt-12 max-w-[250px] ${selected && "bg-[#D9D9D9]"}`}
            type="submit"
            onClick={() => {
              setSelected(!selected);
              setIsLoading(!isLoading);
            }}
          >
            {buttonName}
          </Button>
        </form>
      )}
      <div className=" text-xl text-slate-500">
        {isLoading ? (
          <div className="mt-8 flex flex-col items-center space-y-8">
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
            className="mt-[50px] bg-[#BFB2AA] opacity-80 shadow-lg"
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
