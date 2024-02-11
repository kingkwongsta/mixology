import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useMemo, useEffect, useState } from "react";
import userStore from "@/lib/userStore";

export default function Welcome({ display }) {
  const { setQuestionIndex } = userStore();

  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        {/* <<<<< FULL IMAGE SIZE >>>>>*/}
        <Image
          className="w-screen h-full object-cover opacity-40 rounded-md"
          src="/images/hero-1.jpg"
          alt="welcome"
          width={1200}
          height={300}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-start mt-[100px] text-center] max-sm:mt-[30px]">
          <div className="pt-4 px-8 rounded-xl backdrop-blur-xs hover:border-[#D9984A] border-2 border-slate-300 shadow-lg max-sm:w-[350px] max-sm:text-center">
            <h1 className="text-4xl text-[#ffffff] font-bold mb-7 drop-shadow-md tracking-wide max-sm:text-2xl">
              Crafted for Your Palate
            </h1>
            <h2 className="text-xl text-center font-semibold drop-shadow-md max-sm:text-md">
              Discover a world of exquisite cocktails
            </h2>
            {/* <h1>{introMessages[randomNum]}</h1> */}
            <Button
              className="bg-[#FF6600] m-[100px] min-w-[200px] shadow-md text-lg text-slate-700 drop-shadow-lg hover:bg-[#ffd299] max-sm:m-4"
              onClick={() => setQuestionIndex(1)}
            >
              <span className="text-white drop-shadow-md">Start Mixing</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
