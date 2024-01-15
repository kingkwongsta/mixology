"use client";
import Image from "next/image";
import LiquorChoice from "./components/LiquorChoice";
import Welcome from "./components/Welcome";
import FlavorChoice from "./components/FlavorChoice";
import MoodChoice from "./components/MoodChoice";
import GenerateCocktail from "./components/GenerateCocktail";
import Header from "./components/Header";
import ModeToggle from "./components/ModeToggle";
import Test from "./components/test";
import { useState } from "react";

export default function Home() {
  const [showWelcome, setshowWelcome] = useState(true);
  const [userFlavor, setUserFlavor] = useState();
  const [userLiquor, setUserLiquor] = useState();
  const [userMood, setUserMood] = useState();
  const [recipe, setRecipe] = useState();

  return (
    <main className="m-3">
      {/* <Test /> */}
      {/* <Header /> */}
      <ModeToggle />
      {showWelcome ? (
        <Welcome display={() => setshowWelcome(false)} />
      ) : (
        <div>
          <FlavorChoice setUserFlavor={setUserFlavor} />
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
      {/* <button
        onClick={() => console.log(recipe)}
        className="p-2 m-5 border-solid border-2 border-sky-500 rounded-lg"
      >
        Debug: get recipe state
      </button> */}
      {/*----- END DEBUG STATE -----*/}
    </main>
  );
}
