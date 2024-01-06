"use client";
import Image from "next/image";
import LiquorChoice from "./components/LiquorChoice";
import ChatGPT from "./components/ChatGPT";
import Welcome from "./components/Welcome";
import Preferences from "./components/Preferences";
import { useState } from "react";

export default function Home() {
  const [showWelcome, setshowWelcome] = useState(true);
  const [userFlavor, setUserFlavor] = useState("");
  const [liquorChoice, setLiquorChoice] = useState();

  return (
    <main>
      {showWelcome ? (
        <Welcome display={() => setshowWelcome(false)} />
      ) : (
        <div>
          <Preferences setUserFlavor={setUserFlavor} />
          <LiquorChoice
            userFlavor={userFlavor}
            setLiquorChoice={setLiquorChoice}
          />
        </div>
      )}
      <button
        onClick={() => console.log(liquorChoice)}
        className="p-2 m-5 border-solid border-2 border-sky-500 rounded-lg"
      >
        Debug: get liquorChoice state
      </button>
      {/* <ChatGPT /> */}
    </main>
  );
}
