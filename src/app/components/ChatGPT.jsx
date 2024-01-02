"use client";
import React, { useState } from "react";

function ChatGPT() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    try {
      const response = await fetch("/api/gptrequest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      setResponse(data.data.choices[0].message.content);
      console.log(data);
      console.log(response);
    } catch (error) {
      console.error(error);
      setResponse("Error: Failed to communicate with the server.");
      console.log(response);
    } finally {
      setIsLoading(false);
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
