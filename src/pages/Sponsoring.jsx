import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import UpPages from "../components/UpPages";
import UpAnimation from "../components/UpAnimation";

export default function Sponsoring() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (data) => {
    setLoading(true);
    setErrorMsg("");
    try {
      await emailjs.send(
        "service_juir6kb",
        "template_jux7eni",
        {
          name: data.name,
          email: data.email,
          subject: "Sponsoring", // static
          message: data.message,
        },
        "vDDyMHrCzGED-NUwm"
      );

      setSubmitted(true);
      reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setErrorMsg(t("sponsoring.error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <UpPages title={t("sponsoring.title")} />

      <div className="relative w-full" ref={ref}>
        <UpAnimation inView={inView} />

        <section className="max-w-3xl mx-auto px-6 py-20 bg-white rounded-lg shadow-lg">
          {submitted && (
            <div className="mb-6 text-green-600 text-center font-semibold">
              {t("sponsoring.success")}
            </div>
          )}

          {errorMsg && (
            <div className="mb-6 text-red-600 text-center font-semibold">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block mb-2 text-lg font-medium text-gray-700">
                {t("sponsoring.fullName")}
              </label>
              <input
                {...register("name", {
                  required: t("sponsoring.required.fullName"),
                })}
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder={t("sponsoring.placeholderFullName")}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block mb-2 text-lg font-medium text-gray-700">
                {t("sponsoring.email")}
              </label>
              <input
                type="email"
                {...register("email", {
                  required: t("sponsoring.required.email"),
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: t("sponsoring.required.emailPattern"),
                  },
                })}
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder={t("sponsoring.placeholderEmail")}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block mb-2 text-lg font-medium text-gray-700">
                {t("sponsoring.message")}
              </label>
              <textarea
                {...register("message", {
                  required: t("sponsoring.required.message"),
                })}
                rows={6}
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder={t("sponsoring.placeholderMessage")}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-600 hover:bg-red-700 text-white text-lg py-3 rounded-lg font-semibold transition duration-200 disabled:opacity-50"
            >
              {loading ? t("sponsoring.sending") : t("sponsoring.send")}
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
