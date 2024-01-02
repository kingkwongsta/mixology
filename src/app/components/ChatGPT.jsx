import React, { useState, useEffect } from "react";
import { Configuration, OpenAIApi } from "openai";

function ChatGPT() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Configure OpenAI API with your API key
    const configuration = new Configuration({
      apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const getResponse = async () => {
      try {
        setIsLoading(true);
        const response = await openai.createCompletion({
          model: "text-davinci-003", // Or any other preferred model
          prompt: prompt,
          temperature: 0.7, // Adjust as needed
          max_tokens: 150, // Adjust as needed
          n: 1,
          stop: null,
        });
        setResponse(response.data.choices[0].text);
      } catch (error) {
        console.error(error);
        setResponse("Error: Failed to retrieve response from ChatGPT.");
      } finally {
        setIsLoading(false);
      }
    };

    return () => openai.close(); // Close the API connection on cleanup
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await getResponse();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
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
