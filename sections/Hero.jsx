'use client';
import { motion } from 'framer-motion';
import React from 'react';
import { slideIn, staggerContainer, textVariant } from '../utils/motion.js';
import styles from '../styles';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }} // to ensure the animation triggers once when the section is in view
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1
          variants={textVariant(1.1)}
          className={styles.heroHeading}
        >
          Discover the
          <br className="md:block hidden" />
          <span className="text-gradient block text-center"> Metaverse</span>
        </motion.h1>
        <motion.p
          variants={textVariant(1.2)}
          className="mt-2 font-normal text-[16px] text-center text-secondary-white"
        >
          Explore the endless possibilities of the metaverse, where reality meets imagination.
        </motion.p>
        <motion.button
          variants={textVariant(1.3)}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
        >
          Get Started
        </motion.button>
      </div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] rounded-tl-[140px] z-0 -top-[30px] blue-gradient" />
        <img
          src="/cover.png"
          alt="cover"
          className="w-full h-full object-cover rounded-tl-[140px] z-10 relative"
        />

        <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50]
              pr-[40px] relative z-10">
            <img
              src="/stamp.png"
              alt="stamp"
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
            />
          </div>
        </a>
        <div className="absolute w-full h-[300px] rounded-tl-[140px] z-0 -top-[30px] blue-gradient opacity-50" />
      </motion.div>
    </motion.div>

  </section>
);

export default Hero;
