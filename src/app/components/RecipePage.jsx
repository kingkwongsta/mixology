"use client";

export default function RecipePage() {
  const [userMood, userFlavor, userLiquor] = [Happy, Sweet, Whiskey];

  return (
    <div className="mt-10 flex flex-col items-center">
      <div>
        <p className="text-lg">
          Feeling <span />
          <span className="text-xl font-semibold lowercase text-[#dd6236]">
            {userMood}
          </span>
          {", "}
          you search for a drink with a{" "}
          <span className="text-xl font-semibold lowercase text-[#dd6236] ">
            {userFlavor}
          </span>{" "}
          taste, perhaps something containing{" "}
          <span className="text-xl font-semibold lowercase text-[#dd6236] ">
            {userLiquor}
          </span>{" "}
        </p>
      </div>
    </div>
  );
}
