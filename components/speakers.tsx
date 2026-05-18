"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import SpeakerCard from './speaker-card';
import { speakers as speakersData } from '@/lib/speakers';

export default function Speakers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="w-full py-24 bg-white border-t border-gray-200" id="speakers">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-black mb-4">Distinguished Speakers</h2>
          <p className="text-base font-light text-gray-600">Leading academics and researchers from around the world</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {speakersData.map((speaker, index) => (
            <motion.div
              key={speaker.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              {/* Wrap card in Link to profile page */}
              <a href={`/speakers/${speaker.slug}`} className="block">
                <SpeakerCard
                  name={speaker.name}
                  title={speaker.specialty}
                  institution={speaker.affiliation}
                  country={speaker.country}
                  bio={speaker.bio}
                  image={speaker.photo}
                />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
