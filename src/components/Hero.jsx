import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative text-white w-full h-screen">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="bg.jpeg"
          alt="Motorex Expo Background"
          className="w-full h-full object-cover"
        />

        {/* Red gradient from bottom right corner */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top left, rgba(250,38,38,0.7) 0%, transparent 20%)",
          }}
        />

        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>

      {/* Animated Content */}
      <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center">
        {/* Animated Left to Right Content */}
        <motion.div
          className="max-w-2xl mb-12"
          initial={{ x: -100, opacity: 1 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Syria’s Biggest Automotive Comeback
          </h1>
          <p className="text-xl mb-8">
            Join us at <strong>Motorex Expo 2025</strong> – the first international 
            automotive exhibition in Damascus, connecting global brands with 
            local passion and opportunity.
          </p>
          <div className="flex flex-row gap-4">
            <button className="bg-red-600 hover:bg-red-700 text-white px-2 sm:px-6 py-2 rounded-md font-medium transition duration-300">
              REGISTER TO VISIT
            </button>
            <button className="bg-transparent hover:bg-white hover:text-gray-900 text-white border border-white px-2 sm:px-6 py-2 rounded-md font-medium text-xl transition duration-300">
              Enquire to Exhibit
            </button>
          </div>
        </motion.div>

        {/* Animated Bottom to Top Date/Location */}
        <motion.div
          className="border-l-4 border-red-500 pl-4 py-2 mt-8 absolute bottom-20"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <h1 className="text-4xl font-semibold mb-4">5 – 9 August, 2025</h1>
          <h4 className="text-lg">Damascus International Fairgrounds</h4>
          <h4 className="text-lg">Syria</h4>
        </motion.div>
      </div>
    </section>
  );
}
