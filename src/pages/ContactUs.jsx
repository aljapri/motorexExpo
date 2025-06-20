import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import UpPages from "../components/UpPages";
import UpAnimation from "../components/UpAnimation";
import { useLocation } from "react-router-dom";

export default function ContactUs() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: true, threshold: 0.2 });
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const contactusParam = queryParams.get("contactus");
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
      // Send to admin
      await emailjs.send(
        "service_3dhdkfa",
        "template_yp6t3yj",
        {
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        },
        "nqd8xCzXFJc3fFGU3"
      );

      // Send confirmation to user
      await emailjs.send(
        "service_3dhdkfa",
        "template_yp6t3yj",
        {
          name: data.name,
          email: data.email,
          subject: data.subject,
        },
        "nqd8xCzXFJc3fFGU3"
      );

      setSubmitted(true);
      reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setErrorMsg(t("contactUs.error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <UpPages
        title={
          contactusParam === "sponsor"
            ? t("contactUs.titleTopic.sponsoring")
            : contactusParam === "exhibit"
            ? t("contactUs.titleTopic.exhibit")
            : t("contactUs.title")
        }
      />

      <div className="relative w-full" ref={ref}>
        <UpAnimation inView={inView} />

        <section className="max-w-3xl mx-auto px-6 py-20 bg-white rounded-lg shadow-lg">
          {submitted && (
            <div className="mb-6 text-green-600 text-center font-semibold">
              {t("contactUs.success")}
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
                {t("contactUs.fullName")}
              </label>
              <input
                {...register("name", {
                  required: t("contactUs.required.fullName"),
                })}
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder={t("contactUs.placeholderFullName")}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label className="block mb-2 text-lg font-medium text-gray-700">
                {t("contactUs.email")}
              </label>
              <input
                type="email"
                {...register("email", {
                  required: t("contactUs.required.email"),
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: t("contactUs.required.emailPattern"),
                  },
                })}
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder={t("contactUs.placeholderEmail")}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block mb-2 text-lg font-medium text-gray-700">
                {t("contactUs.subject")}
              </label>
              <select
                {...register("subject", {
                  required: t("contactUs.required.subject"),
                })}
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                {contactusParam != "sponsor" && contactusParam != "exhibit" && (
                  <option value="">{t("contactUs.selectSubject")}</option>
                )}

                {(!contactusParam || contactusParam === "exhibit") && (
                  <option value="Exhibit">
                    {t("contactUs.topics.exhibit")}
                  </option>
                )}
                {(!contactusParam || contactusParam === "sponsor") && (
                  <option value="Sponsoring">
                    {t("contactUs.topics.sponsoring")}
                  </option>
                )}
                {!contactusParam && (
                  <>
                    <option value="Complaint">
                      {t("contactUs.topics.complaint")}
                    </option>
                    <option value="Suggestion">
                      {t("contactUs.topics.suggestion")}
                    </option>
                    <option value="Other">{t("contactUs.topics.other")}</option>
                  </>
                )}
              </select>

              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.subject.message}
                </p>
              )}
            </div>

            <div>
              <label className="block mb-2 text-lg font-medium text-gray-700">
                {t("contactUs.message")}
              </label>
              <textarea
                {...register("message", {
                  required: t("contactUs.required.message"),
                })}
                rows={6}
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder={t("contactUs.placeholderMessage")}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-600 hover:bg-red-700 text-white text-lg py-3 rounded-lg font-semibold transition duration-200 disabled:opacity-50"
            >
              {loading ? t("contactUs.sending") : t("contactUs.send")}
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
