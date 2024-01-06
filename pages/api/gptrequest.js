export default async function createMessage(req, res) {
  try {
    const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
    if (!apiKey) {
      throw new Error("Missing OPENAI_API_KEY environment variable");
    }

    const url = "https://api.openai.com/v1/chat/completions";
    const { liquor } = req.body;
    console.log(`User's liquor choice is: ${liquor}`);

    const prompt = `Create a creative/unique/advanced cocktail recipe with ${liquor}. JSON should contain name, ingredients (array of key-value pairs with name and quantity), and instructions.`;

    const messages = [
      {
        role: "system",
        content: "You are a helpful assistant designed to output JSON.",
      },
      { role: "user", content: prompt },
    ];

    const body = JSON.stringify({
      messages,
      model: "gpt-3.5-turbo",
      stream: false,
    });

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
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to generate cocktail recipe" });
  }
}
