export default function LiquorButtons({
  selectedButton,
  setSelectedButton,
  setLiquorChoice,
}) {
  const liquorOptions = ["Vodka", "Whiskey", "Rum", "Gin", "Tequila", "Brandy"];
  return liquorOptions.map((liquor, index) => {
    return (
      <button
        key={index}
        className={`p-2 m-5 border-solid border-2 border-sky-500 rounded-lg ${
          index === selectedButton && "bg-sky-500"
        }`}
        onClick={() => {
          setLiquorChoice(liquor);
          setSelectedButton(index);
        }}
      >
        {liquor}
      </button>
    );
  });
}
