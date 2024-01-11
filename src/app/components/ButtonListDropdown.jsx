export default function ButtonListDropdown({
  buttonContent,
  selectedButton,
  setSelectedButton,
  isHovered,
  setIsHovered,
  onButtonClick,
}) {
  return (
    <>
      <div className="button-container min-h-[200px]">
        {buttonContent.map((content, index) => (
          <button
            key={index}
            className={`flavor-button p-2 m-5 border-solid border-2 border-sky-500 rounded-lg ${
              index === selectedButton && "bg-sky-500"
            }`}
            onMouseEnter={() => setIsHovered(content.description)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={(e) => {
              onButtonClick(event.target.textContent);
              setSelectedButton(index);
            }}
          >
            {content.profile}
          </button>
        ))}
        {isHovered && (
          <div className="hover-description mx-5 my-2 max-w-[400px]">
            {isHovered}
          </div>
        )}
      </div>
    </>
  );
}
