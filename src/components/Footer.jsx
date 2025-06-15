import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import Auth from "./Auth";
import UpAnimation from "./UpAnimation";
import DownAnimation from "./DownAnimation";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: true, threshold: 0 });

  return (
    <footer className="bg-gradient-to-b from-red-500 to-red-900 pb-20 text-white pt-12 relative"       ref={ref}>
      <UpAnimation inView={inView}/>
      <DownAnimation inView={inView}/>
      <div className="container mx-auto px-4 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="max-w-2xl mb-12"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            {" "}
            <img
              src="logo.png"
              alt="EV AutoShow Logo"
              width={200}
              className="-ml-8"
            />
            <p className="">28 - 30 Oct, 2025</p>
            <br />
            <p>
              Riyadh International Convention & Exhibition Center, Saudi Arabia.
            </p>
          </motion.div>

          <motion.div
            className="max-w-2xl mb-12"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            {" "}
            <h4 className="font-bold">Contact</h4>
            <p>contact@evautoshowonline.com</p>
            <br />
            <h4 className="font-bold">Sponsoring, speaking, or exhibiting</h4>
            <p>contact@evautoshowonline.com</p>
            <br />
            <h4 className="font-bold ">EV AUTO SHOW Team</h4>
            <p>contact@evautoshowonline.com</p>
          </motion.div>

          <motion.div
            className=" flex flex-col space-y-5  space-x-5 "
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <button className="bg-red-600 hover:bg-red-700 text-white w-40  py-2  rounded-md font-medium transition duration-300">
              REGISTER TO VISIT
            </button>
            <button className="bg-red-400  text-white w-40 py-2  rounded-md font-medium transition duration-300">
              Enquire to Exhibit{" "}
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white w-40  py-2  rounded-md font-medium transition duration-300">
              Get to know us{" "}
            </button>
          </motion.div>
          {/* <div>
            <h4 className="font-bold mb-4">Subscribe</h4>
            <p className="text-gray-400 mb-4">
              Stay updated with our latest news and events.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-md text-gray-900 w-full"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md">
                Subscribe
              </button>
            </div>
          </div> */}
        </div>
        <motion.div
          className="mt-10"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <h1 className="border-b-white border-b-2 w-25">QUICK LINKS</h1>
          <br />
          <ul className="space-x-6 flex flex-row">
            <li>
              <a href="#" className="text-white hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-white">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-white">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-white">
                Privacy Policy
              </a>
            </li>
          </ul>
        </motion.div>
        <br />
        <motion.div
          className="flex flex-row  items-center space-x-4 py-4 "
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <a
            href="#"
            className="text-white bg-white w-10 h-10  flex flex-row justify-center items-center rounded-full  hover:text-blue-300 transition-colors duration-200  "
          >
            <FaFacebookF size={30} color="red" />
          </a>
          <a
            href="#"
            className="text-white bg-white w-10 h-10  flex flex-row justify-center items-center rounded-full  hover:text-blue-300 transition-colors duration-200  "
          >
            <FaTwitter size={30} color="red" />
          </a>
          <a
            href="#"
            className="text-white bg-white w-10 h-10  flex flex-row justify-center items-center rounded-full  hover:text-blue-300 transition-colors duration-200  "
          >
            <FaInstagram size={30} color="red" />
          </a>
          <a
            href="#"
            className="text-white bg-white w-10 h-10 flex flex-row justify-center items-center rounded-full  hover:text-blue-300 transition-colors duration-200  "
          >
            <FaLinkedinIn size={30} color="red" />
          </a>
          <a
            href="#"
            className="text-white bg-white w-10 h-10  flex flex-row justify-center items-center rounded-full  hover:text-blue-300 transition-colors duration-200  "
          >
            <FaYoutube size={30} color="red" />
          </a>
        </motion.div>
      </div>
      {/* <Auth /> */}
    </footer>
  );
}
