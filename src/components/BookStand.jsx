import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import UpAnimation from "./UpAnimation";
import DownAnimation from "./DownAnimation";

export default function BookStand() {
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: true, threshold: 0.1 });

  return (
    <section className="relative  text-white ">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url('/backBg.jpeg')` }}
      ></div>

      {/* Red Overlay */}

      <div className="absolute inset-0 bg-[#0000007a] z-0"></div>

      {/* Content */}
      <div
        className="relative z-10 flex flex-col p-10 justify-center items-center  "
        ref={ref} // ✅ Moved ref here
      >
        <UpAnimation inView={inView} />
        <DownAnimation inView={inView} />
        
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold leading-tight text-center mt-10"
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
            Taking place in Riyadh from{" "}
            <strong>28th to 30th October 2025</strong>
          </p>

          <p className="text-base md:text-lg font-bold">
            With the growing demand for exhibition space, 2025 will be held at
            Riyadh International Convention & Exhibition Centre — the largest EV
            Auto Show in Saudi Arabia and the Middle East — offering exceptional
            visibility for your brand in front of the global EV market.
          </p>

          <button className="mt-6 mb-12 px-8 py-3 bg-[#ff1100c7] text-white font-semibold rounded-full hover:bg-red-400 transition duration-300">
            Reserve Your Stand
          </button>
        </motion.div>
      </div>
    </section>
  );
}
