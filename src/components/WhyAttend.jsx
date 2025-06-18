import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useTranslation } from "react-i18next";

export default function WhyAttend() {
  const { t, i18n } = useTranslation();
  const whyAttendData = t('whyAttend', { returnObjects: true }) || {};

  const title = t('whyAttend.title');
  const subtitle = t('whyAttend.subtitle');
  const reasons = t('whyAttend.reasons', { returnObjects: true }) || [];
  console.log('whyAttendData:', whyAttendData);


  return (
    <section
      className="py-16 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url('/bookingBg.jpeg')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#a013137c]" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.3 },
            },
          }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
            }}
          >
            {title}
          </motion.h2>

          <motion.div
            className="w-20 h-1 bg-white mx-auto"
            variants={{
              hidden: { opacity: 0, scaleX: 0 },
              visible: { opacity: 1, scaleX: 1, transition: { duration: 0.6, ease: "easeOut" } },
            }}
            style={{ transformOrigin: "left" }}
          />

          <motion.p
            className="text-xl text-white mt-6 max-w-3xl mx-auto"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
            }}
          >
            {subtitle}
          </motion.p>
        </motion.div>

        {/* Swiper Carousel */}
        <Swiper
          dir={i18n.language === 'ar' ? 'ltr' : 'rtl'}

          spaceBetween={30}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reasons.map((reason, index) => (
            <SwiperSlide key={index}
>
              <motion.div
                className="bg-[#c21e1e] shadow-md hover:shadow-lg py-25 px-10 transition-shadow duration-300 flex flex-col justify-center items-center text-center"
                style={{
                  clipPath:
                    "polygon(20% 0, 100% 10%, 100% 35%, 100% 86%, 82% 100%, 50% 100%, 24% 100%, 0 100%, 0 28%, 0 10%)",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 1.8, ease: "easeOut" }}
              >
                <img
                  src={"/bg.jpeg"}
                  width={300}
                  className="mb-4 h-80 rounded-bl-4xl rounded-tr-4xl"
                  style={{
                    clipPath:
                      "polygon(20% 0, 100% 10%, 100% 35%, 100% 86%, 82% 100%, 50% 100%, 24% 100%, 0 100%, 0 28%, 0 10%)",
                  }}
                />
                <h3 className="text-xl font-bold text-white mb-2">{reason.title}</h3>
                <p className="text-white">{reason.description}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}