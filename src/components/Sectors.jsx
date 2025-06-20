import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  FaCarSide,
  FaBolt,
  FaBusAlt,
  FaTools,
  FaChargingStation,
  FaCircle,
  FaStore,
  FaCogs,
  FaMobileAlt,
  FaUniversity,
  FaTruck,
  FaRobot,
  FaCar,
} from "react-icons/fa";
import { GiBulldozer } from "react-icons/gi";
import DownAnimation from "./DownAnimation";
import { useTranslation } from "react-i18next";

// Import your images (make sure these files exist in your project)
import tireIcon from '../assets/icons/tire.png';
import oilIcon from '../assets/icons/oil.png';

const headingVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Enhanced ImageIcon component
const ImageIcon = ({ src, size = 24, alt = "", className = "", ...props }) => (
  <img 
    src={src} 
    alt={alt}
    width={size}
    height={size}
    className={`${className} object-contain block`}
    {...props}
  />
);

export default function Sectors() {
  const { t } = useTranslation();
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

  // Get translated sectors from i18n
  const sectors = t('sectors', { returnObjects: true });

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
          {t('sectorsTitle')}
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sectors.map((sector, index) => {
            const Icon = getIconComponent(sector.icon);
            return (
              <div
                key={index}
                className="py-6 px-4 bg-white/90 rounded-md text-center text-xs font-medium text-gray-800 transition-all duration-300 hover:bg-red-600 hover:text-white cursor-pointer flex flex-col items-center justify-center"
                style={{
                  clipPath:
                    "polygon(50% 0%, 100% 0, 100% 35%, 100% 78%, 84% 100%, 50% 100%, 18% 100%, 0 100%, 1% 14%, 34% 0)",
                }}
              >
                {sector.icon === 'ImageTire' ? (
                  <ImageIcon src={tireIcon} size={35} className="mb-2" alt="Tire icon" />
                ) : sector.icon === 'ImageOil' ? (
                  <ImageIcon src={oilIcon} size={20} className="mb-2" alt="Oil icon" />
                ) : (
                  <Icon size={28} className="mb-2" />
                )}
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

// Updated helper function
function getIconComponent(iconName) {
  const icons = {
    FaCarSide,
    FaBolt,
    FaBusAlt,
    GiBulldozer,
    FaTools,
    FaChargingStation,
    FaCircle,
    FaStore,
    FaCogs,
    FaMobileAlt,
    FaUniversity,
    FaTruck,
    FaRobot,
  };
  return icons[iconName] || FaCar;
}
