"use client";
import Image from "next/image";
import LiquorChoice from "./components/LiquorChoice";
import Welcome from "./components/Welcome";
import FlavorChoice from "./components/FlavorChoice";
import MoodChoice from "./components/MoodChoice";
import GenerateCocktail from "./components/GenerateCocktail";
import userStore from "./../lib/userStore";
import Transition from "@/lib/transition";
import RightImage from "./layout/RightImage";

export default function Home() {
  const { userFlavor, userLiquor, userMood, drinkRecipe, questionIndex } =
    userStore();

  return (
    <main className="m-3">
      <RightImage />
      {/* {questionIndex === 0 && (
        <Transition>
          <Welcome />
        </Transition>
      )}
      {questionIndex === 1 && (
        <Transition>
          <FlavorChoice />
        </Transition>
      )}
      {questionIndex === 2 && (
        <Transition>
          <LiquorChoice />
        </Transition>
      )}
      {questionIndex === 3 && (
        <Transition>
          <MoodChoice />
        </Transition>
      )}
      {questionIndex === 4 && (
        <Transition>
          <GenerateCocktail />
        </Transition>
      )} */}
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
