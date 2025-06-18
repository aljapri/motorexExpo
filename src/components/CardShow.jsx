import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function LanguageSelector({ onSelectLanguage }) {
  const { i18n } = useTranslation();

  // لمن يتم اختيار لغة، نرسلها للمكون الأب
  const handleLanguageChange = (lng) => {
    if (lng !== i18n.language) {
      i18n.changeLanguage(lng).then(() => {
        // بعد تغيير اللغة نبلغ المكون الأب
        onSelectLanguage(lng);
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-xs w-full text-center">
        {/* <h2 className="mb-4 text-xl font-semibold">Please choose your language</h2> */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => handleLanguageChange("en")}
            className={`px-4 py-2 rounded ${
              i18n.language === "en"
                ? "bg-red-600 text-white cursor-default"
                : "bg-gray-200 hover:bg-red-600 hover:text-white"
            }`}
            disabled={i18n.language === "en"}
          >
            English
          </button>
          <button
            onClick={() => handleLanguageChange("ar")}
            className={`px-4 py-2 rounded ${
              i18n.language === "ar"
                ? "bg-red-600 text-white cursor-default"
                : "bg-gray-200 hover:bg-red-600 hover:text-white"
            }`}
            disabled={i18n.language === "ar"}
          >
            العربية
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CardShow() {
  const [languageChosen, setLanguageChosen] = useState(false);
  const [visible, setVisible] = useState(true);
  const { t, i18n } = useTranslation();

  // تعيين اتجاه الصفحة تلقائيًا عند تغيير اللغة
  useEffect(() => {
    document.body.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  // إذا لم يتم اختيار لغة بعد، أظهر نافذة اختيار اللغة فقط
  if (!languageChosen) {
    return <LanguageSelector onSelectLanguage={() => setLanguageChosen(true)} />;
  }

  // إظهار البطاقة فقط بعد اختيار اللغة
  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="relative w-[90%] max-w-md rounded-lg overflow-hidden shadow-2xl">
        {/* زر إغلاق */}
        <button
          onClick={() => setVisible(false)}
          className="absolute top-0 right-0 cursor-pointer bg-white text-red-900 hover:bg-red-200 p-2 z-10"
          aria-label="Close"
        >
          <FaTimes />
        </button>

        {/* الخلفية مع النص */}
        <div
          className="relative bg-cover bg-center h-[300px] flex items-center justify-center text-center text-white"
          style={{
            backgroundImage: `url('/card.jpeg')`,
          }}
        >
          <div className="bg-black/60 p-4 rounded w-full h-full flex flex-col items-center justify-center">
            <h2 className="text-lg font-semibold mb-2">{t("card.thank_you")}</h2>
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
