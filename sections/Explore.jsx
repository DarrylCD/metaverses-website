'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { TypingText, ExploreCard, TitleText } from '../components';
import { staggerContainer } from '../utils/motion.js';
import styles from '../styles';
import { exploreWorlds } from '../constants';

const Explore = () => {

  const [active, setActive] = useState(''); // State to track the active card

  return (
    <section className={`${styles.paddings}`}
      id="explore"> {/* Added id for navigation */}
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
        <div className="mt-[50px] flex lg:flex-row flex-col 
      min-h-[70vh] gap-5 overflow-x-auto">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world} // Spread operator to pass all properties of the world object
              index={index} // Pass index for animation purposes
              active={active} // 'active' is a state variable to track the active card
              handleClick={setActive} // 'setActive' is a function to set the active card
            />
          ))}
        </div>
      </motion.div>
      <div className="absolute w-full h-[300px] -bottom-[200px] left-0 gradient-03" />
    </section>
  );
};

export default Explore;
