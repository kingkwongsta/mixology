import Image from "next/image";
import userStore from "@/lib/userStore";

export default function RecipeCard({ drinkRecipe }) {
  const { drinkImage } = userStore();
  return (
    <div>
      <h2 className="text-center text-3xl font-semibold text-white mt-10 mb-3">
        {drinkRecipe.name}
      </h2>

      <div className="flex flex-row space-x-10">
        <div className="flex flex-col space-y-8 max-w-[600px]">
          <div className="shadow-xl basis-1/2 p-10 rounded-xl">
            <h2 className="text-[#8C4130] font-semibold text-xl mb-5">Ingredients</h2>
            <ul>
                {drinkRecipe.ingredients
                  .filter((item) => item.name !== "Ice cubes")
                  .map((ingredient, index) => (
                    <li key={index}>
                      {ingredient.quantity} {ingredient.name.toLowerCase()}
                    </li>
                  ))}
              </ul>
          </div>
          <div className="shadow-xl basis-1/2 p-10 rounded-xl">
            <h2 className="text-[#8C4130] font-semibold text-xl mb-5">Instructions</h2>
            <ol>
                {drinkRecipe.instructions
                  .split("\n")
                  .map((instruction, index) => (
                    <li key={index}>{instruction.trim()}</li>
                  ))}
              </ol>
          </div>
        </div>
        <div className="shadow-xl rounded-xl h-full">
          {drinkImage ? (
            <Image
              className="rounded-xl object-cover opacity-70"
              src={drinkImage.imageURL}
              alt="drink"
              width={400}
              height={800}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
