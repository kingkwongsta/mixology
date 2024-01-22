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

// export default function Header() {
//   return (
//     <header className="header">
//       <nav>
//         <Link href="/">Home</Link>
//         <Link href="/about">About</Link>
//         <ModeToggle />
//       </nav>
//     </header>
//   );
// }
