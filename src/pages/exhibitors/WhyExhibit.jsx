import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import UpPages from "../../components/UpPages";
import UpAnimation from "../../components/UpAnimation";

export default function WhyExhibit() {
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: true, threshold: 0.15 });

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const fadeLeftVariant = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const fadeRightVariant = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="mb-20">
      <UpPages title="About the Event" />

      <section
        className="bg-white relative flex flex-col px-2 sm:px-20 justify-center items-center"
        ref={ref}
      >
        <UpAnimation inView={inView} />

        {/* Header & paragraph with fade-up */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUpVariant}
          className="mt-10 max-w-4xl text-center"
        >
          <h1 className="text-5xl font-bold">
            2024 EXHIBITION <span className="text-green-700">OVERVIEW</span>
          </h1>
          <p className="mt-10 px-2 sm:px-10 text-gray-700 leading-relaxed text-lg">
            <span className="font-bold">Event Showcase-</span> Electric Car,
            Electric Scooter, Electric Motorcycle, Electric Bus, Electric Van.
            UAM/Evtol, Electric Charging Stations and Equipment. Electric
            Vehicle Batteries Manufacturers, EV Powertrain Components
            Manufacturers and Other Electric Vehicle Manufacturers, Autonomous
            Vehicles/Technology, Hydrogen Vehicles & Technology, E-mobility Apps
            .,Software Providers, Battery Materials / Mining Companies, Mobility
            Service Providers, Big Data / AI / IoT/ Automation Technology
            Providers, Investment Industries & Logistics, Energy &
            Infrastructure, Economic Zones, Regulators and Government Agencies,
            Telecom / Wireless Carriers
          </p>
        </motion.div>

        {/* Side by side image + text */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="flex flex-wrap items-center gap-10 px-10 py-16 max-w-7xl mx-auto"
        >
          <motion.div variants={fadeRightVariant} className="flex-1 min-w-[280px]">
            <img
              src="/bg.jpeg" // Replace with your actual image path
              alt="EV Auto Show"
              className="w-full rounded-lg shadow-lg object-cover max-h-[400px]"
            />
          </motion.div>

          <motion.div variants={fadeLeftVariant} className="flex-1 min-w-[280px]">
            <ul className="space-y-3 text-gray-700 text-lg">
              <li>
                <span className="font-semibold mr-1">Show Name:</span> EV AUTO SHOW
              </li>
              <li>
                <span className="font-semibold">Event Type:</span> International Exhibition &amp; Conference (Trade &amp; Public)
              </li>
              <li>
                <span className="font-semibold">Show Dates:</span> 27th to 29th October 2025
              </li>
              <li>
                <span className="font-semibold">Location:</span> Riyadh International Convention and Exhibition Centre
              </li>
              <li>
                <span className="font-semibold">Language:</span> All marketing materials and seminars will be available in English and Arabic
              </li>
              <li>
                <span className="font-semibold">Visitors Expected:</span> Over 10,000 across three days.
              </li>
              <li>
                <span className="font-semibold">Opening Times:</span> 10:00 AM – 8:00 PM daily.
              </li>
              <li>
                <span className="font-semibold">Visitor Entry Fee:</span>
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>Exhibition: Free of charge for all visitors</li>
                  <li>Conference: Entry is ticketed and chargeable</li>
                </ul>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Last section with staggered fade-up items */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="flex flex-col mt-20 max-w-5xl mx-auto"
        >
          <motion.p variants={fadeUpVariant} className="text-center mb-8 text-gray-800 text-lg">
            Exhibiting at the EV Auto Show is a strategic move to position your
            company at the forefront of the electric vehicle revolution. Here
            are 10 reasons why you should exhibit at EV Auto Show.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800 text-base">
            {[
              {
                title: "Showcase Innovation",
                desc: "Display your cutting-edge electric vehicle technologies and solutions to an audience eager for the latest advancements.",
              },
              {
                title: "Industry Networking",
                desc: "Connect with key players, decision-makers, and thought leaders in the electric vehicle industry.",
              },
              {
                title: "Expand Market Reach",
                desc: "Gain visibility in the rapidly growing Saudi Arabian market and tap into new business opportunities.",
              },
              {
                title: "Lead Generation",
                desc: "Generate high-quality leads and build a strong pipeline of potential clients and partners.",
              },
              {
                title: "Brand Visibility",
                desc: "Enhance your brand's recognition and reputation by being associated with a premier event in the EV sector.",
              },
              {
                title: "Live Demonstrations",
                desc: "Offer live demonstrations of your products, allowing attendees to experience your technology firsthand.",
              },
              {
                title: "Influence Policymakers",
                desc: "Engage with policymakers and regulatory authorities to shape the future of electric mobility.",
              },
              {
                title: "Media Exposure",
                desc: "Benefit from extensive media coverage and promotional activities that will amplify your presence.",
              },
              {
                title: "Competitive Edge",
                desc: "Stay ahead of the competition by showcasing your innovations and gaining insights into industry trends.",
              },
              {
                title: "Collaborative Opportunities",
                desc: "Foster collaborations and partnerships with other exhibitors, industry leaders, and startups to drive mutual growth.",
              },
            ].map(({ title, desc }, idx) => (
              <motion.div
                key={idx}
                variants={fadeUpVariant}
                className="flex items-start gap-2"
              >
                <span className="text-blue-600">→</span>
                <p>
                  <span className="font-bold">{title}:</span> {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
