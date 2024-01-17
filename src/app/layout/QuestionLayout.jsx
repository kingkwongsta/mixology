import Image from "next/image";

export default function RightImage({ children }) {
  const { imageSrc, imageAlt, imagePosition } = children.props;
  const isImageOnRight = imagePosition === "right";

  return (
    <>
      {isImageOnRight ? (
        <div className="flex flex-row">
          <div className="basis-3/5 min-h-[500px]">{children}</div>
          <div className="basis-2/5 min-h-[500px]">
            <Image className="rounded-xl my-8" src={imageSrc} alt={imageAlt} />
          </div>
        </div>
      ) : (
        <div className="flex flex-row">
          <div className="basis-2/5 min-h-[500px]">
            <Image className="rounded-xl my-8" src={imageSrc} alt={imageAlt} />
          </div>
          <div className="basis-3/5 min-h-[500px]">{children}</div>
        </div>
      )}
    </>
  );
}
