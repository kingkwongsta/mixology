import { Button } from "@/components/ui/button";
import userStore from "@/lib/userStore";
import React, { useState, useRef } from "react";

// export default function ButtonListDropdown({
//   buttonContent,
//   selectedButton,
//   setSelectedButton,
//   isHovered,
//   setIsHovered,
//   onButtonClick,
// }) {
//   const { setQuestionIndex } = userStore();

//   return (
//     <>
//       <div className="flex flex-row justify-center">
//         <div className="basis-2/5 flex justify-center">
//           <div className="flex flex-col">
//             {buttonContent.map((content, index) => (
//               <Button
//                 key={index}
//                 className={`my-2 max-w-[140px] ${
//                   index === selectedButton && "bg-sky-500"
//                 }`}
//                 onMouseEnter={() => setIsHovered(content.description)}
//                 onMouseLeave={() => setIsHovered(false)}
//                 onClick={(e) => {
//                   onButtonClick(event.target.textContent);
//                   setSelectedButton(index);
//                   setTimeout(() => {
//                     setQuestionIndex(1);
//                   }, 500);
//                 }}
//               >
//                 {index}
//                 {content.profile}
//               </Button>
//             ))}
//           </div>
//         </div>
//         <div className="basis-3/5">
//           {isHovered && (
//             <div className="hover-description mx-5 my-2 max-w-[400px]">
//               {isHovered}
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

export default function ButtonListDropdown({
  buttonContent,
  selectedButton,
  setSelectedButton,
  isHovered,
  setIsHovered,
}) {
  const { setQuestionIndex, setUserFlavor } = userStore();
  const [colorCount, setColorCount] = useState(0);
  const intervalRef = useRef(null);

  const handleClick = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setColorCount((prevCount) => prevCount + 1);
    }, 200); // Change color every 0.5 seconds

    setTimeout(() => {
      clearInterval(intervalRef.current); // Stop after 3 cycles
      setColorCount(0);
    }, 800); // Stop after 3 seconds (6 color changes)
  };

  const backgroundColor = colorCount % 2 === 0 ? "bg-slate-600" : "bg-gray-100";

  return (
    <>
      <div className="flex flex-row m-8">
        <div className="basis-2/5 flex">
          <div className="flex flex-col">
            {buttonContent.map((content, index) => (
              <Button
                key={index}
                className={`bg-fun my-2 max-w-[140px] hover:bg-opacity-75 ${
                  index === selectedButton && backgroundColor
                }`}
                variant="bg-fun"
                onMouseEnter={() => setIsHovered(content.description)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={(e) => {
                  setUserFlavor(event.target.textContent);
                  setSelectedButton(index);
                  handleClick();
                  setTimeout(() => {
                    setQuestionIndex(1);
                  }, 1000);
                }}
              >
                {content.profile}
              </Button>
            ))}
          </div>
        </div>
        <div className="basis-3/5">
          {isHovered && (
            <div className="hover-description mx-5 my-2 max-w-[400px]">
              {isHovered}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
