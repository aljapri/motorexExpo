import React, { useRef } from "react";
import UpPages from "../components/UpPages";
import { useInView } from "framer-motion";
import UpAnimation from "../components/UpAnimation";

export default function Media() {
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: true, threshold: 0 });

  const newsItems = [
    {
      title:
        "DRIVING THE NEW ERA OF MOBILITY: EV AUTO SHOW 2025 AND SAUDI ARABIA'S CLEAN TRANSPORT VISION",
      date: "27-09-2024",
      excerpt:
        "Saudi Arabia's clean transport shift is accelerating with ambitious targets for EV adoption...",
      link: "#",
    },
    {
      title: "VOLVO RETURNS TO SAUDI ARABIA",
      date: "27-09-2024",
      excerpt:
        "Volvo Cars is back in Saudi Arabia with a full lineup of electric vehicles...",
      link: "#",
    },
    {
      title: "WHY YOUR NEXT CAR SHOULD BE AN EV!",
      date: "27-09-2024",
      excerpt:
        "Worried about cost? Range anxiety? Charging availability? We address all your concerns...",
      link: "#",
    },
    {
      title: "WHY YOUR NEXT CAR SHOULD BE AN EV!",
      date: "27-09-2024",
      excerpt:
        "Worried about cost? Range anxiety? Charging availability? We address all your concerns...",
      link: "#",
    },
    {
      title: "WHY YOUR NEXT CAR SHOULD BE AN EV!",
      date: "27-09-2024",
      excerpt:
        "Worried about cost? Range anxiety? Charging availability? We address all your concerns...",
      link: "#",
    },
    {
      title: "WHY YOUR NEXT CAR SHOULD BE AN EV!",
      date: "27-09-2024",
      excerpt:
        "Worried about cost? Range anxiety? Charging availability? We address all your concerns...",
      link: "#",
    },
    {
      title: "WHY YOUR NEXT CAR SHOULD BE AN EV!",
      date: "27-09-2024",
      excerpt:
        "Worried about cost? Range anxiety? Charging availability? We address all your concerns...",
      link: "#",
    },
    {
      title: "WHY YOUR NEXT CAR SHOULD BE AN EV!",
      date: "27-09-2024",
      excerpt:
        "Worried about cost? Range anxiety? Charging availability? We address all your concerns...",
      link: "#",
    },
    {
      title: "WHY YOUR NEXT CAR SHOULD BE AN EV!",
      date: "27-09-2024",
      excerpt:
        "Worried about cost? Range anxiety? Charging availability? We address all your concerns...",
      link: "#",
    },
  ];

  return (
    <div>
      <UpPages title="BLOG" />

      <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 relative " ref={ref}>
        <UpAnimation inView={inView} />

        <div className="max-w-7xl mx-auto">
          <div className=" flex flex-row flex-wrap gap-8 justify-center">
            {newsItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 w-[300px]"
              >
                <img src="bg.jpeg" className="w-full h-[200px]" />
                <div className="p-6">
                  <h3 className="text-md font-bold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-blue-600 font-medium mb-4">
                    {item.date}
                  </p>
                  <p className="text-gray-600 mb-6 text-sm">{item.excerpt}</p>
                  <a
                    href={item.link}
                    className="inline-flex items-center bg-red-600 p-3 rounded-xl text-white font-medium transition-colors duration-300"
                  >
                    READ MORE
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
