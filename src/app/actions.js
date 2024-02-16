"use server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function createCompletion(userFlavor, userLiquor, userMood) {
  if (!userFlavor && !userLiquor && !userMood) {
    return { error: "preferences have not been set" };
  }

  // Generate recipe using OpenAI - GPT-3.5
  const userPreferences = `contains ${userLiquor} and emphasizes a ${userFlavor} flavor profile for a ${userMood} mood`;

  const instructions = `create a unique cocktail based on the user preferences in the text delimited by triple periods, ensure the drink name doesn't use the same/similar words to ${userMood},${userFlavor},${userLiquor}, `;
  const output_format =
    'JSON output should contain: "name", "ingredients" (array of key-value pairs with "name" and "quantity"), "instructions".';
  const prompt = instructions + output_format + `...${userPreferences}...`;
  const messages = [
    {
      role: "system",
      content: "You are a helpful mixologist designed to output JSON.",
    },
    { role: "user", content: prompt },
  ];

  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages,
  });

  const recipeResponse = completion.choices[0].message.content;
  if (!recipeResponse) {
    return { error: "Unable to generate recipe" };
  }

  try {
    // Parse the GPT-3.5 response as JSON
    const recipe = JSON.parse(recipeResponse);

    // Ensure it has the expected properties
    if (
      !recipe.name ||
      !Array.isArray(recipe.ingredients) ||
      !recipe.instructions
    ) {
      throw new Error("Invalid recipe format");
    }
    console.log("action completed");
    console.log(recipe);
    return recipe;
  } catch (error) {
    console.error("Error parsing recipe:", error);
    return { error: "Unable to parse recipe as JSON" };
  }

  // generate image using OctoAI - Stable Diffusion XL

  //upload image to supabase storage

  //create new blog post in supabase
  //   const { data: blog, error: blogError } = await supabase
  //     .from("blogs")
  //     .insert([
  //       { title: "hello", content: recipe, imageUrl: "imgage", userId: "123" },
  //     ])
  //     .select();

  //   if (blogError) {
  //     return { error: "Unable to insert the blog into the database." };
  //   }

  //   const blogId = blog?.[0]?.id;

  //   revalidatePath("/");
  //   redirect(`/blog/${blogId}`);
}
