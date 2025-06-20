import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-white bg-white px-8 md:px-20 py-8 text-center font-bold">
      <p className="text-sm">
        © {new Date().getFullYear()} Motorex Expo 2025. All rights reserved
      </p>
    </footer>
  );
}
