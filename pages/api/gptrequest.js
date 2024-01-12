export default async function createMessage(req, res) {
  try {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      throw new Error("Missing OPENAI_API_KEY environment variable");
    }

    const url = "https://api.openai.com/v1/chat/completions";
    const { userFlavor, userLiquor, userMood } = req.body;

    // const prompt = `Create a creative/unique/advanced cocktail recipe with ${userLiquor} that emphasizes a ${userFlavor} flavor profile for a ${userMood} mood. JSON should contain name, ingredients (array of key-value pairs with name and quantity), and instructions.`;
    const userPreferences = `Create a creative/unique/advanced cocktail recipe with ${userLiquor} that emphasizes a ${userFlavor} flavor profile for a ${userMood} mood`;

    const instructions =
      "create a unique advance cocktail based on the user preferences in the text delimited by triple backticks";
    const output_format =
      "JSON ouput should look like; JSON should contain name, ingredients (array of key-value pairs with name and quantity), and instructions.";
    const messages = [
      {
        role: "system",
        content: "You are a helpful mixologist designed to output JSON.",
      },
      { role: "user", content: prompt },
    ];

    const body = JSON.stringify({
      messages,
      model: "gpt-3.5-turbo",
      stream: false,
    });

    //  <<<<< DEBUG >>>>>
    console.log(`User's liquor choice is: ${userLiquor}`);
    console.log(`Prmopt sent to OpenAI API: ${prompt}`);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body,
    });

    const data = await response.json();
    res.status(200).json({ data });
    console.log("Data fetch was successful");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to generate cocktail recipe" });
  }
}
