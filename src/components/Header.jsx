import { useEffect, useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isExhibitorOpen, setIsExhibitorOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-b from-red-500 to-red-900 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-white">
            <img src="logo.png" alt="EV AutoShow Logo" width={100} />
          </a>

          <div className="flex flex-row space-x-4">
            <div className="hidden sm:flex space-x-4">
              <button className="bg-red-600 hover:bg-red-700 text-white px-3 rounded-md font-medium transition duration-300">
                REGISTER TO VISIT
              </button>
              <button className="bg-transparent hover:bg-white hover:text-gray-900 text-white border border-white px-3 rounded-md font-medium transition duration-300">
                Enquire to Exhibit
              </button>
            </div>

            <button
              className="text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Right-aligned sliding menu */}
        <div
          className={`fixed top-20 right-0 w-64 bg-red-900 bg-opacity-95 transform transition-transform duration-300 ease-in-out z-40 ${
            isMenuOpen ? "-translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="h-full flex flex-col p-4">
            <div className="flex-grow flex flex-col space-y-1">
              <a
                href="#"
                className="text-white hover:text-blue-300 font-medium py-2 border-b border-red-700"
              >
                Home
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-300 font-medium py-2 border-b border-red-700"
              >
                About
              </a>

              {/* Exhibitors - Toggle Submenu */}
              <button
                onClick={() => setIsExhibitorOpen(!isExhibitorOpen)}
                className="text-white hover:text-blue-300 font-medium py-2 border-b flex flex-row justify-between border-red-700 text-left w-full"
              >
                <p>Exhibitors</p> {isExhibitorOpen ? <span>▲</span> :<spane>▼</spane>}
              </button>

              {/* Submenu */}
              {isExhibitorOpen && (
                <div className="ml-4 mt-1 mb-2 flex flex-col text-sm space-y-1 text-white">
                  <a
                    href="#"
                    className="hover:text-blue-300 py-2 border-b border-red-700"
                  >
                    About the Event
                  </a>
                  <a
                    href="#"
                    className="hover:text-blue-300 py-2 border-b border-red-700"
                  >
                    Why Exhibit
                  </a>
                  <a
                    href="#"
                    className="hover:text-blue-300 py-2 border-b border-red-700"
                  >
                    Exhibitor Registration
                  </a>
                  <a
                    href="#"
                    className="hover:text-blue-300 py-2 border-b border-red-700"
                  >
                    Floor Plan
                  </a>
                  <a
                    href="#"
                    className="hover:text-blue-300 py-2 border-b border-red-700"
                  >
                    Exhibitor Zone
                  </a>
                </div>
              )}

              <a
                href="#"
                className="text-white hover:text-blue-300 font-medium py-2 border-b border-red-700"
              >
                Visitor
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-300 font-medium py-2 border-b border-red-700"
              >
                Conference
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-300 font-medium py-2 border-b border-red-700"
              >
                Sponsors/Partners
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-300 font-medium py-2 border-b border-red-700"
              >
                Media
              </a>
            </div>

            <div id="social-media-icons">{/* Add icons here */}</div>
          </div>
        </div>
      </div>
    </header>
  );
}
