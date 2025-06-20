import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
  FaSnapchat,
  FaSnapchatGhost,
} from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import UpAnimation from "./UpAnimation";
import DownAnimation from "./DownAnimation";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  EXPO_INFO,
  CONTACT_INFO,
  CTA_BUTTONS,
  QUICK_LINKS,
  SOCIAL_ICONS,
} from "../constants/footer";

const ICONS_MAP = {
  facebook: <FaFacebookF size={30} color="red" />,
  tiktok: <FaTiktok size={30} color="red" />,
  instagram: <FaInstagram size={30} color="red" />,
  snapchat: <FaSnapchatGhost size={30} color="red" />,
  youtube: <FaYoutube size={30} color="red" />,
};

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: true, threshold: 0 });
  const { t } = useTranslation();

  return (
    <footer
      className="bg-gradient-to-b from-red-500 to-red-900 pb-20 text-white pt-12 relative"
      ref={ref}
    >
      <UpAnimation inView={inView} />
      <DownAnimation inView={inView} />
      <div className="container mx-auto px-4 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Expo Info */}
          <motion.div
            className="max-w-2xl mb-12"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={EXPO_INFO.logo}
              alt="Motorex Expo Logo"
              width={200}
              className="-ml-8"
            />
            <p>{t("footer.expoDates")}</p>
            <br />
            <p>{t("footer.expoLocation")}</p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="max-w-2xl mb-12"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {CONTACT_INFO.map((item) => (
              <div key={item.labelKey} className="mb-4">
                <h4 className="font-bold">{t(item.labelKey)}</h4>
                <p>{t(item.valueKey)}</p>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col space-y-5 space-x-5"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {CTA_BUTTONS.map((btn) => (
              <a
              href={btn.href}
                key={btn.labelKey}
                className={`${btn.style} text-white text-center w-40 py-2 rounded-md font-medium transition duration-300`}
              >
                {t(btn.labelKey)}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Quick Links */}
        {/* <motion.div
          className="mt-10"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="border-b-white border-b-2 w-25">{t("footer.quickLinks")}</h1>
          <br />
          <ul className="space-x-6 flex flex-row">
            {QUICK_LINKS.map((link) => (
              <li key={link.labelKey}>
                <a href={link.href} className="text-white hover:text-white">
                  {t(link.labelKey)}
                </a>
              </li>
            ))}
          </ul>
        </motion.div> */}

        {/* Social Icons */}
        <br />
        <motion.div
          className="flex flex-row items-center space-x-4 py-4"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {SOCIAL_ICONS.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              className="text-white bg-white w-10 h-10 flex justify-center items-center rounded-full hover:text-blue-300 transition-colors duration-200"
            >
              {ICONS_MAP[name]}
            </a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}