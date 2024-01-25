"use client";
import Image from "next/image";
import HomeButton from "./buttons/HomeButton";
import ModeToggle from "./buttons/ModeToggle";

export default function Header() {
  return (
    // <div className="flex items-center justify-center mx-1 bg-gradient-to-r from-[#F2ADA7] to-[#9BF2F2] ">
    //   <div className="flex-grow ">
    //     <HomeButton className="" />
    //   </div>
    //   <div className="flex-none ">
    //     <ModeToggle className="" />
    //   </div>
    // </div>
    <div className="flex items-center justify-center mx-1 ">
      <div className="">
        <Image
          className="mt-2"
          src="/images/home.png"
          alt="home"
          width={25}
          height={25}
        />
      </div>
    </div>
  );
}
