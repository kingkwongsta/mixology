export default async function createMessage(req, res) {
  const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
  const url = "https://api.openai.com/v1/chat/completions";
  const { prompt } = req.body;
  const messages = [
    {
      role: "system",
      content: "You have every PHD available and read ever book known to man",
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
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
