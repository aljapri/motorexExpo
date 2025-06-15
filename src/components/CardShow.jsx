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
          className="absolute top-0 right-0 cursor-pointer bg-white text-red-900 hover:bg-red-200 p-2 z-10"
        >
          <FaTimes />
        </button>

        {/* Image Background with Text Overlay */}
        <div
          className="relative bg-cover bg-center h-[300px] flex items-center justify-center text-center text-white"
          style={{
            backgroundImage: `url('/card.jpeg')`, // استخدم صورة مناسبة لـ Motorex
          }}
        >
          <div className="bg-black/60 p-4 rounded w-full h-full flex flex-col items-center justify-center">
            <h2 className="text-lg font-semibold mb-2">
              Thank you for supporting Motorex Expo!
            </h2>
            <p className="text-sm mt-3 leading-relaxed">
              We’re excited to welcome you to the<br />
              <strong>Motorex Expo 2025</strong> in Damascus, Syria.
              <br />
              <span className="block mt-2">📅 5 – 9 August 2025</span>
              <span className="block">🕔 Daily from 5:00 PM – 10:00 PM</span>
              <span className="block mt-1">📍 Damascus International Fairgrounds</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
