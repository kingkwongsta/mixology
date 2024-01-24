"use client";
import { useState, useEffect, useMemo } from "react";
import userStore from "@/lib/userStore";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function GenerateCocktail({}) {
  const {
    userFlavor,
    userLiquor,
    userMood,
    drinkRecipe,
    setDrinkRecipe,
    setQuestionIndex,
  } = userStore();

  const [randomNum, setRandomNum] = useState();
  const [selected, setSelected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [buttonName, setButtonName] = useState("");

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

  function renderRecipe() {
    return (
      <div className="flex flex-row space-x-10">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Ingredients</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              {drinkRecipe.ingredients
                .filter((item) => item.name !== "Ice cubes")
                .map((ingredient, index) => (
                  <li key={index}>
                    {ingredient.quantity} {ingredient.name.toLowerCase()}
                  </li>
                ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="w-[500px]">
          <CardHeader>
            <CardTitle>Instructions</CardTitle>
          </CardHeader>
          <CardContent>
            <ol>
              {drinkRecipe.instructions
                .split("\n")
                .map((instruction, index) => (
                  <li key={index}>{instruction.trim()}</li>
                ))}
            </ol>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="mt-10 flex flex-col items-center">
      <Button
        className={`max-w-[250px] mt-12 ${selected && "bg-[#2E83F2]"}`}
        onClick={() => {
          setSelected(!selected);
          getCocktail();
        }}
      >
        {buttonName}
      </Button>
      <div className="m-10 text-slate-500 text-xl">
        {isLoading ? <p>Shaking up your signature sip... </p> : ""}
      </div>
      <div className="min-h-[300px]">{drinkRecipe ? renderRecipe() : ""}</div>
      <div>
        {drinkRecipe ? (
          <Button className="mt-[100px]" onClick={() => setQuestionIndex(-4)}>
            Start Over
          </Button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
