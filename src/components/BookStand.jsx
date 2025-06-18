import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import UpAnimation from "./UpAnimation";
import DownAnimation from "./DownAnimation";
import { useTranslation, Trans } from "react-i18next";

export default function BookStand() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: true, threshold: 0.1 });

  return (
    <section className="relative text-white" dir={t('dir') || 'ltr'}>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url('/backBg.jpeg')` }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0000007a] z-0"></div>

      {/* Content */}
      <div
        className="relative z-10 flex flex-col p-10 justify-center items-center"
        ref={ref}
      >
        <UpAnimation inView={inView} />
        <DownAnimation inView={inView} />

        <motion.h1
          className="text-4xl md:text-5xl font-extrabold leading-tight text-center mt-10"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {t("bookStand.title")}
        </motion.h1>

        <motion.div
          className="max-w-3xl text-center space-y-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h3 className="text-xl md:text-2xl font-medium">{t("bookStand.expoTitle")}</h3>

          <p className="text-lg md:text-xl">
            <Trans i18nKey="bookStand.dateInfo" />
          </p>

          <p className="text-base md:text-lg font-bold">{t("bookStand.description")}</p>

          <button className="mt-6 mb-12 px-8 py-3 bg-[#ff1100c7] text-white font-semibold rounded-full hover:bg-red-400 transition duration-300">
            {t("bookStand.button")}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
