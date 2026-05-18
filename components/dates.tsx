'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Dates() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const timeline = [
    { date: '15 March', title: 'Opening Session', description: 'Welcome address and keynote presentations' },
    { date: '16 March', title: 'Research Presentations', description: 'Contributed papers and panel discussions' },
    { date: '17 March', title: 'Closing Ceremony', description: 'Final remarks and closing reception' },
  ];

  return (
    <section ref={ref} className="w-full py-24 bg-white border-t border-gray-200" id="dates">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-black mb-4">Important Dates</h2>
          <p className="text-base font-light text-gray-600">March 2027 • Sousse, Tunisia</p>
        </motion.div>

        <motion.div
          className="space-y-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              className="border-l-2 border-gray-300 pl-8 py-2"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                className="text-xs font-light tracking-wide text-gray-600 uppercase mb-2"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.1 + 0.15 }}
              >
                {item.date}
              </motion.div>
              <h3 className="text-xl font-light text-black mb-1">{item.title}</h3>
              <p className="text-sm font-light text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
