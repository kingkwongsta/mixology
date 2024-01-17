import Image from "next/image";

export default function RightImage({ children }) {
  const { imageSrc, imageAlt } = children.props;

  return (
    <div className="flex flex-row">
      <div className=" basis-3/5 min-h-[500px]">{children}</div>
      <div className="basis-2/5 min-h-[500px]">
        <Image className="rounded-xl my-8" src={imageSrc} alt={imageAlt} />
      </div>
    </div>
  );
}
