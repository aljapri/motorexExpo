import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const titleVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const comingSoonVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } },
};

const SectionComingSoon = ({ title }) => {
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
    <section className="py-20 bg-white border-b border-gray-200" ref={ref}>
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <motion.h2
          className="text-4xl font-semibold mb-6"
          variants={titleVariants}
          initial="hidden"
          animate={controls}
        >
          {title}
        </motion.h2>
        <p
          className="text-gray-600 text-6xl italic"
          variants={comingSoonVariants}
          initial="hidden"
          animate={controls}
        >
          Coming Soon
        </p>
      </div>
    </section>
  );
};

export default function PartnersExhibitorsMedia() {
  return (
    <main className="bg-gray-50">
      <SectionComingSoon title="Sponsor Partners" />
      <SectionComingSoon title="Exhibitors List" />
      <SectionComingSoon title="Media Partner" />
    </main>
  );
}
