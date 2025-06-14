import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function CardShow() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-[90%] max-w-md rounded-lg overflow-hidden shadow-2xl">
        {/* Close button */}
        <button
          onClick={() => setVisible(false)}
          className="absolute top-0 right-0 cursor-pointer  bg-white text-red-900 hover:bg-red-200  p-2 z-10"
        >
          <FaTimes />
        </button>

        {/* Image Background with Text Overlay */}
        <div
          className="relative bg-cover bg-center h-[300px] flex items-center justify-center text-center text-white "
          style={{
            backgroundImage: `url('/card.jpeg')`, // replace with your image path
          }}
        >
          <div className="bg-black/60 p-4 rounded w-full h-full flex flex-col ">
            <h2 className="text-lg font-semibold mb-2 mt-10">
              Thank you for making EV Auto Show 2024 a grand success!
            </h2>
            <p className="text-sm mt-5">
              See you in 2025!
              <br />
              27 - 29 October 2025
              <br />
              Riyadh International Convention & 
              <br />
              Exhibition Center, Saudi Arabia
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
