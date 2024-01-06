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

  return (
    <main>
      {showWelcome ? (
        <Welcome display={() => setshowWelcome(false)} />
      ) : (
        <div>
          <Preferences setUserFlavor={setUserFlavor} />
          {/* <LiquorChoice /> */}
        </div>
      )}
      {/* <ChatGPT /> */}
    </main>
  );
}
