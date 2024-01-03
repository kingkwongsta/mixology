export default async function handler(req, res) {
  const { liquor } = req.body;

  console.log(`Received liquor: ${liquor}`);
  console.log(`req: ${req}`);

  res.status(200).json({ message: `This is the ${liquor}` });
}
