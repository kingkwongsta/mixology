import Image from "next/image";

export default function QuestionLayout({ children }) {
  const { imageSrc, imageAlt, imagePosition } = children.props;

  return (
      
    {imagePosition == "right" ? (
        <div className="flex flex-row">
        <div className=" basis-3/5 min-h-[500px]">{children}</div>
              <div className="basis-2/5 min-h-[500px]">
                <Image className="rounded-xl my-8" src={imageSrc} alt={imageAlt} />
              </div>
            </div>
      ) :
    (
      <div className="flex flex-row">
      <div className=" basis-3/5 min-h-[500px]">{children}</div>
            <div className="basis-2/5 min-h-[500px]">
              <Image className="rounded-xl my-8" src={imageSrc} alt={imageAlt} />
            </div>
          </div>
    )}

  )
}


