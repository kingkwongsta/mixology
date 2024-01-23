"use client";
import HomeButton from "./buttons/HomeButton";
import ModeToggle from "./buttons/ModeToggle";

export default function Header() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex-grow ">
        <HomeButton className="" />
      </div>
      <div className="flex-none ">
        <ModeToggle className="" />
      </div>
    </div>
  );
}
