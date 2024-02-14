"use server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function createCompletion(prompt) {
  if (!prompt) {
    return { error: "prompt is required" };
  }

  // generate recipe using OpenAI - GPT-3.5
  const { userFlavor, userLiquor, userMood } = prompt;

  const userPreferences = `contains ${userLiquor} and emphasizes a ${userFlavor} flavor profile for a ${userMood} mood`;

  const instructions = `create a unique cocktail based on the user preferences in the text delimited by triple periods, ensure the drink name doesn't use the same/similar words to ${userMood},${userFlavor},${userLiquor}, `;
  const output_format =
    "JSON output should contain: name, ingredients (array of key-value pairs with name and quantity), instructions.";
  const prompt = instructions + output_format + `...${userPreferences}...`;
  const messages = [
    {
      role: "system",
      content: "You are a helpful mixologist designed to output JSON.",
    },
    { role: "user", content: prompt },
  ];

  const completion = await openai.chat.completions.create({
    model: gpt - 3.5 - turbo,
    messages,
  });

  // generate image using OctoAI - Stable Diffusion XL

  //upload image to supabase storage

  //create new blog post in supabase
}
