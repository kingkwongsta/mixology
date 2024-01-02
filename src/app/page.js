import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [liquorChoice, setLiquorChoice] = useState();

  const liquorOptions = ["Vodka", "Whiskey", "Rum", "Gin", "Tequila", "Brandy"];

  function handleLiquorChoice(liquor) {
    setLiquorChoice(liquor);
  }

  function createLiquorButtons() {
    return liquorOptions.map((spirit, index) => {
      return (
        <button
          key={index}
          className="p-2 m-5 border-solid border-2 border-sky-500 rounded-lg"
        >
          {spirit}
        </button>
      );
    });
  }

  return (
    <main>
      <div className="bg-slate-500 text-lime-300">HELLO</div>
      <div>
        <h2>What liquor are you interested in using?</h2>
        <div>{createLiquorButtons()}</div>
      </div>
    </main>
  );
}
