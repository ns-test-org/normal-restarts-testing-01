'use client';

import { motion } from 'framer-motion';

export default function Landing() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
      <div className="text-center">
        <motion.h1 
          className="text-6xl md:text-8xl font-bold text-white mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Hello World
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-white/90 font-light"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          Welcome to your new landing page
        </motion.p>
      </div>
    </div>
  );
}

