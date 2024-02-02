export default function QuestionCard({ question, buttons }) {
  return (
    <div className="m-8">
      <h1 className="my-10 text-2xl text-[#FFFFFF]">{question}</h1>
      {buttons}
    </div>
  );
}
