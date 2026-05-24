"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section ref={ref} className="relative w-full min-h-screen overflow-hidden">
      {/* Background carousel fills the section */}
      <Carousel isInView={isInView} />

      {/* Centered overlay content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="text-center px-6"
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-xs font-light tracking-[0.15em] text-white/90 uppercase mb-4">RIPU26</div>

          <h1 className="text-3xl md:text-5xl font-light leading-tight text-white max-w-3xl mx-auto">
            International Conference on Research &amp; Innovation in Pedagogy and Universities
          </h1>

          <p className="mt-4 text-lg text-white/90">Sousse, Tunisia — October 2026</p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href="#papers"
              className="inline-block text-sm font-light tracking-wide text-white border border-white/60 px-6 py-3 hover:bg-white/10 transition-all duration-300"
            >
              Call for Papers
            </a>
            <a
              href="#contact"
              className="inline-block text-sm font-light tracking-wide text-white border border-white/60 px-6 py-3 hover:bg-white/10 transition-all duration-300"
            >
              Register
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Carousel({ isInView }: { isInView: boolean }) {
  const images = ['/hero/1.png', '/hero/2.png', '/hero/3.png'];
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % images.length), 5000);
    return () => clearInterval(t);
  }, [isInView]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {images.map((src, i) => (
        <motion.div
          key={src}
          initial={{ opacity: 0 }}
          animate={{ opacity: i === idx ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image src={src} alt={`Hero ${i + 1}`} fill className="object-cover object-top" />
        </motion.div>
      ))}

      {/* Simple indicators */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-4 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`Show slide ${i + 1}`}
            className={`w-2 h-2 rounded-full ${i === idx ? 'bg-white' : 'bg-white/40'} border border-white/60`}
          />
        ))}
      </div>
    </div>
  );
}
