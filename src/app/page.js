import Image from "next/image";
import LiquorChoice from "./components/LiquorChoice";
import ChatGPT from "./components/ChatGPT";

export default function Home() {
  return (
    <main>
      <LiquorChoice />
      <ChatGPT />
    </main>
  );
}
