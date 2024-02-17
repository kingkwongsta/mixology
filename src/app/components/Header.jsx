"use client";
import Image from "next/image";
import HomeButton from "./buttons/HomeButton";
import ModeToggle from "./buttons/ModeToggle";
import userStore from "@/lib/userStore";
import { Button } from "@/components/ui/button";

export default function Header() {
  const { questionIndex, setQuestionIndex, setDrinkRecipe } = userStore();
  return (
    <div className="container flex max-w-5xl items-center justify-between px-3">
      <div className="">
        <Image
          className="mt-2"
          src="/images/home.png"
          alt="home"
          width={25}
          height={25}
          onClick={() => {
            setQuestionIndex(-questionIndex);
            setDrinkRecipe("");
          }}
        />
      </div>
      <button size="sm" variant="ghost">
        Sign In
      </button>
    </div>
  );
}
