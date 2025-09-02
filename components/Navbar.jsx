"use client";

import { motion } from "framer-motion";
import React from "react";
// import styles from '../styles';
// import { usePathname } from 'next/navigation';
// import { useEffect } from 'react';
// import { useRouter } from 'next/router';
// import { useState } from 'react';
// import { useTheme } from 'next-themes';
import { navVariants } from "../utils/motion.js";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView={"show"}
    className="px-6 sm:px-16 py-8 relative"
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className="max-w-7xl mx-auto flex justify-between gap-8">
      <img
        src="/search.svg"
        alt="search"
        className="w-[24px] h-[24px] object-contain"
      />
      <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
        Metaverses
      </h2>
      <img
        src="/menu.svg"
        alt="menu"
        className="w-[24px] h-[24px] object-contain"
      />
    </div>
  </motion.nav>
);

export default Navbar;
