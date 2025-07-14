'use client';
import { motion } from 'framer-motion';
import { AnimatedBorder } from '../components/ui/AnimatedBorder';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut" // Smoother curves
          }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I'm
            </span>
            <br />
            [Eris]
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Fullstack Developer crafting digital experiences with modern web technologies.
          </p>
          <div className="flex justify-center">
            <AnimatedBorder>
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium text-lg">
                View My Work
              </button>
            </AnimatedBorder>
          </div>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* 3D avatar or abstract shape */}
          <div className="w-full h-80 md:h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl backdrop-blur-lg border border-white/10 shadow-2xl flex items-center justify-center">
            <span className="text-4xl"></span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};