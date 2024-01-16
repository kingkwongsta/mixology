"use client";
import Image from "next/image";
import LiquorChoice from "./components/LiquorChoice";
import Welcome from "./components/Welcome";
import FlavorChoice from "./components/FlavorChoice";
import MoodChoice from "./components/MoodChoice";
import GenerateCocktail from "./components/GenerateCocktail";
import userStore from "./../lib/userStore";

export default function Home() {
  const { userFlavor, userLiquor, userMood, drinkRecipe, questionIndex } =
    userStore();

  return (
    <main className="m-3">
      {questionIndex === 0 && <Welcome />}
      {questionIndex === 1 && <FlavorChoice />}
      {questionIndex === 2 && <LiquorChoice />}
      {questionIndex === 3 && <MoodChoice />}
      {questionIndex === 4 && <GenerateCocktail />}
      {/*----- DEBUG STATE -----*/}
      {/* <button
        onClick={() => console.log(questionIndex)}
        className="p-2 m-5 border-solid border-2 border-sky-500 rounded-lg"
      >
        Debug: get Question Index
      </button>{" "} */}
    </main>
  );
}
