'use client';

import { motion } from 'framer-motion';

const services = [
  {
    title: "Lead Generation",
    description: "Automated social monitoring and lead scoring systems tailored for your niche."
  },
  {
    title: "Automation Infrastructure",
    description: "Custom n8n workflows that connect your tools and eliminate manual tasks."
  },
  {
    title: "Digital Presence",
    description: "Clean, fast, minimal digital business cards and landing pages."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 border-t border-border-default/50">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-medium tracking-tight mb-12 text-text-primary">Capabilities</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" as const }}
              className="border-t border-border-default pt-6 transition-colors duration-300 hover:border-accent-3"
            >
              <h3 className="text-lg font-medium text-text-primary mb-3">{service.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
