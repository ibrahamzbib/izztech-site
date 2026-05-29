'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    title: "Discovery",
    description: "We analyze your current workflow and identify high-leverage opportunities for automation."
  },
  {
    title: "Build",
    description: "We design and implement custom systems tailored specifically to your operational needs."
  },
  {
    title: "Deliver",
    description: "We hand over the keys, provide documentation, and offer ongoing support."
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 px-6 bg-[#F9F9F8]">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-medium tracking-tight mb-12 text-text-primary">Approach</h2>
        
        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col md:flex-row gap-4 md:gap-16"
            >
              <div className="text-sm font-medium text-accent-3 w-16 pt-1">
                0{index + 1}
              </div>
              <div>
                <h3 className="text-lg font-medium text-text-primary mb-2">{step.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed max-w-lg">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
