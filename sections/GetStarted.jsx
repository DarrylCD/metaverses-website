'use client';
import { motion } from 'framer-motion';
import { TypingText, StartSteps, TitleText } from '../components';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion.js';
import styles from '../styles';
import { startingFeatures } from '../constants';

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`} id="get-started">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`flex-[0.75] ${styles.flexCenter} flex-col relative`}
      >
        <img
          src='/get-started.png'
          alt='get-started'
          className='w-[90%] h-[90%] object-contain'
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex flex-col justify-center"
      >
        <TypingText title="| How Metaverses Works?" />
        <TitleText title={<>Get started with just a few clicks</>} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures.map((feature, index) => (
            <StartSteps
              key={feature}
              number={index + 1}
              text={feature}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
