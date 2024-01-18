import { motion } from "framer-motion";
import { useState } from "react";

export default function ButtonTest() {
  const [selected, setSelected] = useState(false);

  return (
    <>
      <motion.div
        className={`option ${selected ? "selected" : ""}`}
        animate={{
          scale: selected ? 1.1 : 1,
          backgroundColor: selected ? "#f0f0f0" : "white",
          transition: { duration: 0.2 },
        }}
        onClick={() => onSelect(value)}
      >
        <button className="border-2 border-sky-500">HELLLO</button>
      </motion.div>
    </>
  );
}
