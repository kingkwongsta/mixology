import { Button } from "@/components/ui/button";

export default function LiquorButtons({
  selectedButton,
  setSelectedButton,
  setUserLiquor,
}) {
  const liquorOptions = ["Vodka", "Whiskey", "Rum", "Gin", "Tequila", "Brandy"];
  return liquorOptions.map((liquor, index) => {
    return (
      <Button
        key={index}
        className={`m-5 ${index === selectedButton && "bg-sky-500"}`}
        onClick={() => {
          setUserLiquor(liquor);
          setSelectedButton(index);
        }}
      >
        {liquor}
      </Button>
    );
  });
}
