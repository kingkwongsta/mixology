import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useMemo, useEffect, useState } from "react";
import userStore from "@/lib/userStore";

export default function Welcome({ display }) {
  const [randomNum, setrandomNum] = useState(0);
  const { setQuestionIndex } = userStore();
  const introMessages = useMemo(
    () => [
      "Ready for a flavor adventure? Answer a few quick questions and we'll whip up a drink you'll love!",
      "Forget bland beverages! Unmask your true cocktail personality with our fun and fiery quiz.",
      "Can't decide on a cocktail? Let's unlock your taste buds with a personalized mixology journey!",
      "Imagine sipping the perfect drink, tailored just for you. Take our quiz and make it a reality!",
      "Ditch the guesswork, find your flavor bliss! Discover your signature cocktail in minutes.",
      "Elevate your evenings with bespoke cocktails! Unleash your inner bartender with our taste profile quiz.",
    ],
    []
  );
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * introMessages.length);
    setrandomNum(randomIndex);
  }, [introMessages]);
  return (
    <div>
      <div className="text-center space-y-8 mt-10">
        <h1 className="text-2xl">Crafted for Your Palate</h1>
        <h2 className="text-xl">Discover a world of exquisite cocktails</h2>
        <h1>{introMessages[randomNum]}</h1>
        <div className="my-[200px] mt-10">
          <Button onClick={() => setQuestionIndex(1)}>Start Mixing</Button>
        </div>
      </div>
    </div>
  );
}
