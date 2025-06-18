import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function CardShow() {
  const [visible, setVisible] = useState(true);
  const { t, i18n } = useTranslation();

  // Handle direction (RTL for Arabic)
  useEffect(() => {
    document.body.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-[90%] max-w-md rounded-lg overflow-hidden shadow-2xl">
        {/* Close button */}
        <button
          onClick={() => setVisible(false)}
          className="absolute top-0 right-0 cursor-pointer bg-white text-red-900 hover:bg-red-200 p-2 z-10"
        >
          <FaTimes />
        </button>

        {/* Image Background with Text Overlay */}
        <div
          className="relative bg-cover bg-center h-[300px] flex items-center justify-center text-center text-white"
          style={{
            backgroundImage: `url('/card.jpeg')`,
          }}
        >
          <div className="bg-black/60 p-4 rounded w-full h-full flex flex-col items-center justify-center">
            <h2 className="text-lg font-semibold mb-2">
              {t("card.thank_you")}
            </h2>
            <p className="text-sm mt-3 leading-relaxed whitespace-pre-line">
              {t("card.welcome")} <br />
              <strong>{t("card.expo_title")}</strong> {t("card.location")}
              <br />
              <span className="block mt-2">{t("card.date")}</span>
              <span className="block">{t("card.time")}</span>
              <span className="block mt-1">{t("card.venue")}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
