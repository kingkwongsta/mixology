"use client";
import { useState, useEffect, useMemo } from "react";
import ButtonListDropdown from "./ButtonListDropdown";
import userStore from "@/lib/userStore";

export default function FlavorChoice() {
  const [isHovered, setIsHovered] = useState(
    "Do you prefer your cocktails sweet, tart, or balanced? Popular sweeteners include simple syrup, liqueurs, fruit juices, and flavored syrups."
  );
  const [selectedButton, setSelectedButton] = useState();
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

  return (
    <div className="m-8">
      <h1
        className="my-10 text-3xl
"
      >
        Pick a flavor profile that you are looking for:
      </h1>
      <ButtonListDropdown
        buttonContent={flavorProfiles}
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
        isHovered={isHovered}
        setIsHovered={setIsHovered}
      />
      {/* <div>{renderFlavorProfiles()}</div> */}
    </div>
  );
}
