import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-white bg-white px-8 md:px-20 py-8 text-center text-red-900">
      <p className="text-sm">
        © {new Date().getFullYear()} MOTOREX Online. All rights reserved.
      </p>
    </footer>
  );
}
