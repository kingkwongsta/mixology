export default function QuestionCard() {
  return (
    <div className="m-8">
      <h1 className="my-10 text-2xl text-[#FFFFFF]">
        Pick a flavor profile that you are looking for:
      </h1>
      <ButtonListDropdown
        buttonContent={flavorProfiles}
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
        isHovered={isHovered}
        setIsHovered={setIsHovered}
      />
      {/* <div>{renderFlavorProfiles()}</div> */}
    </div>
  );
}
