import React from "react";
import { motion } from "framer-motion";

export default function UpAnimation({ inView }) {
  return (
    <>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute w-[180px] h-[150px] -top-[75px] -left-20"
      >
        <div
          className="absolute inset-0 bg-white"
          style={{
            clipPath: "polygon(35% 22%, 100% 50%, 60% 93%, -50% 50%)",
          }}
        />
        <div
          className="absolute inset-[4px] bg-blue-700"
          style={{
            clipPath: "polygon(35% 22%, 100% 50%, 60% 93%, -50% 50%)",
          }}
        />
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        className="absolute w-[180px] h-[150px] -top-[75px] -right-20"
      >
        <div
          className="absolute inset-0 bg-white"
          style={{
            clipPath: "polygon(35% 22%, 100% 50%, 60% 93%, -50% 50%)",
            transform: "rotateY(180deg)",
          }}
        />
        <div
          className="absolute inset-[4px] bg-blue-700"
          style={{
            clipPath: "polygon(35% 22%, 100% 50%, 60% 93%, -50% 50%)",
            transform: "rotateY(180deg)",
          }}
        />
      </motion.div>
    </>
  );
}
