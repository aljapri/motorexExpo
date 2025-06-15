// DownAnimation.jsx
import { motion } from "framer-motion";
import React from "react";

export default function DownAnimation({ inView }) {
  return (
    <>
      <motion.div
        className="absolute bottom-0 left-64 transform -translate-x-1/2 w-[200px] h-[70px] bg-white bg-opacity-10"
        style={{
          clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
        }}
        initial={{ opacity: 0, x: 100 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      <motion.div
        className="absolute bottom-0 left-96 transform -translate-x-1/2 w-[140px] h-[67px] bg-white bg-opacity-10"
        style={{
          clipPath: "polygon(35% 0, 0% 100%, 100% 100%)",
        }}
        initial={{ opacity: 0, x: 100 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      />
    </>
  );
}
