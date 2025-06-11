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
    </motion.div>
  </section>
);

export default World;
