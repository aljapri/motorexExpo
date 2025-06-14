import Marquee from "react-fast-marquee";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const stats = [
  { label: "Electric Motorcycle" },
  { label: "Visitors" },
  { label: "Speakers" },
  { label: "Sessions" },
  { label: "Countries" },
];

export default function Marquees() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const leftToRightVariant = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const leftToRightVariantDelayed = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, delay: 0.3, ease: "easeOut" },
    },
  };

  return (
    <section
      className="py-16 relative h-[300px] overflow-hidden bg-[#a01313ea]"
      ref={ref}
    >
      {/* Stripe 1 - Tilted Left */}
      <div className="absolute top-20 left-0 w-full">
        <div className="w-[200%] -ml-[50%] transform rotate-[-5deg] bg-gray-400">
          <Marquee speed={30} gradient={false} direction="left" loop={0}>
            {Array(10)
              .fill(stats)
              .flat()
              .map((item, index) => (
                <div
                  key={index}
                  className="text-center min-w-[180px] px-6 py-3"
                >
                  <div className="text-3xl text-white">{item.label}</div>
                </div>
              ))}
          </Marquee>
        </div>
      </div>

      {/* Stripe 2 - Tilted Right */}
      <div className="absolute top-34 left-0 w-full">
        <div className="w-[200%] -ml-[50%] transform rotate-[5deg] bg-red-500">
          <Marquee speed={50} gradient={false} direction="right" loop={0}>
            {Array(10)
              .fill(stats)
              .flat()
              .map((item, index) => (
                <div
                  key={index}
                  className="text-center min-w-[180px] px-6 py-3"
                >
                  <div className="text-3xl text-white">{item.label}</div>
                </div>
              ))}
          </Marquee>
        </div>
      </div>

      {/* ✅ Animated Clip Paths from Left to Right */}
      <motion.div
        className="absolute bottom-0 left-64 transform -translate-x-1/2 w-[200px] h-[70px] bg-white bg-opacity-10"
        style={{
          clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
        }}
        variants={leftToRightVariant}
        initial="hidden"
        animate={controls}
      />
      <motion.div
        className="absolute bottom-0 left-96 transform -translate-x-1/2 w-[140px] h-[67px] bg-white bg-opacity-10"
        style={{
          clipPath: "polygon(35% 0, 0% 100%, 100% 100%)",
        }}
        variants={leftToRightVariantDelayed}
        initial="hidden"
        animate={controls}
      />
    </section>
  );
}
