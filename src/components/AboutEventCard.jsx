import { useInView, motion } from "framer-motion";
import { useRef } from "react";

export default function AboutEventCard({ reverse = false }) {
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`flex flex-wrap gap-8 items-center justify-center pt-20 px-5 ${
        reverse ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <img
        src="/bg.jpeg"
        alt="EV Auto Show"
        className="relative rounded-lg shadow-xl w-[500px] h-[250px]"
        style={{ zIndex: 10 }}
      />

      <div className="w-[500px] h-[250px]">
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
