import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { useTranslation } from "react-i18next";

import UpAnimation from "./UpAnimation";
import { EVENT_DATE, STATS } from "../constants/stats";

dayjs.extend(duration);

export default function StatsSection() {
  const { t } = useTranslation();
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  function getTimeLeft() {
    const now = dayjs();
    const event = dayjs(EVENT_DATE);
    const diff = event.diff(now);
    const durationObj = dayjs.duration(diff);

    return {
      days: Math.floor(durationObj.asDays()),
      hours: durationObj.hours(),
      minutes: durationObj.minutes(),
      seconds: durationObj.seconds(),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-16 bg-[#a01313ea] text-white" dir="rlt">
      <UpAnimation inView={inView} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Countdown */}
        <div className="text-center mb-10" dir>
          <h3 className="text-3xl font-semibold mb-4">
            {t("stats.timeLeftUntil", {
              date: dayjs(EVENT_DATE).format("DD MMM, YYYY"),
            })}
          </h3>
          <div className="flex justify-center text-xl md:text-2xl font-bold divide-x divide-white/50">
            {["days", "hours", "minutes", "seconds"].map((unit) => (
              <div key={unit} className="px-4">
                <span className="block">{timeLeft[unit]}</span>
                <span className="text-2xl font-medium">
                  {t(`stats.units.${unit}`)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("stats.title")}
          </h2>
          <div className="w-20 h-1 bg-white mx-auto"></div>
        </div>

        {/* Stats Grid */}
        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-white border border-white rounded-xl"
          dir="ltr"
        >
          {STATS.map(({ value, suffix, label }, index) => (
            <div
              key={index}
              className="text-center py-8 px-4 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-4xl font-extrabold text-white mb-2">
                {inView && (
                  <CountUp end={value} duration={2} suffix={suffix} />
                )}
              </div>
              <h3 className="text-sm md:text-base font-medium uppercase tracking-wider text-white">
                {t(`stats.labels.${label}`)}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
