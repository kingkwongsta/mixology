import OpenAI from "openai";

export default async function handler(req, res) {
  try {
    const { prompt } = req.body;

    const openai = new OpenAI({
      apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY, // Use environment variable
    });

    // const response = await openai.createCompletion({
    //   model: "gpt-3.5-turbo", // Or any other preferred model
    //   prompt: prompt,
    //   temperature: 0.7, // Adjust as needed
    //   max_tokens: 150, // Adjust as needed
    //   n: 1,
    //   stop: null,
    // });

    const response = await openai.chat.completions.create({
      messages: [{ role: "user", content: "Say this is a test" }],
      model: "gpt-3.5-turbo",
    });

    // res.status(200).json({ response: response.data.choices[0].text });
    console.log(response);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Failed to retrieve response from ChatGPT." });
  }
}
