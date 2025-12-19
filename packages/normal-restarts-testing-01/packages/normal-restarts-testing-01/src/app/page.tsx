'use client';

import { motion } from 'framer-motion';

export default function Landing() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center px-6">
        <motion.h1 
          className="text-6xl md:text-8xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Hello World
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-gray-600"
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

