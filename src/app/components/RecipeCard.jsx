import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function RecipeCard({ drinkRecipe }) {
  return (
    <div>
      <h2 className="text-center text-3xl font-semibold text-[#F2ADA7] mt-10 mb-3">
        {drinkRecipe.name}
      </h2>

      <div className="flex flex-row space-x-10 items-center">
        <div className="flex flex-col space-y-8">
          <Card className="w-[500px] border-[#2E83F2] border-none shadow-xl bg-[#F2ADA7]">
            <CardHeader>
              <CardTitle className="text-[#9BF2F2] ">Ingredients</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                {drinkRecipe.ingredients
                  .filter((item) => item.name !== "Ice cubes")
                  .map((ingredient, index) => (
                    <li key={index}>
                      {ingredient.quantity} {ingredient.name.toLowerCase()}
                    </li>
                  ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="w-[500px] border-none shadow-xl bg-[#2E83F2]">
            <CardHeader>
              <CardTitle className="text-[#9BF2F2] ">Instructions</CardTitle>
            </CardHeader>
            <CardContent>
              <ol>
                {drinkRecipe.instructions
                  .split("\n")
                  .map((instruction, index) => (
                    <li key={index}>{instruction.trim()}</li>
                  ))}
              </ol>
            </CardContent>
          </Card>
        </div>
        <div className="shadow-xl rounded-xl">
          <Image
            className="rounded-xl opacity-60"
            src="/images/drink.jpg"
            alt="drink"
            width={350}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}
