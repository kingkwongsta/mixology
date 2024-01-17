import FlavorChoice from "../components/FlavorChoice";

export default function RightImage({ content, image }) {
  return (
    <div className="flex flex-row">
      <div className="border-solid border-2 border-sky-500 basis-3/5 min-h-[600px]">
        <FlavorChoice />
      </div>
      <div className="border-solid border-2 border-sky-500 basis-2/5 min-h-[600px]">
        Nice Guy
      </div>
    </div>
  );
}
