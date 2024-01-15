// import OpenAI from "openai";

// const openai = new OpenAI(process.env.OPENAI_API_KEY);

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     try {
//       const { prompt } = await req.json();
//       const completion = await openai.chat.completions.create({
//         model: "gpt-3.5-turbo",
//         messages: [{ role: "system", content: prompt }],
//       });

//       res.status(200).json({ response: completion.choices[0].message.content });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: "Failed to generate completion" });
//     }
//   } else {
//     res.status(405).json({ error: "Method not allowed" });
//   }
// }

export default function handler(req, res) {
  res.status(200).json({ message: "Hello, world!" });
  console.log("SUPPP");
}
