import { useInView, motion } from "framer-motion";
import { useRef } from "react";

export default function AnimatedSection({ reverse = false }) {
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
          The fourth edition of Motrex Expo, scheduled for 5th to 9th August,
          2025, at the Damascus International Fairgrounds in Syria, stands as a
          premier event leading the electric vehicle revolution in the region.
          As the Middle East's foremost exhibition dedicated to electric
          mobility and advanced technologies, this event drives innovation,
          fosters strategic partnerships, and shapes the future of sustainable
          transportation.
        </motion.p>
      </div>
    </div>
  );
}
