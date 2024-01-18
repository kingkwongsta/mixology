"use client";
import LiquorChoice from "./components/LiquorChoice";
import Welcome from "./components/Welcome";
import FlavorChoice from "./components/FlavorChoice";
import MoodChoice from "./components/MoodChoice";
import GenerateCocktail from "./components/GenerateCocktail";
import userStore from "./../lib/userStore";
import Transition from "@/lib/transition";
import QuestionLayout from "./layout/QuestionLayout";
import flavorImg from "./../../public/images/flavor.jpg";
import ButtonTest from "./components/buttontest";

export default function Home() {
  const { userFlavor, userLiquor, userMood, drinkRecipe, questionIndex } =
    userStore();
  return (
    <main className="m-3">
      <div>
        <ButtonTest />
      </div>
      {questionIndex === 0 && (
        <Transition>
          <Welcome />
        </Transition>
      )}
      {questionIndex === 1 && (
        <Transition>
          <QuestionLayout>
            <FlavorChoice
              imageSrc={flavorImg}
              imageAlt="pictures of flavor"
              imagePosition="right"
            />
          </QuestionLayout>
        </Transition>
      )}

      {questionIndex === 2 && (
        <Transition>
          <QuestionLayout>
            <LiquorChoice
              imageSrc={flavorImg}
              imageAlt="pictures of flavor"
              imagePosition="left"
            />
          </QuestionLayout>
        </Transition>
      )}
      {questionIndex === 3 && (
        <Transition>
          <QuestionLayout>
            <MoodChoice
              imageSrc={flavorImg}
              imageAlt="pictures of flavor"
              imagePosition="right"
            />
          </QuestionLayout>
        </Transition>
      )}
      {questionIndex === 4 && (
        <Transition>
          <GenerateCocktail />
        </Transition>
      )}
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
