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
      <h2 className="text-center text-3xl font-semibold text-slate-900 mt-7 mb-6">
        {drinkRecipe.name}
      </h2>

      <div className="flex flex-row space-x-10">
        <div className="flex flex-col space-y-8">
          {/* <<<<<INGREDIENTS CARD>>>>> */}
          <Card className="w-[500px] border-[#2E83F2] border-none shadow-xl bg-slate-100 p-3">
            <CardHeader>
              <CardTitle className="text-slate-900 ">Ingredients</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-slate-800">
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
          {/* <<<<<INSTRUCTIONS CARD>>>>> */}
          <Card className="w-[500px] border-none shadow-xl bg-slate-200 p-3">
            <CardHeader>
              <CardTitle className="text-slate-900 ">Instructions</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="text-slate-800">
                {drinkRecipe.instructions
                  .split("\n")
                  .map((instruction, index) => (
                    <li key={index}>{instruction.trim()}</li>
                  ))}
              </ol>
            </CardContent>
          </Card>
        </div>
        {/* IMAGE FOR RECIPE */}
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
