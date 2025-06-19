import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const titleVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const comingSoonVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } },
}; 

 const MediaPartner = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <section className="py-20 bg-white text-red-800 border-b border-gray-200" ref={ref}>
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <motion.h2
          className="text-4xl font-semibold mb-6"
          variants={titleVariants}
          initial="hidden"
          animate={controls}
        >
          {t("sections.mediaPartner")}
        </motion.h2>
        <div className='flex flex-row flex-wrap justify-center  gap-x-20 space-y-10 mt-20'>
        <motion.p
          className="text-3xl italic  font-semibold"
          variants={comingSoonVariants}
          initial="hidden"
          animate={controls}
        >
          {t("common.comingSoon")}
        </motion.p>
        <motion.p
          className="text-3xl italic  font-semibold"
          variants={comingSoonVariants}
          initial="hidden"
          animate={controls}
        >
          {t("common.comingSoon")}
        </motion.p>
        <motion.p
          className="text-3xl italic  font-semibold"
          variants={comingSoonVariants}
          initial="hidden"
          animate={controls}
        >
          {t("common.comingSoon")}
        </motion.p>
        <motion.p
          className="text-3xl italic  font-semibold"
          variants={comingSoonVariants}
          initial="hidden"
          animate={controls}
        >
          {t("common.comingSoon")}
        </motion.p>
        <motion.p
          className="text-3xl italic  font-semibold"
          variants={comingSoonVariants}
          initial="hidden"
          animate={controls}
        >
          {t("common.comingSoon")}
        </motion.p>
        <motion.p
          className="text-3xl italic  font-semibold"
          variants={comingSoonVariants}
          initial="hidden"
          animate={controls}
        >
          {t("common.comingSoon")}
        </motion.p>

        </div>
      </div>
    </section>
  );
};


export default MediaPartner;