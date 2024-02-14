"use server";

export async function createCompletion(prompt) {
  if (!prompt) {
    return { error: "prompt is required" };
  }
}
