import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import UpAnimation from "./UpAnimation";

dayjs.extend(duration);

export default function StatsSection() {
  const stats = [
    { value: 10000, suffix: "+", label: "ATTENDEES" },
    { value: 10000, suffix: "+", label: "CROSS SQM" },
    { value: 100, suffix: "+", label: "EXHIBITING COMPANIES" },
    { value: 20, suffix: "", label: "EXHIBITING COUNTRIES" },
    { value: 50, suffix: "+", label: "CONFERENCE SPEAKERS" },
    { value: 400, suffix: "+", label: "CONFERENCE DELEGATES" },
  ];

  const eventDate = dayjs("2025-08-05T00:00:00");
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  function getTimeLeft() {
    const now = dayjs();
    const diff = eventDate.diff(now);
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
    <section className="relative py-16 bg-[#a01313ea] text-white">
      <UpAnimation inView={inView} />

      <div className="container mx-auto px-4 relative z-10 mt-32">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            EV AUTO SHOW 2025 IN NUMBERS
          </h2>
          <div className="w-20 h-1 bg-white mx-auto"></div>
        </div>

        {/* Countdown Timer */}
        <div className="text-center mb-10">
  <h3 className="text-3xl font-semibold mb-4">Time Left Until 05 Aug, 2025</h3>
  
  <div className="flex justify-center text-xl md:text-2xl font-bold divide-x divide-white/50">
    {/* Days */}
    <div className="px-4">
      <span className="block">{timeLeft.days}</span>
      <span className="text-2xl font-medium">Days</span>
    </div>

    {/* Hours */}
    <div className="px-4">
      <span className="block">{timeLeft.hours}</span>
      <span className="text-2xl font-medium">Hours</span>
    </div>

    {/* Minutes */}
    <div className="px-4">
      <span className="block">{timeLeft.minutes}</span>
      <span className="text-2xl font-medium">Minutes</span>
    </div>

    {/* Seconds */}
    <div className="px-4">
      <span className="block">{timeLeft.seconds}</span>
      <span className="text-2xl font-medium">Seconds</span>
    </div>
  </div>
</div>


        {/* Stats */}
{/* Stats */}
<div
  ref={ref}
  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-white border border-white rounded-xl "
>
  {stats.map((stat, index) => (
    <div
      key={index}
      className="text-center py-8 px-4 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300"
    >
      <div className="text-4xl font-extrabold text-white mb-2">
        {inView && (
          <CountUp end={stat.value} duration={2} suffix={stat.suffix} />
        )}
      </div>
      <h3 className="text-sm md:text-base font-medium uppercase tracking-wider text-white">
        {stat.label}
      </h3>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
