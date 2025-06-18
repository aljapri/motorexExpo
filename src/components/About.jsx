import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t, i18n } = useTranslation();

  const images = ["about/one.jpg", "about/tow.jpg"];

  const points = [
    t("about.points.passengerVehicles"),
    t("about.points.busesCommercialVehicles"),
    t("about.points.technologyInnovation"),
    t("about.points.tuningAccessories"),
  ];

  // دالة لتغيير اللغة
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <section
      className={`py-16 bg-gradient-to-tl from-white to-red-500 ${
        i18n.language === "ar" ? "text-right" : "text-left"
      }`}
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
      id="about"
    >
      <div className="container mx-auto px-4">
        {/* زر تغيير اللغة */}
  

        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* المحتوى الأيسر */}
          <motion.div
            className="lg:w-1/2 w-full"
            initial={{ x: i18n.language === "ar" ? 100 : -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t("about.title.prefix")}{" "}
              <span className="text-red-600">{t("about.title.highlight")}</span>
            </h1>
            <p className="text-white mb-4 text-lg">{t("about.description.1")}</p>
            <p className="text-white mb-4 text-lg">{t("about.description.2")}</p>
            <p className="text-white mb-6 text-lg">{t("about.description.3")}</p>

            <div className="space-y-4 mb-8">
              {points.map((text, i) => (
                <motion.div
                  key={i}
                  className="flex items-start"
                  initial={{ x: i18n.language === "ar" ? 50 : -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <div className="bg-white p-2 rounded-full mr-4">
                    <svg
                      className="w-6 h-6 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-white">{text}</p>
                </motion.div>
              ))}
            </div>

            <motion.button
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: false }}
            >
              {t("about.contact")}
            </motion.button>
          </motion.div>

          {/* القسم الأيمن للصور */}
          <motion.div
            className="lg:w-1/2 w-full mt-10 space-y-5"
            initial={{ x: i18n.language === "ar" ? -100 : 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {images.map((img, index) => (
                <div
                  key={index}
                  className={`overflow-hidden rounded-xl shadow-lg h-64 hover:scale-105 transition duration-300 ${
                    index === 0 ? "-mt-7" : ""
                  }`}
                >
                  <img
                    src={img}
                    alt={`${t("about.imageAlt")} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              {images.map((img, index) => (
                <div
                  key={index}
                  className={`overflow-hidden rounded-xl shadow-lg h-64 hover:scale-105 transition duration-300 ${
                    index === 0 ? "-mt-7" : ""
                  }`}
                >
                  <img
                    src={img}
                    alt={`${t("about.imageAlt")} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
