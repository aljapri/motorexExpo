import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";

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
          {/* Left: Logo & Sponsor */}
          <div className="flex items-center space-x-6">
            {/* Logo */}
            <a href="#" className="flex items-center">
              <img src="logo.png" alt="EV AutoShow Logo" width={150} />
            </a>

            {/* Divider */}
            <div className="h-10 w-px bg-white opacity-50" />

            {/* Sponsor */}
            <div className="flex items-center space-x-2">
              <img
                src="sponser-2.png"
                alt="Sponsor Logo"
                width={100}
                className="object-contain"
              />
            </div>
          </div>

          {/* Right: Buttons & Hamburger */}
          <div className="flex items-center space-x-4">
            {/* Desktop Buttons */}
            <div className="hidden sm:flex space-x-4">
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-4 rounded-md font-medium transition duration-300">
                REGISTER TO VISIT
              </button>
              <button className="bg-transparent hover:bg-white hover:text-gray-900 text-white border border-white px-4 py-1.5 rounded-md font-medium transition duration-300">
                Enquire to Exhibit
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="text-white p-2 "
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              <MdMenu size={40}/>
            </button>
          </div>
        </div>

        {/* Slide Menu */}
        <div
          className={`fixed top-20 right-0 w-64 bg-red-900 bg-opacity-95 transform transition-transform duration-300 ease-in-out z-40 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="h-full flex flex-col p-4">
            <div className="flex-grow flex flex-col space-y-2">
              <a href="#" className="text-white py-2 border-b border-red-700">
                Home
              </a>
              <a href="#" className="text-white py-2 border-b border-red-700">
                About
              </a>

              {/* Exhibitors submenu */}
              <button
                onClick={() => setIsExhibitorOpen(!isExhibitorOpen)}
                className="text-white flex justify-between items-center py-2 border-b border-red-700"
              >
                <span>Exhibitors</span>
                <span>{isExhibitorOpen ? "▲" : "▼"}</span>
              </button>

              {isExhibitorOpen && (
                <div className="ml-4 flex flex-col text-white text-sm space-y-1 mt-2">
                  <a href="#" className="py-2 border-b border-red-700">
                    About the Event
                  </a>
                  <a href="#" className="py-2 border-b border-red-700">
                    Why Exhibit
                  </a>
                  <a href="#" className="py-2 border-b border-red-700">
                    Exhibitor Registration
                  </a>
                  <a href="#" className="py-2 border-b border-red-700">
                    Floor Plan
                  </a>
                  <a href="#" className="py-2 border-b border-red-700">
                    Exhibitor Zone
                  </a>
                </div>
              )}

              <a href="#" className="text-white py-2 border-b border-red-700">
                Visitor
              </a>
              <a href="#" className="text-white py-2 border-b border-red-700">
                Conference
              </a>
              <a href="#" className="text-white py-2 border-b border-red-700">
                Sponsors/Partners
              </a>
              <a href="#" className="text-white py-2 border-b border-red-700">
                Media
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
