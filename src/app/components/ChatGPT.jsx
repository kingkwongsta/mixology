"use client";
import React, { useState, useEffect } from "react";
import OpenAI from "openai";

function ChatGPT() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/chatgpt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      setResponse(data.response);
    } catch (error) {
      console.error(error);
      setResponse("Error: Failed to communicate with the server.");
    }
  };

  return (
    <div>
      <form className="" onSubmit={handleSubmit}>
        <textarea
          className="text-slate-500 p-1"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt for ChatGPT..."
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Generating..." : "Submit"}
        </button>
      </form>
      <div>{response}</div>
    </div>
  );
}

export default ChatGPT;
