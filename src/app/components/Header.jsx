"use client";
import Link from "next/link";
import ModeToggle from "./ModeToggle";

export default function Header() {
  return (
    <div className="flex flex-row justify-center">
      <ModeToggle />
    </div>
  );
}
