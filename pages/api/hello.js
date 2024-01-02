export default function handler(req, res) {
  res.status(200).json({ message: "I am in the root pages folder - not src" });
}
