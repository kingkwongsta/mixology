"use client";
import HomeButton from "./buttons/HomeButton";
import ModeToggle from "./buttons/ModeToggle";

export default function Header() {
  return (
    <div className="flex flex-row justify-center">
      <HomeButton />
      <ModeToggle />
    </div>
  );
}
