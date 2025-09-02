"use client";
import { motion } from "framer-motion";
import { socials } from "../constants";
import styles from "../styles";
import { footerVariants } from "../utils/motion";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`${styles.paddings} relative py-8`} // Ensure the footer has a background color and text color
    id="footer"
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Metaverses
        </h4>
        <button
          type="button"
          className="flex items-center gap-[12px] h-fit bg-[#25618b] 
        text-black px-4 py-2 rounded-[32px] hover:bg-gray-200 transition-colors 
        duration-300"
        >
          <img
            src="/headset.svg"
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
          />

          <span className="font-normal text-[16px] text-white">
            Enter Metaverse
          </span>
        </button>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />
        <p className="text-gray-400 text-[14px]">
          © 2025 Metaverses. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <p className="text-gray-400 text-[14px]">
            Explore the future of virtual worlds with us. Join our community and
            stay updated on the latest trends and technologies in the metaverse.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {socials.map((social) => (
              <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
