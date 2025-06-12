'use client';
import { motion } from 'framer-motion';
import { TypingText, InsightCard, TitleText } from '../components';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion.js';
import styles from '../styles';

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`} id="get-started">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex 
      lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex flex-col justify-end 
        gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
      >
        <div className="feedback-gradient" />
        <TypingText title="| Feedback" />
        <TitleText title={<>What our users say</>} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          <p className="text-gray-400 text-base">
            "This platform has transformed the way I interact with the metaverse. The insights are invaluable!"
          </p>
          <p className="text-gray-400 text-base">
            "A game-changer in understanding virtual environments. Highly recommend!"
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <img
          src="/planet-09.png"
          alt="planet-09"
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />
        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <img
            src="/stamp.png"
            alt="stamp"
            className="w-[155px] h-[155px] object-contain"
          />
        </motion.div>
      </motion.div>
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex flex-col justify-end 
        gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
      >
        <TypingText title="| Join the Conversation" />
        <TitleText title={<>Share your thoughts with us</>} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          <p className="text-gray-400 text-base">
            "We value your feedback! Let us know how we can improve your experience."
          </p>
          <p className="text-gray-400 text-base">
            "Your insights help shape the future of our platform. Share your thoughts today!"
          </p>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
