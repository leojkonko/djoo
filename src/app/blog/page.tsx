"use client";

import { motion } from "framer-motion";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <motion.div
        className="text-center max-w-2xl"
        initial={{ opacity: 0, scale: 0.8, rotateY: -45 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{
          duration: 1.2,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
      >
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            EM CONSTRUÇÃO
          </h1>
          <div className="w-32 h-1 bg-white mx-auto"></div>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Estamos preparando algo incrível para você.
        </motion.p>

        <motion.div
          className="flex items-center justify-center space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <motion.div
            className="w-3 h-3 bg-white rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: 0,
            }}
          />
          <motion.div
            className="w-3 h-3 bg-white rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: 0.3,
            }}
          />
          <motion.div
            className="w-3 h-3 bg-white rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: 0.6,
            }}
          />
        </motion.div>
      </motion.div>
    </main>
  );
}
