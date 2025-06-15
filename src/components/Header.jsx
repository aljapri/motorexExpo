import { useEffect, useState, useCallback } from "react";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isExhibitorOpen, setIsExhibitorOpen] = useState(false);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking a link
  // Using useCallback for stable ref, but optional here
  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    setIsExhibitorOpen(false); // Optional: close dropdown too
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
          {/* Logo and Sponsor */}
          <div className="flex items-center space-x-6">
            <Link to="/" className="flex items-center" onClick={closeMenu}>
              <img src="/logo.png" alt="EV AutoShow Logo" width={150} />
            </Link>
            <div className="h-10 w-px bg-white opacity-50" />
            <img
              src="/sponser-2.png"
              alt="Sponsor Logo"
              width={100}
              className="object-contain"
            />
          </div>

          {/* Buttons and Menu */}
          <div className="flex items-center space-x-4">
            {/* Desktop buttons */}
            <div className="hidden sm:flex space-x-4">
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-medium">
                REGISTER TO VISIT
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-red-700 px-4 py-2 rounded-md font-medium">
                Enquire to Exhibit
              </button>
            </div>

            {/* Mobile menu icon */}
            <button
              className="text-white p-2"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="Toggle Menu"
            >
              <MdMenu size={36} />
            </button>
          </div>
        </div>

        {/* Slide Menu */}
        <nav
          className={`fixed top-31 right-0 w-64 bg-red-900 bg-opacity-95 transform transition-transform duration-300 ease-in-out z-40 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          aria-hidden={!isMenuOpen}
        >
          <div className="h-full flex flex-col p-4 space-y-2">
            {/* Links that close menu on click */}
            <Link to="/" className="text-white py-2 border-b border-red-700" onClick={closeMenu}>
              Home
            </Link>
            <Link to="/about" className="text-white py-2 border-b border-red-700" onClick={closeMenu}>
              About
            </Link>

            {/* Exhibitors dropdown toggle */}
            <button
              onClick={() => setIsExhibitorOpen((prev) => !prev)}
              className="text-white flex justify-between items-center py-2 border-b border-red-700"
              aria-expanded={isExhibitorOpen}
            >
              <span>Exhibitors</span>
              <span>{isExhibitorOpen ? "▲" : "▼"}</span>
            </button>

            {isExhibitorOpen && (
              <div className="ml-4 flex flex-col text-white text-sm space-y-1">
                <Link
                  to="/exhibitors/about-event"
                  className="py-2 border-b border-red-700"
                  onClick={closeMenu}
                >
                  About the Event
                </Link>
                <Link
                  to="/exhibitors/why-exhibit"
                  className="py-2 border-b border-red-700"
                  onClick={closeMenu}
                >
                  Why Exhibit
                </Link>
                <Link
                  to="/exhibitors/registration"
                  className="py-2 border-b border-red-700"
                  onClick={closeMenu}
                >
                  Exhibitor Registration
                </Link>
                <Link
                  to="/exhibitors/floor-plan"
                  className="py-2 border-b border-red-700"
                  onClick={closeMenu}
                >
                  Floor Plan
                </Link>
                {/* <Link
                  to="/exhibitors/exhibitor-zone"
                  className="py-2 border-b border-red-700"
                  onClick={closeMenu}
                >
                  Exhibitor Zone
                </Link> */}
              </div>
            )}

            <Link to="/visitor" className="text-white py-2 border-b border-red-700" onClick={closeMenu}>
              Visitor
            </Link>
            <Link to="/conference" className="text-white py-2 border-b border-red-700" onClick={closeMenu}>
              Conference
            </Link>
            <Link to="/sponsors" className="text-white py-2 border-b border-red-700" onClick={closeMenu}>
              Sponsors/Partners
            </Link>
            <Link to="/media" className="text-white py-2 border-b border-red-700" onClick={closeMenu}>
              Media
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
