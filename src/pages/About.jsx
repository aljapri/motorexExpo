import React, { useRef } from "react";
import { inView, motion, useInView } from "framer-motion";
import UpPages from "../components/UpPages";
import UpAnimation from "../components/UpAnimation";

function AnimatedSection({ reverse = false }) {
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`flex flex-wrap gap-8 items-center justify-center pt-20 ${
        reverse ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div className="relative w-[300px] h-[300px]">
        {/* الخلفية بالتدرج اللوني */}
        <div
          className="absolute inset-0 rounded-lg -top-5 w-[300px] h-[150px] -left-5"
          style={{
            background: "linear-gradient(135deg, red, blue)",
            filter: "",
            zIndex: 0,
          }}
        ></div>

        {/* الصورة فوق الخلفية */}
        <img
          src="/bg.jpeg"
          alt="EV Auto Show"
          className="relative rounded-lg shadow-xl"
          width={300}
          height={300}
          style={{ zIndex: 10 }}
        />
      </div>

      <div className="w-[300px] h-[300px]">
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-xl font-bold text-gray-900 mb-6"
        >
          PIONEERING ELECTRIC MOBILITY
        </motion.h2>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-gray-600 text-sm"
        >
          The fourth edition of the EV Auto Show, taking place from October 27th
          to 29th, 2025 at the Riyadh International Convention and Exhibition
          Centre, is at the forefront of the electric vehicle revolution in
          Saudi Arabia. As the region's leading event dedicated to electric
          mobility and technology, we're driving innovation, fostering
          partnerships, and advancing the future of sustainable transportation.
        </motion.p>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="">
      <UpPages title="About the Event" />
      
      <section className="bg-white relative">
      <p className="text-sm text-center font-bold p-5 pt-20">Welcome to the fourth edition of the EV Auto Show - Saudi Arabia's foremost event for the EV ecosystem and cutting-edge technologies.</p>

        <UpAnimation inView={inView} />
        <AnimatedSection />
        <AnimatedSection reverse />
        <AnimatedSection />
        <AnimatedSection reverse />
      </section>
    </div>
  );
}
