export default async function createMessage(req, res) {
  const { prompt } = req.body;
  console.log(prompt);
  res.status(200).json({ message: "I am in the root pages folder - not src" });
}
