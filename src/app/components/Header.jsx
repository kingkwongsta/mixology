"use client";
import Image from "next/image";
import userStore from "@/lib/userStore";

export default function Header() {
  const { questionIndex, setQuestionIndex } = userStore();
  return (
    <div className="mx-1 flex items-center justify-center ">
      <div className="">
        <Image
          className="mt-2"
          src="/images/home.png"
          alt="home"
          width={25}
          height={25}
          onClick={() => setQuestionIndex(-questionIndex)}
        />
      </div>
    </div>
  );
}
