"use client";
import Image from "next/image";
import LiquorChoice from "./components/LiquorChoice";
import Welcome from "./components/Welcome";
import FlavorChoice from "./components/FlavorChoice";
import MoodChoice from "./components/MoodChoice";
import GenerateCocktail from "./components/GenerateCocktail";
import ModeToggle from "./components/ModeToggle";
import Test from "./components/test";
import { useState } from "react";
import userStore from "./../lib/userStore";

export default function Home() {
  const [showWelcome, setshowWelcome] = useState(true);
  // const [userFlavor, setUserFlavor] = useState();
  const { userFlavor } = userStore();
  const [userLiquor, setUserLiquor] = useState();
  const [userMood, setUserMood] = useState();
  const [recipe, setRecipe] = useState();

  return (
    <main className="m-3">
      {showWelcome ? (
        <Welcome display={() => setshowWelcome(false)} />
      ) : (
        <div>
          <FlavorChoice />
          <LiquorChoice userFlavor={userFlavor} setUserLiquor={setUserLiquor} />
          <MoodChoice userMood={userMood} setUserMood={setUserMood} />
          <GenerateCocktail
            userFlavor={userFlavor}
            userLiquor={userLiquor}
            userMood={userMood}
            recipe={recipe}
            setRecipe={setRecipe}
          />
        </div>
      )}
      {/*----- DEBUG STATE -----*/}
      <button
        onClick={() => console.log(userFlavor)}
        className="p-2 m-5 border-solid border-2 border-sky-500 rounded-lg"
      >
        Debug: get user Flavor
      </button>{" "}
    </main>
  );
}
