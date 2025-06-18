import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import UpPages from "../components/UpPages";
import UpAnimation from "../components/UpAnimation";
const Sponsors = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: true, threshold: 0 });

  return (
    <div>
      <UpPages title="sponsor"/>
      <div
        className="relative h-lvh  p-8  overflow-hidden"
        style={{
          backgroundImage: "url('/sponsorBg.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        ref={ref}
      >
        <UpAnimation inView={inView} />
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/50 -z-20"></div>
        {/* s */}
        <div className="absolute top-50 md:left-40 left-0 z-10  text-white max-w-3xl text-left pl-4">
          <motion.div
            className="max-w-2xl mb-12"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <h1
              className="text-3xl md:text-5xl font-bold uppercase tracking-wider mb-4"
              style={{
                textShadow:
                  "0 0 10px #ed1d25, 0 0 20px #ed1d25, 0 0 30px #ed1d25, 0 0 40px #ed1d25, 0 0 50px #ed1d25, 0 0 60px #ed1d25, 0 0 70px #ed1d25, 0 0 90px #ed1d25",
              }}
            >
              Sponsorship
            </h1>
            <h1
              className="text-3xl md:text-5xl font-bold uppercase tracking-wider mb-4"
              style={{
                textShadow:
                  "0 0 10px #ed1d25, 0 0 20px #ed1d25, 0 0 30px #ed1d25, 0 0 40px #ed1d25, 0 0 50px #ed1d25, 0 0 60px #ed1d25, 0 0 70px #ed1d25, 0 0 90px #ed1d25",
              }}
            >
              Opportunities
            </h1>
          </motion.div>
          <br />
          <motion.div
            className="max-w-2xl mb-12"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <h1
              className="text-3xl md:text-5xl font-bold uppercase tracking-wider mb-4"
              style={{
                textShadow:
                  "0 0 10px #ed1d25, 0 0 20px #ed1d25, 0 0 30px #ed1d25, 0 0 40px #ed1d25, 0 0 50px #ed1d25, 0 0 60px #ed1d25, 0 0 70px #ed1d25, 0 0 90px #ed1d25",
              }}
            >
              Make Your
            </h1>
            <h1
              className="text-3xl md:text-5xl font-bold uppercase tracking-wider mb-4"
              style={{
                textShadow:
                  "0 0 10px #ed1d25, 0 0 20px #ed1d25, 0 0 30px #ed1d25, 0 0 40px #ed1d25, 0 0 50px #ed1d25, 0 0 60px #ed1d25, 0 0 70px #ed1d25, 0 0 90px #ed1d25",
              }}
            >
              PARTICIPATION ...
            </h1>
          </motion.div>

          <motion.button
            className="bg-[#ed1c23] mt-5 text-sm text-white  py-3 px-5 rounded-xl uppercase tracking-wide transition-all duration-300 transform hover:bg-[#ed1c2381] shadow-lg hover:shadow-xl"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Become a Sponsor
          </motion.button>
        </div>
      </div>
      <div
        className="relative h-lvh  p-8  overflow-hidden"
        style={{
          backgroundImage: "url('/sponsorBg-2.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        {/* startn */}
        <motion.div
          className="absolute top-20 text-wrap md:right-40 right-0 z-10  px-10 text-white max-w-3xl text-left pl-4"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <div className="text-[50px] absolute -top-13 font-bold text-red-800 opacity-40 -z-20">
            SPONSOR
          </div>
          <div>
            <h1
              className="text-xl font-bold uppercase tracking-wider mb-4"
              style={{
                textShadow:
                  "0 0 10px #ed1d25, 0 0 20px #ed1d25, 0 0 30px #ed1d25, 0 0 40px #ed1d25, 0 0 50px #ed1d25, 0 0 60px #ed1d25, 0 0 70px #ed1d25, 0 0 90px #ed1d25",
              }}
            >
              ELEVATE YOUR BRAND AT THE
            </h1>
            <h1
              className="text-xl font-bold uppercase tracking-wider mb-4"
              style={{
                textShadow:
                  "0 0 10px #ed1d25, 0 0 20px #ed1d25, 0 0 30px #ed1d25, 0 0 40px #ed1d25, 0 0 50px #ed1d25, 0 0 60px #ed1d25, 0 0 70px #ed1d25, 0 0 90px #ed1d25",
              }}
            >
              JEDDAH INTERNATIONAL MOTOR SHOW
            </h1>
          </div>
          <br />
          <div>
            <p className="text-[10px]  font-bold uppercase max-w-[400px] tracking-wider  text-wrap">
              Jeddah International Motor Show offers exceptional opportunities
              through sponsorship packages that are designed to guarantee our
              success partners achieve the highest possible return from
              sponsoring the exhibition, in addition to introducing the
              sponsor’s services and products in a distinct way.
            </p>
            <h1 className="text-xl  font-bold uppercase tracking-wider mb-4 mt-20">
              SPONSORSHIP PACKAGES
            </h1>
            <div className="flex flex-row space-x-5 font-bold flex-wrap space-y-5">
              <h2 className="text-red-700">STRATEGIC</h2>
              <h2 className="text-red-700">DIAMOND</h2>
              <h2 className="text-red-700">PLATINUM</h2>
              <h2 className="text-red-700">GOLD</h2>
              <h2 className="text-red-700">SELVER</h2>
            </div>
          </div>
          <button className="bg-[#ed1c23]  mt-5 text-sm text-white  py-3 px-5 rounded-xl uppercase tracking-wide transition-all duration-300 transform hover:bg-[#ed1c2381] shadow-lg hover:shadow-xl">
            Become a Sponsor
          </button>
        </motion.div>
        {/* end */}
      </div>
      <motion.div className="w-full bg-black  flex flex-col  items-center pb-50">
        <img src="/path53.png " className="opacity-50" width={200} />
        <h1 className="text-7xl font-bold text-red-700 opacity-40 -mt-25 -mr-10">
          HOW
        </h1>
        <motion.p
          className="text-white font-bold text-2xl text-center flex flex-row justify-center items-center"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          TO PARTICIPATE IN THIS PRESTIGIOUS EVENT
        </motion.p>
        <motion.div
          className=" flex flex-row flex-wrap justify-center items-center pl-30 mt-20 "
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <div className="w-[300px] relative group perspective ">
            <img
              src="nu1.png"
              width={200}
              className="transition-transform duration-700 group-hover:rotate-x-180 backface-hidden"
            />

            <motion.p
              className="absolute top-25 left-25 transform -translate-x-1/2 text-white text-xl font-bold text-center"
              style={{
                textShadow:
                  "0 0 10px #ed1d25, 0 0 20px #ed1d25, 0 0 30px #ed1d25, 0 0 40px #ed1d25, 0 0 50px #ed1d25, 0 0 60px #ed1d25, 0 0 70px #ed1d25, 0 0 90px #ed1d25",
              }}
            >
              Fill the participation form available on the website
            </motion.p>
          </div>
          <div className="w-[300px] relative group perspective">
            <img
              src="nu2.png"
              width={200}
              className="transition-transform duration-700 group-hover:rotate-x-180 backface-hidden"
            />

            <p
              className="absolute top-25 left-25 transform -translate-x-1/2 text-white text-xl font-bold text-center"
              style={{
                textShadow:
                  "0 0 10px #ed1d25, 0 0 20px #ed1d25, 0 0 30px #ed1d25, 0 0 40px #ed1d25, 0 0 50px #ed1d25, 0 0 60px #ed1d25, 0 0 70px #ed1d25, 0 0 90px #ed1d25",
              }}
            >
              Fill the participation form available on the website
            </p>
          </div>
          <div className="w-[300px] relative group perspective">
            <img
              src="nu3.png"
              width={200}
              className="transition-transform duration-700 group-hover:rotate-x-180 backface-hidden"
            />

            <p
              className="absolute top-25 left-25 transform -translate-x-1/2 text-white text-xl font-bold text-center"
              style={{
                textShadow:
                  "0 0 10px #ed1d25, 0 0 20px #ed1d25, 0 0 30px #ed1d25, 0 0 40px #ed1d25, 0 0 50px #ed1d25, 0 0 60px #ed1d25, 0 0 70px #ed1d25, 0 0 90px #ed1d25",
              }}
            >
              Fill the participation form available on the website
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Sponsors;
