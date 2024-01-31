import Image from "next/image";

export default function RightImage({ children }) {
  const { imageSrc, imageAlt, imagePosition } = children.props;
  const isImageOnRight = imagePosition === "right";

  return (
    <div className="m-10">
      {isImageOnRight ? (
        <div className="flex flex-row items-stretch space-x-5">
          <div className="basis-3/5 border-2 border-sky-800">hello</div>
          <div className="basis-2/5">
            <Image
              className="my-8 grow rounded-xl opacity-70"
              src={imageSrc}
              alt={imageAlt}
              width={400}
              height={500}
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-row space-x-5">
          <div className="min-h-[500px] basis-2/5">
            <Image
              className="my-8 rounded-xl opacity-70"
              src={imageSrc}
              alt={imageAlt}
              width={500}
              height={500}
            />
          </div>
          <div className="min-h-[500px] basis-3/5">{children}</div>
        </div>
      )}
    </div>
  );
}
