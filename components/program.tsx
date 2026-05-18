'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Program() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const programItems = [
    { time: '09:00 - 10:00', activity: 'Opening Keynote Address', location: 'Main Auditorium' },
    { time: '10:15 - 12:00', activity: 'Research Paper Sessions Track A', location: 'Hall A & B' },
    { time: '12:00 - 13:00', activity: 'Lunch Break', location: 'Dining Area' },
    { time: '13:00 - 14:30', activity: 'Parallel Workshops', location: 'Multiple Venues' },
    { time: '14:30 - 15:00', activity: 'Coffee Break', location: 'Foyer' },
    { time: '15:00 - 16:30', activity: 'Panel Discussion', location: 'Main Auditorium' },
    { time: '17:00+', activity: 'Evening Reception & Networking', location: 'Terrace' },
  ];

  return (
    <section ref={ref} className="w-full py-24 bg-white border-t border-gray-200" id="program">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-black mb-4">Program Schedule</h2>
          <p className="text-base font-light text-gray-600">Three days of presentations, workshops, and networking</p>
        </motion.div>

        <motion.div
          className="space-y-px"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {programItems.map((item, index) => (
            <motion.div
              key={index}
              className="border border-gray-200 border-t-0 first:border-t p-6 hover:bg-gray-50 transition-colors duration-300 group"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <p className="text-xs font-light tracking-wide text-gray-600 uppercase mb-1">Time</p>
                  <p className="text-sm font-light text-black">{item.time}</p>
                </div>
                <div>
                  <p className="text-xs font-light tracking-wide text-gray-600 uppercase mb-1">Activity</p>
                  <p className="text-sm font-light text-black">{item.activity}</p>
                </div>
                <div>
                  <p className="text-xs font-light tracking-wide text-gray-600 uppercase mb-1">Location</p>
                  <p className="text-sm font-light text-black">{item.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
