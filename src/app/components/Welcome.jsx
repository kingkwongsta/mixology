"use client";
import { useState } from "react";

export default function Welcome({ display }) {
  return (
    <div>
      <div className="text-center space-y-4 mt-10">
        <h1 className="text-2xl">Crafted for Your Palate</h1>
        <h2 className="text-xl">Discover a world of exquisite cocktails</h2>
        <button
          onClick={display}
          className="p-2 rounded-2xl border-2 border-cyan-300"
        >
          Start Mixing
        </button>
      </div>
    </div>
  );
}
