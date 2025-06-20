// 🌍 i18n-enhanced React Header Component with English and Arabic Support
import { useEffect, useState, useCallback } from "react";
import { BsInstagram } from "react-icons/bs";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ICONS = {
  facebook: <FaFacebookF color="white" />,
  instagram: <BsInstagram color="white" />,
  twitter: <FaTwitter color="white" />,
  linkedin: <FaLinkedinIn color="white" />,
  youtube: <FaYoutube color="white" />,
};

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownStates, setDropdownStates] = useState({
    isExhibitorOpen: false,
    isVisitorOpen: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    setDropdownStates({
      isExhibitorOpen: false,
      isVisitorOpen: false,
    });
  }, []);

  const toggleDropdown = (key) => {
    setDropdownStates((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const MAIN_MENU = [
    { label: t("menu.home"), path: "/" },
    { label: t("menu.about"), path: "/about" },
  ];

  const DROPDOWN_MENUS = [
    {
      label: t("menu.exhibitors.title"),
      stateKey: "isExhibitorOpen",
      items: [
        {
          label: t("menu.exhibitors.about_event"),
          path: "/exhibitors/about-event",
        },
        {
          label: t("menu.exhibitors.why_exhibit"),
          path: "/exhibitors/why-exhibit",
        },
        {
          label: t("menu.exhibitors.registration"),
          path: "/exhibitors/registration",
        },
        {
          label: t("menu.exhibitors.floor_plan"),
          path: "/exhibitors/floor-plan",
        },
      ],
    },
    {
      label: t("menu.visitor.title"),
      stateKey: "isVisitorOpen",
      items: [
        { label: t("menu.visitor.why_visit"), path: "/visitor/why-visit" },
      ],
    },
  ];

  const EXTRA_MENU = [
    { label: t("menu.conference"), path: "/conference" },
    { label: t("menu.sponsors"), path: "/sponsors" },
    { label: t("menu.media"), path: "/media" },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng).then(() => {
      window.location.reload();
    });
  };

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
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <img src="/logo.png" alt="Motorex Logo" width={150} />
          </Link>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex space-x-4">
              <a href="/contactUs?contactus=sponsor" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-medium">
                {t("buttons.register_visit")}
              </a>
              <a href="/contactUs?contactus=exhibit" className="border border-white text-white hover:bg-white hover:text-red-700 px-4 py-2 rounded-md font-medium">
                {t("buttons.enquire_exhibit")}
              </a>
            </div>

            {/* Language Switch */}
            {/* <div className="hidden sm:flex gap-2 mr-2">
              <button onClick={() => changeLanguage('en')} className="text-white">EN</button>
              <button onClick={() => changeLanguage('ar')} className="text-white">AR</button>
            </div> */}
            <div
              className={`flex gap-2 mr-2 border border-white rounded-md overflow-hidden select-none ${
                i18n.language === "ar" ? "rtl" : "ltr"
              }`}
            >
              <button
                onClick={() => changeLanguage("en")}
                className={`px-3 py-1 text-sm font-semibold transition-colors duration-300 ${
                  i18n.language === "en"
                    ? "bg-white text-red-700 cursor-default"
                    : "text-white hover:bg-white hover:text-red-700"
                }`}
                disabled={i18n.language === "en"}
                aria-label="Change language to English"
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage("ar")}
                className={`px-3 py-1 text-sm font-semibold transition-colors duration-300 ${
                  i18n.language === "ar"
                    ? "bg-white text-red-700 cursor-default"
                    : "text-white hover:bg-white hover:text-red-700"
                }`}
                disabled={i18n.language === "ar"}
                aria-label="Change language to Arabic"
              >
                AR
              </button>
            </div>

            {/* <button
              className="text-white p-2"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="Toggle Menu"
            >
              <MdMenu size={36} />
            </button> */}
          </div>
        </div>

        {/* Slide Menu */}
        <nav
          className={`fixed top-31 right-0 w-64 bg-red-950 bg-opacity-95 transform transition-transform duration-300 ease-in-out z-40 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          aria-hidden={!isMenuOpen}
        >
          <div className="h-full flex flex-col p-4 space-y-2 font-bold">
            {MAIN_MENU.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-white py-2 border-b border-red-700"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}

            {DROPDOWN_MENUS.map((menu) => (
              <div key={menu.label}>
                <button
                  onClick={() => toggleDropdown(menu.stateKey)}
                  className="text-white flex justify-between items-center py-2 w-full border-b border-red-700"
                  aria-expanded={dropdownStates[menu.stateKey]}
                >
                  <span>{menu.label}</span>
                  <span>{dropdownStates[menu.stateKey] ? "▲" : "▼"}</span>
                </button>
                {dropdownStates[menu.stateKey] && (
                  <div className="ml-4 flex flex-col text-white text-sm space-y-1">
                    {menu.items.map((subItem) => (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        className="py-2 border-b border-red-700"
                        onClick={closeMenu}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {EXTRA_MENU.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-white py-2 border-b border-red-700"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex bg-red-900 flex-row py-2 justify-center items-center space-x-4">
            {Object.entries(ICONS).map(([icon, element]) => (
              <a key={icon} href="#">
                {element}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
