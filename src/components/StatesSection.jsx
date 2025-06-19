import Marquee from "react-fast-marquee";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import DownAnimation from "./DownAnimation";
import { useTranslation } from "react-i18next";

// Translation keys
const stats2 = [
  { labelKey: "marquee.cars" },
  { labelKey: "marquee.bus" },
  { labelKey: "marquee.heavyVehicles" },
  { labelKey: "marquee.oilsFluids" },
  { labelKey: "marquee.spareParts" },
  { labelKey: "marquee.electricCars" },
];

const stats = [
  { labelKey: "marquee2.dealers" },
  { labelKey: "marquee2.finance" },
  { labelKey: "marquee2.shipping" },
];

export default function Marquees() {
  const { t } = useTranslation();
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <section
      className="py-16 relative h-[300px] overflow-hidden bg-[#a01313ea]"
      ref={ref}
      dir="ltr"
    >
      {/* Stripe 1 - White background */}
      <div className="absolute top-20 left-0 w-full">
        <div className="w-[200%] -ml-[50%] transform rotate-[-5deg] text-red-900 bg-white py-5">
          <Marquee speed={30} gradient={false} direction="left" loop={0} >
            <div className="text-3xl text-red-900 font-semibold px-4">
              {Array(10)
                .fill(stats)
                .flat()
                .map((item) => t(item.labelKey))
                .join(" - ")}
            </div>
          </Marquee>
        </div>
      </div>

      {/* Stripe 2 - Red background */}
      <div className="absolute top-34 left-0 w-full ">
        <div className="w-[200%] -ml-[50%] transform rotate-[5deg] bg-red-500 py-5">
          <Marquee speed={50} gradient={false} direction="right" loop={0}>
            <div className="text-3xl text-white font-semibold px-4">
              {Array(10)
                .fill(stats2)
                .flat()
                .map((item) => t(item.labelKey))
                .join(" - ")}
            </div>
          </Marquee>
        </div>
      </div>

      <DownAnimation inView={inView} />
    </section>
  );
}
