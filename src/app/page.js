"use client";
import Image from "next/image";
import LiquorChoice from "./components/LiquorChoice";
import Welcome from "./components/Welcome";
import Preferences from "./components/Preferences";
import Mood from "./components/Mood";
import GenerateCocktail from "./components/GenerateCocktail";
import { ModeToggle } from "./components/ModeToggle";
import { useState } from "react";

export default function Home() {
  const [showWelcome, setshowWelcome] = useState(true);
  const [userFlavor, setUserFlavor] = useState();
  const [userLiquor, setUserLiquor] = useState();
  const [userMood, setUserMood] = useState();
  const [recipe, setRecipe] = useState();

  return (
    <main className="flex flex-row space-x-3 m-3">
      <div className="left-bar">
        {showWelcome ? (
          <Welcome display={() => setshowWelcome(false)} />
        ) : (
          <div>
            <Preferences setUserFlavor={setUserFlavor} />
            <LiquorChoice
              userFlavor={userFlavor}
              setUserLiquor={setUserLiquor}
            />
            <Mood userMood={userMood} setUserMood={setUserMood} />
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
          onClick={() => console.log(userMood)}
          className="p-2 m-5 border-solid border-2 border-sky-500 rounded-lg"
        >
          Debug: get liquorChoice state
        </button> */}
        {/*----- END DEBUG STATE -----*/}
      </div>
      <div className="right-bar">
        <ModeToggle />
        {userFlavor && <h3>User Flavor: {userFlavor}</h3>}
        {userLiquor && <h3>Liquor Choice: {userLiquor}</h3>}
        {userMood && <h3>Mood: {userMood}</h3>}
      </div>
    </main>
  );
}
