import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export default function RecipeCard({}) {
  return (
    <div>
      <h2 className="text-center text-3xl font-semibold text-[#F2ADA7] mb-10">
        {drinkRecipe.name}
      </h2>

      <div className="flex flex-row space-x-5 items-stretch">
        <div className="flex flex-col space-y-8">
          <Card className="w-[500px] border-none">
            <CardHeader>
              <CardTitle className="text-[#9BF2F2]">Ingredients</CardTitle>
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

          <Card className="w-[500px] border-none">
            <CardHeader>
              <CardTitle className="text-[#9BF2F2]">Instructions</CardTitle>
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
        <div>
          <Image
            className="rounded-xl my-8 self-stretch"
            src="/images/drink.jpg"
            alt="drink"
            width={400}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
