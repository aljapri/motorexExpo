import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const testimonials = [
  {
    quote: `This conference plays an important role in encouraging EV sector... within the framework of the Kingdom’s Vision 2030.`,
    name: 'Mr. Saleh Al Khabti',
    title: 'Deputy Minister',
    org: 'Ministry of Investment Saudi Arabia (MISA)',
    img: "/speakers/icon.png",
  },
  {
    quote: `The EV Auto Show in Riyadh was an outstanding success... a comprehensive showcase of the industry's innovations and solutions.`,
    name: 'Abdulmuain Ahmed Al‑Soufi',
    title: 'Product Line Manager',
    org: 'Alfanar',
    img: "/speakers/icon.png",
  },
  {
    quote: `It was an honor to participate as a panel member... connect with international and local players interested in Vision 2030's industrial revolution.`,
    name: 'Aftab Ahmad',
    title: 'Chief Advisor',
    org: 'Automotive Sector, NIDC',
    img: "/speakers/icon.png",
  },
  {
    quote: `It was an honor to be the title sponsor... provided a unique opportunity to witness groundbreaking advancements...`,
    name: 'Mr. Kalyana Sivagnanam',
    title: 'GCEO',
    org: 'Petromin',
    img: "/speakers/icon.png",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Testimonials</h2>

        <Swiper
          dir="rtl"
          loop
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          className="max-w-5xl mx-auto h-[360px]"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col md:flex-row-reverse items-center text-left bg-white p-6 rounded-lg shadow-lg gap-6 h-full justify-center">
                <div className="relative w-44 h-44">
                  <div
                    className="absolute -top-2 -left-2 w-full h-full border-4 border-red-600 z-0"
                    style={{ content: '""' }}
                  />
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-full h-full object-cover z-10 relative"
                  />
                </div>

                <div className="max-w-2xl text-left">
                  <p className="text-gray-700 italic mb-4">“{t.quote}”</p>
                  <p className="font-semibold text-lg text-blue-900">{t.name}</p>
                  <p className="text-sm text-gray-600">{t.title}</p>
                  <p className="text-sm text-gray-500">{t.org}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
