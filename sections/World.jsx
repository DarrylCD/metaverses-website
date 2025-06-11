'use client';
import { motion } from 'framer-motion';
import { TypingText, TitleText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion.js';
import styles from '../styles';
import { newFeatures } from '../constants';

const World = () => (
  <section className={`${styles.paddings} relative z-10`} id="get-started">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People in the world" textStyles="text-center" />
      <TitleText
        title={<>Track friends around you and invite them to play together in the same world</>}
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px] overflow-hidden"
        style={{ background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)' }}
      >
        <img
          src="/map.png"
          alt="map"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] 
        rounded-full bg-[#5d6680]">
          <img
            src="/people-01.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] 
        rounded-full bg-[#5d6680]">
          <img
            src="/people-02.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] 
        rounded-full bg-[#5d6680]">
          <img
            src="/people-03.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
        <motion.div
          variants={fadeIn('up', 'tween', 0.4, 1)}
          className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-20 backdrop-blur-md p-4 rounded-lg shadow-lg"
        >
          <p className="text-white text-center">Join the adventure with friends!</p>
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
