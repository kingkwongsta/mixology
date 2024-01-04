import Image from "next/image";
import LiquorChoice from "./components/LiquorChoice";
import ChatGPT from "./components/ChatGPT";
import Welcome from "./components/Welcome";

export default function Home() {
  return (
    <main>
      <Welcome />
      {/* <LiquorChoice /> */}
      {/* <ChatGPT /> */}
    </main>
  );
}
