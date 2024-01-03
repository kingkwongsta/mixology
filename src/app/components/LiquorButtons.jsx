export default function LiquorButtons({ handleLiquorChoice }) {
  const liquorOptions = ["Vodka", "Whiskey", "Rum", "Gin", "Tequila", "Brandy"];
  return liquorOptions.map((liquor, index) => {
    return (
      <button
        key={index}
        className="p-2 m-5 border-solid border-2 border-sky-500 rounded-lg"
        onClick={() => handleLiquorChoice(liquor)}
      >
        {liquor}
      </button>
    );
  });
}
