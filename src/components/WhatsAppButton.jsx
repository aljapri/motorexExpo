// components/WhatsAppButton.tsx
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/1234567890" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow-lg transition-all duration-300"
    >
      <FaWhatsapp className="text-xl mr-2" size={30} />
      WhatsApp Us
    </a>
  );
}
