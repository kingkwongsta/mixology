"use client";
import React, { useState } from "react";

export default function Test() {
  const { data, setData } = useState();
  const prompt = "Why is the sky blue? Give me a detailed scientific answer";

  const handleSubmit = async (e) => {
    e.preventDefault();
    // ...

    try {
      const responseData = await fetch("/api/openai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      // ... Handle response
    } catch (error) {
      // ... Handle error
    }
  };

  return (
    <>
      <div className="space-x-4">
        <button onClick={handleSubmit()}>Click Me</button>
        <button onClick={() => console.log(data)}>Click Me</button>
      </div>
    </>
  );
}
