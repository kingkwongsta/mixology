import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useMemo, useEffect, useState } from "react";
import userStore from "@/lib/userStore";

export default function Welcome({ display }) {
  const { setQuestionIndex } = userStore();
  // const [randomNum, setrandomNum] = useState(0);

  // const introMessages = useMemo(
  //   () => [
  //     "Ready for a flavor adventure? Answer a few quick questions and we'll whip up a drink you'll love!",
  //     "Forget bland beverages! Unmask your true cocktail personality with our fun and fiery quiz.",
  //     "Can't decide on a cocktail? Let's unlock your taste buds with a personalized mixology journey!",
  //     "Imagine sipping the perfect drink, tailored just for you. Take our quiz and make it a reality!",
  //     "Ditch the guesswork, find your flavor bliss! Discover your signature cocktail in minutes.",
  //     "Elevate your evenings with bespoke cocktails! Unleash your inner bartender with our taste profile quiz.",
  //   ],
  //   []
  // );
  // useEffect(() => {
  //   const randomIndex = Math.floor(Math.random() * introMessages.length);
  //   setrandomNum(randomIndex);
  // }, [introMessages]);
  // return (
  //   <div>
  //     <div className=" flex flex-col items-center text-center mt-10">
  //       <h1 className="text-2xl text-[#F2ADA7] font-bold m-7">
  //         Crafted for Your Palate
  //       </h1>
  //       <h2 className="text-xl font-medium	">
  //         Discover a world of exquisite cocktails
  //       </h2>
  //       {/* <h1>{introMessages[randomNum]}</h1> */}
  //       <Button
  //         className="bg-[#2E83F2] m-10"
  //         onClick={() => setQuestionIndex(1)}
  //       >
  //         Start Mixing
  //       </Button>
  //       <Image
  //         className="mt-10 opacity-60"
  //         src="/images/welcome.jpg"
  //         alt="welcome"
  //         width={500}
  //         height={300}
  //       />
  //     </div>
  //   </div>
  // );
  return (
    <div className="flex items-center justify-center ">
      <div className="relative">
        <Image
          className="w-full h-full object-cover opacity-80 rounded-md"
          src="/images/welcome.jpg"
          alt="welcome"
          width={1200}
          height={300}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-start">
          <h1 className="text-2xl text-[#F2ADA7] font-bold mt-14 mb-7 shadow-lg">
            Crafted for Your Palate
          </h1>
          <h2 className="text-xl font-medium shadow-lg">
            Discover a world of exquisite cocktails
          </h2>
          {/* <h1>{introMessages[randomNum]}</h1> */}
          <Button
            className="bg-[#2E83F2] mt-[100px] shadow-lg"
            onClick={() => setQuestionIndex(1)}
          >
            Start Mixing
          </Button>
        </div>
      </div>
    </div>
  );
}
