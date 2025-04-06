import React from "react";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../Constants";
import { copyrightSign } from "../assets/icons";
import { FaGithub, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const upVariant = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  const downVariant = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="max-container">
      <motion.div
        variants={upVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col"
      >
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="logo" width={150} height={46} />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new terms at your nearest nike store. find
            your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon, index) => (
              <div
                key={index}
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full hover:bg-slate-gray cursor-pointer transition-all duration-200 ease-in-out"
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className="text-white mb-6 font-montserrat text-2xl font-medium leading-normal">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    key={link.name}
                    className="mt-3 text-base leading-normal font-montserrat text-white-400 cursor-pointer hover:text-slate-gray"
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={downVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="flex justify-between text-white-400 mt-6 pb-5 pt-30 max-md:flex-col max-md:items-center gap-5"
      >
        <div className="flex flex-1 justify-start items-center gap-2 font-poppins cursor-pointer">
          <img
            src={copyrightSign}
            alt="copy right"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved</p>
        </div>
        <div className="flex flex-1 gap-3">
          <a
            href="https://github.com/Jordan-devs/Nike.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              size={20}
              className="hover:fill-slate-gray cursor-pointer"
            />
          </a>
          <a
            href="https://www.tiktok.com/@ola_codes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok
              size={20}
              className="hover:fill-slate-gray cursor-pointer"
            />
          </a>

          <a href="" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp
              size={20}
              className="hover:fill-slate-gray cursor-pointer"
            />
          </a>
        </div>
        <p className="font-poppins cursor-pointer">Made with 💖 by olacodes.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
