"use client";
import { useState, useEffect } from "react";

export default function Preferences() {
  const [randomNum, setrandomNum] = useState(0);
  const introMessages = [
    "Ready for a flavor adventure? Answer a few quick questions and we'll whip up a drink you'll love!",
    "Forget bland beverages! Unmask your true cocktail personality with our fun and fiery quiz.",
    "Can't decide on a cocktail? Let's unlock your taste buds with a personalized mixology journey!",
  ];

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * introMessages.length);
    setrandomNum(randomIndex);
  }, []);

  return (
    <div>
      <h1>{introMessages[randomNum]}</h1>
    </div>
  );
}
