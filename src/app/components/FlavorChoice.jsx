"use client";
import { useState, useEffect, useMemo } from "react";
import ButtonListDropdown from "./ButtonListDropdown";
import userStore from "@/lib/userStore";

export default function FlavorChoice() {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedButton, setSelectedButton] = useState(0);
  const { setUserFlavor, setQuestionIndex } = userStore();

  const flavorProfiles = [
    {
      profile: "Sweetness",
      description:
        "Do you prefer your cocktails sweet, tart, or balanced? Popular sweeteners include simple syrup, liqueurs, fruit juices, and flavored syrups.",
    },
    {
      profile: "Sourness",
      description:
        "Citrus fruits, fresh herbs, and some liqueurs add a delightful tartness. Consider how much citrusy punch you want.",
    },
    {
      profile: "Bitterness",
      description:
        "Bitters, aperitifs, and dark-colored spirits like whiskey can add a complex bitterness. Some enjoy it, while others prefer to avoid it.",
    },
    {
      profile: "Spice",
      description:
        "Ginger, chili peppers, and spices like cinnamon or nutmeg can add a unique kick. Decide if you want a fiery cocktail or a smooth sip.",
    },
    {
      profile: "Fruitiness",
      description:
        "Fresh fruits, fruit juices, and infused spirits can add vibrant fruit flavors. Consider your favorite fruits or whether you prefer a tropical or citrusy twist.",
    },
  ];

  function renderFlavorProfiles() {
    return (
      <div className="button-container min-h-[200px]">
        {flavorProfiles.map((flavor, index) => (
          <button
            key={index}
            className={`flavor-button p-2 m-5 border-solid border-2 border-sky-500 rounded-lg ${
              index === selectedButton && "bg-sky-500"
            }`}
            onMouseEnter={() => setIsHovered(flavor.description)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={(e) => {
              setUserFlavor(event.target.textContent);
              setSelectedButton(index);
            }}
          >
            {flavor.profile}
          </button>
        ))}
        {isHovered && (
          <div className="hover-description mx-5 my-2 max-w-[400px]">
            {isHovered}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="m-8 text-center">
      <h1 className="my-10">Pick a flavor profile that you are looking for:</h1>
      <ButtonListDropdown
        buttonContent={flavorProfiles}
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
        isHovered={isHovered}
        setIsHovered={setIsHovered}
        onButtonClick={setUserFlavor}
      />
      {/* <div>{renderFlavorProfiles()}</div> */}
    </div>
  );
}
