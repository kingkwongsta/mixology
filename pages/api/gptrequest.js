export default async function createMessage(req, res) {
  const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
  const url = "https://api.openai.com/v1/chat/completions";
  const { liquor } = req.body;
  console.log(`User's liquor choice: ${liquor}`);

  const prompt = `create a creative/unique/advance cocktail recipe with ${liquor},json should contain name ingredients instructions,ingredients is an array of key value pairs with name and quantity`;
  console.log(`Sending this prompt: ${prompt}`);

  const messages = [
    {
      role: "system",
      content: "You are a helpful assistant designed to output JSON",
    },
    { role: "user", content: prompt },
  ];

  const body = JSON.stringify({
    messages,
    model: "gpt-3.5-turbo",
    stream: false,
  });

  try {
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
    console.log("HELLLO");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
