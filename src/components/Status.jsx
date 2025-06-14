import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function StatsSection() {
  const stats = [
    { value: 10000, suffix: "+", label: "ATTENDEES" },
    { value: 10000, suffix: "+", label: "CROSS SQM" },
    { value: 100, suffix: "+", label: "EXHIBITING COMPANIES" },
    { value: 20, suffix: "", label: "EXHIBITING COUNTRIES" },
    { value: 50, suffix: "+", label: "CONFERENCE SPEAKERS" },
    { value: 400, suffix: "+", label: "CONFERENCE DELEGATES" },
  ];

  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <section className="relative py-16 bg-[#a01313ea] text-white overflow-hidden">
      {/* Left shape animates from left to right */}
      <motion.div
        initial={{ x: -100, opacity: 0, clipPath: 'polygon(0% 50%, 0% 50%, 0% 50%, 0% 50%)' }}
        animate={
          inView
            ? {
                x: 0,
                opacity: 1,
                clipPath: 'polygon(30% 0, 100% 50%, 69% 100%, 0% 50%)',
              }
            : {}
        }
        transition={{ duration: 1, ease: 'easeOut' }}
        className="absolute -top-15 -left-20 w-[200px] h-40 bg-white bg-opacity-10 transform -rotate-12"
      />

      {/* Right shape animates from right to left */}
      <motion.div
        initial={{ x: 100, opacity: 0, clipPath: 'polygon(100% 50%, 100% 50%, 100% 50%, 100% 50%)' }}
        animate={
          inView
            ? {
                x: 0,
                opacity: 1,
                clipPath: 'polygon(30% 0, 100% 50%, 69% 100%, 0% 50%)',
              }
            : {}
        }
        transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
        className="absolute -top-15 -right-20 w-[200px] h-40 bg-white bg-opacity-10 transform -rotate-45"
      />

      <div className="container mx-auto px-4 relative z-10 mt-32">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            EV AUTO SHOW 2024 IN NUMBERS
          </h2>
          <div className="w-20 h-1 bg-white mx-auto"></div>
        </div>

        {/* Stats grid animation */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-opacity-10 p-6 rounded-lg text-center backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold mb-2">
                {inView && (
                  <CountUp end={stat.value} duration={2} suffix={stat.suffix} />
                )}
              </div>
              <h3 className="text-sm md:text-base font-medium uppercase tracking-wider">
                {stat.label}
              </h3>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
