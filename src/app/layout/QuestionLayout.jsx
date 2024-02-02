import Image from "next/image";

export default function RightImage({ children }) {
  const { imageSrc, imageAlt, imagePosition } = children.props;
  const isImageOnRight = imagePosition === "right";

  return (
    <div className="m-10">
      {isImageOnRight ? (
        <div className="flex flex-row space-x-6">
          <div className="basis-3/5 bg-white bg-opacity-20 rounded-xl">
            {children}
          </div>
          <div className="basis-2/5">
            <Image
              className="object-cover w-full h-full rounded-xl opacity-70"
              src={imageSrc}
              alt={imageAlt}
              width={1000}
              height={1000}
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-row space-x-5">
          <div className="basis-2/5 min-h-[500px] bg-contain">
            <Image
              className="rounded-xl my-8 opacity-70 bg-contain"
              src={imageSrc}
              alt={imageAlt}
              width={500}
              height={500}
            />
          </div>
          <div className="basis-3/5 min-h-[500px]">{children}</div>
        </div>
      )}
    </div>
  );
}
