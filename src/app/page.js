import Image from "next/image";

export default function Home() {
  const liquor = ["Vodka", "Whiskey", "Rum", "Gin", "Tequila", "Brandy"];

  function createLiquorButtons() {
    return liquor.map((spirit, index) => {
      return <button key={index}>{spirit}</button>;
    });
  }

  return (
    <main>
      <div className="bg-slate-500 text-lime-300">HELLO</div>
      <div>
        <h2>What liquor are you interested in using?</h2>
        <div>{createLiquorButtons()}</div>
      </div>
    </main>
  );
}
