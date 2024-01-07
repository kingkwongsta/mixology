export default function ButtonList({
  buttonContent,
  selectedButton,
  setSelectedButton,
  setUserMood,
}) {
  return buttonContent.map((content, index) => {
    return (
      <button
        key={index}
        className={`p-2 m-5 border-solid border-2 border-sky-500 rounded-lg ${
          index === selectedButton && "bg-sky-500"
        }`}
        onClick={() => {
          setSelectedButton(index);
          setUserMood(content);
        }}
      >
        {content}
      </button>
    );
  });
}
