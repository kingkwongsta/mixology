"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Preferences() {
  const [randomNum, setrandomNum] = useState(0);
  const introMessages = [
    "Ready for a flavor adventure? Answer a few quick questions and we'll whip up a drink you'll love!",
    "Forget bland beverages! Unmask your true cocktail personality with our fun and fiery quiz.",
    "Can't decide on a cocktail? Let's unlock your taste buds with a personalized mixology journey!",
    "Imagine sipping the perfect drink, tailored just for you. Take our quiz and make it a reality!",
    "Ditch the guesswork, find your flavor bliss! Discover your signature cocktail in minutes.",
    "Elevate your evenings with bespoke cocktails! Unleash your inner bartender with our taste profile quiz.",
  ];

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

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * introMessages.length);
    setrandomNum(randomIndex);
  }, []);

  function renderFlavorProfiles() {
    return flavorProfiles.map((flavor, index) => {
      return (
        <Button key={index} className="rounded-xl border-2 p-2 m-3">
          {flavor.profile}
        </Button>
      );
    });
  }

  return (
    <div>
      <h1>{introMessages[randomNum]}</h1>
      <h1>Let's start with the flavor profile</h1>
      <div>{renderFlavorProfiles()}</div>
      <Button>Click me</Button>
    </div>
  );
}
