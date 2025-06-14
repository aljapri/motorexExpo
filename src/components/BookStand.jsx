import React from "react";
import { motion } from "framer-motion";

export default function BookStand() {
  return (
    <section className="relative py-20 text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url('/backBg.jpeg')` }}
      ></div>

      {/* Red Overlay */}
      <div className="absolute inset-0 bg-[#a01313ab] z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col p-10 justify-center items-center space-y-10">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold leading-tight text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          BOOK YOUR STAND NOW
        </motion.h1>

        <motion.div
          className="max-w-3xl text-center space-y-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h3 className="text-xl md:text-2xl font-medium">
            EV Auto Show Riyadh 2025
          </h3>

          <p className="text-lg md:text-xl">
            Taking place in Riyadh from <strong>28th to 30th October 2025</strong>
          </p>

          <p className="text-base md:text-lg font-bold">
            With the growing demand for exhibition space, 2025 will be held at
            Riyadh International Convention & Exhibition Centre — the largest EV
            Auto Show in Saudi Arabia and the Middle East — offering exceptional
            visibility for your brand in front of the global EV market.
          </p>

          <button className="mt-6 px-8 py-3 bg-[#ff1100c7] text-white font-semibold rounded-full hover:bg-red-400 transition duration-300">
            Reserve Your Stand
          </button>
        </motion.div>
      </div>
    </section>
  );
}
