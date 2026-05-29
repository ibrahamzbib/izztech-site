'use client';

import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="mx-auto max-w-xl text-center border-t border-border-default/50 pt-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-medium tracking-tight text-text-primary mb-6">
            Ready to simplify?
          </h2>
          <p className="text-text-secondary mb-10">
            Let's discuss how automation can give your team its time back.
          </p>
          <a 
            href="mailto:ibraham@izztech.io"
            className="inline-flex items-center justify-center bg-accent-3 text-white px-8 py-3.5 rounded-full text-sm font-medium transition-opacity hover:opacity-90"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
