'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { TypingText, ExploreCard, TitleText } from '../components';
import { staggerContainer } from '../utils/motion.js';
import styles from '../styles';
import { exploreWorlds } from '../constants';

const Explore = () => (
  <section className={`${styles.paddings}`}
    id="explore">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| The Worlds" textStyles="text-center" />
      <TitleText
        title={
          <>
            Choose the world you want to explore
            <br className="md:block hidden" />
            <span className="text-gradient"> in the metaverse</span>
          </>
        }
        textStyles="text-center"
      />
      <div className="mt-[50px] flex flex-wrap justify-center gap-[24px]">
        {exploreWorlds.map((world, index) => (
          <ExploreCard
            key={world.id}
            {...world}
            index={index}
          />
        ))}
      </div>
    </motion.div>
    <div className="absolute w-full h-[300px] -bottom-[200px] left-0 gradient-03" />
  </section>
);

export default Explore;
