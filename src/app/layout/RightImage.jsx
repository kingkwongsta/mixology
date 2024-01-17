import FlavorChoice from "../components/FlavorChoice";

export default function RightImage({ children }) {
  const { imageSrc, imageAlt } = children.props;

  return (
    <div className="flex flex-row">
      <div className="border-solid border-2 border-sky-500 basis-3/5 min-h-[600px]">
        {children}
      </div>
      <div className="border-solid border-2 border-sky-500 basis-2/5 min-h-[600px]">
        Nice Guy
      </div>
    </div>
  );
}
