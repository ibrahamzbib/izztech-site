'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="pt-40 pb-20 md:pt-52 md:pb-32 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" as const }}
          className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-text-primary mb-6"
        >
          Tech consulting for the modern startup.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" as const }}
          className="text-lg md:text-xl text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          We design and build clean, scalable infrastructure and automated workflows, so you can focus on your product.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <a 
            href="#contact"
            className="inline-flex items-center justify-center bg-accent-3 text-white px-8 py-3.5 rounded-full text-sm font-medium transition-opacity hover:opacity-90"
          >
            Start a conversation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
