"use client";
import { useState, useEffect, useMemo } from "react";
import ButtonListDropdown from "./ButtonListDropdown";
import userStore from "@/lib/userStore";
import QuestionCard from "./QuestionCard";

export default function FlavorChoice() {
  const [isHovered, setIsHovered] = useState(
    "Do you prefer your cocktails sweet, tart, or balanced? Popular sweeteners include simple syrup, liqueurs, fruit juices, and flavored syrups."
  );
  const [selectedButton, setSelectedButton] = useState();
  const { setUserFlavor, setQuestionIndex } = userStore();

  const flavorProfiles = [
    {
      profile: "Sweet",
      description:
        "Do you prefer your cocktails sweet, tart, or balanced? Popular sweeteners include simple syrup, liqueurs, fruit juices, and flavored syrups.",
    },
    {
      profile: "Sour",
      description:
        "Citrus fruits, fresh herbs, and some liqueurs add a delightful tartness. Consider how much citrusy punch you want.",
    },
    {
      profile: "Bitter",
      description:
        "Bitters, aperitifs, and dark-colored spirits like whiskey can add a complex bitterness. Some enjoy it, while others prefer to avoid it.",
    },
    {
      profile: "Spicey",
      description:
        "Ginger, chili peppers, and spices like cinnamon or nutmeg can add a unique kick. Decide if you want a fiery cocktail or a smooth sip.",
    },
    {
      profile: "Fruity",
      description:
        "Fresh fruits, fruit juices, and infused spirits can add vibrant fruit flavors. Consider your favorite fruits or whether you prefer a tropical or citrusy twist.",
    },
  ];

  return (
    <QuestionCard
      question="Pick a flavor profile that you are looking for: "
      buttons={
        <ButtonListDropdown
          buttonContent={flavorProfiles}
          selectedButton={selectedButton}
          setSelectedButton={setSelectedButton}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
      }
    />
  );
}
