'use client';
import { motion } from 'framer-motion';
import { TypingText } from '../components/CustomTexts.jsx';
import { slideIn, staggerContainer } from '../utils/motion.js';
import styles from '../styles';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Metaverses" textStyles="text-center" />
      <motion.p
        variants={slideIn('up', 'tween', 0.2, 1)}
        className="mt-2 font-normal text-[20px] text-center text-secondary-white"
      >
        The metaverse is a collective virtual space that merges physical and digital realities, enabling immersive experiences and interactions.
      </motion.p>
    </motion.div>
    <motion.div
      variants={slideIn('up', 'tween', 0.2, 1)}
      className="mt-10 flex justify-center items-center"
    >
      <img
        src="/about-image.png"
        alt="About Metaverse"
        className="w-full sm:h-[500px] h-[350px] object-cover rounded-lg shadow-lg"
      />
    </motion.div>
  </section>
);
export default About;
