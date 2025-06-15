import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  FaCar,
  FaBicycle,
  FaMotorcycle,
  FaBus,
  FaShuttleVan,
  FaRocket,
  FaMobileAlt,
  FaCode,
  FaMapMarkedAlt,
  FaIndustry,
  FaBolt,
  FaGlobe,
  FaSignal,
  FaUniversity,
  FaChargingStation,
  FaBatteryFull,
  FaFlask,
  FaRobot,
} from "react-icons/fa";
import DownAnimation from "./DownAnimation";

const sectors = [
  { label: "Electric Car", icon: FaCar },
  { label: "Electric Scooter", icon: FaBicycle },
  { label: "Electric Motorcycle", icon: FaMotorcycle },
  { label: "Electric Bus", icon: FaBus },
  { label: "Electric Van", icon: FaShuttleVan },
  { label: "UAM / eVTOL", icon: FaRocket },
  { label: "E-mobility Apps", icon: FaMobileAlt },
  { label: "Software Providers", icon: FaCode },
  { label: "Mobility Service Providers", icon: FaMapMarkedAlt },
  { label: "Industries & Logistics", icon: FaIndustry },
  { label: "Energy & Infrastructure", icon: FaBolt },
  { label: "Economic Zones", icon: FaGlobe },
  { label: "Telecom / Wireless Carriers", icon: FaSignal },
  { label: "Regulators and Government Agencies", icon: FaUniversity },
  {
    label: "Electric Charging Stations and Equipment",
    icon: FaChargingStation,
  },
  { label: "Electric Vehicle Batteries Manufacturers", icon: FaBatteryFull },
  { label: "Battery Materials / Mining Companies", icon: FaFlask },
  { label: "Autonomous Vehicles / Technology", icon: FaRobot },
];

const headingVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Sectors() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0, once: false });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <section className="relative py-20 text-white overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/card.jpeg')` }}
      ></div>

      {/* Red overlay */}
      <div className="absolute inset-0 bg-[#a01313ea] mix-blend-multiply"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.h2
          ref={ref}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          variants={headingVariants}
          initial="hidden"
          animate={controls}
        >
          Sectors
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;
            return (
              <div
                key={index}
                className="py-6 px-4 bg-white/90 rounded-md text-center text-xs font-medium text-gray-800 transition-all duration-300 hover:bg-red-600 hover:text-white cursor-pointer flex flex-col items-center justify-center"
                style={{
                  clipPath:
                    "polygon(50% 0%, 100% 0, 100% 35%, 100% 78%, 84% 100%, 50% 100%, 18% 100%, 0 100%, 1% 14%, 34% 0)",
                }}
              >
                <Icon size={28} className="mb-2" />
                <span className="leading-snug text-center px-2">
                  {sector.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <DownAnimation inView={inView} />
    </section>
  );
}
