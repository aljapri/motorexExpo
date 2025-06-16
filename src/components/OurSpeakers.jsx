import React, { useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const speakers = [
  {
    name: "Eng. Ahmad Zain",
    title: "Automotive Engineer",
    org: "Syrian Automotive Union",
    img: "/speakers/icon.png",
  },
  {
    name: "Lana Shamma",
    title: "Regional Marketing Director",
    org: "Renault Middle East",
    img: "/speakers/icon.png",
  },
  {
    name: "Omar Al Husseini",
    title: "CEO",
    org: "AutoTech Innovations",
    img: "/speakers/icon.png",
  },
  {
    name: "Dr. Fares Hammoud",
    title: "Mechanical Engineering Professor",
    org: "Damascus University",
    img: "/speakers/icon.png",
  },
  {
    name: "Michel Aoun",
    title: "Classic Cars Collector",
    org: "",
    img: "/speakers/icon.png",
  },
];

export default function OurSpeakers() {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref, { threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const textVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: i * 0.15,
      },
    }),
  };

  return (
    <section
      ref={ref}
      className="py-16 bg-gradient-to-br from-[#8B0000] via-[#a01313ea] to-[#5a0000] text-white"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-4"
          variants={textVariants}
          initial="hidden"
          animate={controls}
        >
          Meet Our Speakers
        </motion.h2>

        <motion.p
          className="text-center text-red-100 mb-12"
          variants={textVariants}
          initial="hidden"
          animate={controls}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          Industry leaders and automotive experts gather to shape Syria's future in the global automotive scene.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {speakers.map((sp, i) => (
            <motion.div
              key={sp.name}
              className="bg-white rounded-lg shadow-xl overflow-hidden group transition-transform duration-300 hover:scale-105"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={controls}
            >
              <div className="relative w-full h-48 overflow-hidden">
                <img
                  src={sp.img}
                  alt={sp.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-red-600 transform scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100 opacity-60 z-10" />
              </div>
              <div className="p-6 relative z-20 bg-white text-center">
                <h3 className="text-xl font-semibold text-red-700">{sp.name}</h3>
                <p className="text-gray-600">{sp.title}</p>
                {sp.org && <p className="text-gray-400">{sp.org}</p>}
              </div>
            </motion.div>
          ))}
        </div>

        {/* <div className="mt-12 text-center">
          <a
            href="/speaker-list"
            className="inline-block px-8 py-3 bg-white text-red-700 border-2 border-white rounded-full font-semibold hover:bg-red-700 hover:text-white transition"
          >
            View All Speakers
          </a>
        </div> */}
      </div>
    </section>
  );
}
