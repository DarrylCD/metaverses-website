'use client';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion.js';

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="bg-glasmosphism w-full p-4 rounded-lg shadow-lg hover:shadow-xl 
    transition-shadow duration-300 flex items-center gap-6"
  >
    {/* Left: Image */}
    <img
      src={imgUrl}
      alt="planet-01"
      className="w-[100px] h-[100px] object-cover rounded-2xl flex-shrink-0"
    />

    {/* Center: Content */}
    <div className="flex flex-col flex-1 min-w-0 justify-center">
      <h4 className="text-secondary-white font-bold mb-2 text-[22px] leading-tight">{title}</h4>
      <p className="text-gray-400 mb-2 text-base">{subtitle}</p>
      <span className="text-xs text-gray-500">Published on: 2023-10-01</span>
    </div>

    {/* Right: Arrow Button */}
    <button
      className="flex items-center justify-center w-[56px] h-[56px] rounded-full border border-white bg-transparent hover:bg-white hover:bg-opacity-10 transition-all duration-300 ml-4"
      aria-label="Read more"
    >
      <img
        src="/arrow.svg"
        alt="arrow"
        className="w-6 h-6 object-contain"
      />
    </button>
  </motion.div>
);

export default InsightCard;