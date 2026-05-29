'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" as const }}
        >
          <h2 className="text-2xl font-medium tracking-tight mb-8 text-text-primary">About</h2>
          
          <p className="text-lg text-text-secondary leading-relaxed mb-6">
            Founded by Ibraham Zbib, IZZ Tech is a consulting firm focused on creating leverage for small teams and growing brands.
          </p>
          <p className="text-lg text-text-secondary leading-relaxed">
            We believe in writing less code, building smarter systems, and keeping things simple.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
