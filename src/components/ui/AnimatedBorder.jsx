'use client';
import { motion } from 'framer-motion';

export const AnimatedBorder = ({ children }) => {
  return (
    <motion.div
      whileHover="hover"
      variants={{
        initial: {
          background: 'transparent',
        },
        hover: {
          background: 'linear-gradient(90deg, #7b2ff7, #f107a3)',
        },
      }}
      className="p-[2px] rounded-lg transition-all"
    >
      <div className="bg-[#0f172a] rounded-lg">
        {children}
      </div>
    </motion.div>
  );
};
