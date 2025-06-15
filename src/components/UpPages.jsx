import React from "react";

export default function UpPages({ title = "Default Title" }) {
  return (
    <div className=" h-[250px] flex items-center pb-10 bg-gradient-to-br from-red-600 via-blue-700 to-black flex-col justify-end">
      <h1 className="text-white text-4xl md:text-6xl font-extrabold text-center drop-shadow-lg">
        {title}
      </h1>
    </div>
  );
}
