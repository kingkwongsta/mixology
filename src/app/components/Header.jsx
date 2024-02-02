"use client";
import Image from "next/image";
import HomeButton from "./buttons/HomeButton";
import ModeToggle from "./buttons/ModeToggle";
import userStore from "@/lib/userStore";

export default function Header() {
  const { questionIndex, setQuestionIndex, setRecipe } = userStore();
  return (
    <div className="flex items-center justify-center mx-1 ">
      <div className="">
        <Image
          className="mt-2"
          src="/images/home.png"
          alt="home"
          width={25}
          height={25}
          onClick={() => {
            setQuestionIndex(-questionIndex);
            setRecipe("");
          }}
        />
      </div>
    </div>
  );
}
