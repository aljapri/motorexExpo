import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import Marquee from "react-fast-marquee";

const titleVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const marqueeVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4, ease: "easeOut" } },
};

const ExhibitorList = () => {
  const { t, i18n } = useTranslation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);


  return (
    <section
      ref={ref}
      className="py-20 border-b border-gray-200 w-full bg-white text-red-800"
      dir={"ltr"}
    >
      <motion.h2
        className="text-4xl font-bold  text-center mb-10"
        variants={titleVariants}
        initial="hidden"
        animate={controls}
      >
        {t("sections.exhibitorsList")}
      </motion.h2>

      <motion.div
        variants={marqueeVariants}
        initial="hidden"
        animate={controls}
        className="w-screen overflow-hidden"
      >
        <Marquee
          speed={50}
          gradient={false}
          direction={"left"}
          className="text-3xl italic  font-semibold py-6"
        >
          {Array(15)
            .fill(t("common.comingSoon"))
            .map((item, index) => (
              <span key={index} className="mx-10 whitespace-nowrap">
                {item}
              </span>
            ))}
        </Marquee>
        <div className="py-10">

        </div>
        <Marquee
          speed={50}
          gradient={false}
          direction={"right"}
          className="text-3xl italic  font-semibold py-6"
        >
          {Array(15)
            .fill(t("common.comingSoon"))
            .map((item, index) => (
              <span key={index} className="mx-10 whitespace-nowrap">
                {item}
              </span>
            ))}
        </Marquee>
      </motion.div>
    </section>
  );
};

export default ExhibitorList;
