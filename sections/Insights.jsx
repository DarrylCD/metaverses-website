"use client";
import { motion } from "framer-motion";
import { TypingText, InsightCard, TitleText } from "../components";
import { staggerContainer } from "../utils/motion.js";
import styles from "../styles";
import { insights } from "../constants";

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`} id="get-started">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Insights" textStyles="text-center" />
      <TitleText
        title={<>Insight about metaverses</>}
        textStyles="text-center"
      />
      <motion.div
        variants={staggerContainer}
        className="mt-[50px] flex flex-wrap justify-center gap-[24px]"
      >
        {insights.map((insight, index) => (
          <InsightCard
            key={`insight-${index}`} // Ensure unique key for each card
            {...insight}
            index={index + 1}
          />
        ))}
      </motion.div>
    </motion.div>
  </section>
);

export default Insights;
