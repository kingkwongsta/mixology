"use client";
import React, { useState } from "react";

export default function Test() {
  const { data, setData } = useState();
  const prompt = "Why is the sky blue? Give me a detailed scientific answer";

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/openai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const responseData = await response.json();
      if (responseData) {
        setData(responseData);
        console.log(responseData);
      }

      // ... Handle response
    } catch (error) {
      // ... Handle error
    }
  };

  return (
    <>
      <div className="space-x-4">
        <button onClick={handleSubmit}>Get Data</button>
        <button onClick={() => console.log(data)}>Display Data</button>
      </div>
    </>
  );
}
