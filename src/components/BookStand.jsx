import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import UpAnimation from "./UpAnimation";
import DownAnimation from "./DownAnimation";

export default function BookStand() {
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: true, threshold: 0.1 });

  return (
    <section className="relative text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url('/backBg.jpeg')` }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0000007a] z-0"></div>

      {/* Content */}
      <div
        className="relative z-10 flex flex-col p-10 justify-center items-center"
        ref={ref}
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
            Motorex Expo 2025 – Damascus
          </h3>

          <p className="text-lg md:text-xl">
            Join us in Damascus from{" "}
            <strong>5th to 9th August 2025</strong>, from 5:00 PM to 10:00 PM daily.
          </p>

          <p className="text-base md:text-lg font-bold">
            Motorex Expo 2025 is Syria’s largest and first international automotive exhibition 
            in years — offering a powerful platform for automotive innovation, business 
            networking, and cultural celebration. Reserve your stand and put your brand 
            at the center of this historic event.
          </p>

          <button className="mt-6 mb-12 px-8 py-3 bg-[#ff1100c7] text-white font-semibold rounded-full hover:bg-red-400 transition duration-300">
            Reserve Your Stand
          </button>
        </motion.div>
      </div>
    </section>
  );
}
