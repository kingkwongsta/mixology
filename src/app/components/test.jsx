import React, { useState } from "react";

export default function Test() {
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
      <div>HELLO</div>
    </>
  );
}
