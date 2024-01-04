"use client";
import { useState } from "react";

export default function Welcome({ display }) {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      {isVisible && (
        <div className="text-center space-y-4 mt-10">
          <h1 className="text-2xl">Crafted for Your Palate</h1>
          <h2 className="text-xl">Discover a world of exquisite cokctails</h2>
          <button
            onClick={display}
            className="p-2 rounded-2xl border-2 border-cyan-300"
          >
            Start Mixing
          </button>
        </div>
      )}
    </div>
  );
}
