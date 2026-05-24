"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Dates() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });

  const items = [
    {
      date: '15 Jun',
      title: 'Paper Submission',
      description: 'Deadline for full paper and abstract submissions.'
    },
    {
      date: '20 Jul',
      title: 'Notification of Acceptance',
      description: 'Authors receive peer-review decisions and feedback.'
    },
    {
      date: '25 Aug',
      title: 'Registration Deadline',
      description: 'Final date for author and participant registration.'
    },
    {
      date: '09 Oct',
      title: 'Conference Opening',
      description: 'RIPU 2027 begins in Sousse, Tunisia.'
    },
  ];

  return (
    <section ref={ref} id="dates" className="relative w-full bg-white overflow-hidden border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-28">

        <motion.header
          className="mb-12"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-black mb-4">Important Dates</h2>
               <p className="text-base font-light text-gray-600">Submission, review, and conference schedule
</p>

        </motion.header>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-10 lg:gap-12 items-start"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {items.map((it, idx) => {
            const [day, month] = it.date.split(' ');
            return (
              <motion.article
                key={it.date}
                className="relative py-6 first:pt-0 lg:py-0 border-b border-black/5 lg:border-0"
                initial={{ opacity: 0, y: 8 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
              >

                {/* MOBILE — clean minimal row */}
                <div className="lg:hidden flex items-start gap-5">

                  <div className="shrink-0">
                    <div className="text-3xl font-extralight leading-none bg-gradient-to-b from-[#7b2cbf] to-[#030822] bg-clip-text text-transparent opacity-20">
                      {day}
                    </div>

                    <div className="mt-1 text-[10px] uppercase tracking-[0.22em] text-[#5f4b8b]/70 font-medium">
                      {month}
                    </div>
                  </div>

                  <div className="min-w-0 pt-0.5">
                    <h3 className="text-[17px] leading-tight font-light text-black">{it.title}</h3>

                    <p className="mt-2 text-sm leading-relaxed text-neutral-500">{it.description}</p>
                  </div>

                </div>

                {/* DESKTOP — editorial layout */}
                <div className="hidden lg:block">
                  <div className="absolute left-0 top-0 -translate-y-2">
                    <div className="text-7xl font-extralight leading-none bg-gradient-to-b from-[#7b2cbf] to-[#030822] bg-clip-text text-transparent opacity-15">
                      {day}
                    </div>

                    <div className="mt-2 text-[11px] uppercase tracking-[0.22em] text-[#5f4b8b]/70 font-medium">
                      {month}
                    </div>
                  </div>

                  <div className="pl-20">
                    <h3 className="text-2xl font-light text-black">{it.title}</h3>
                    <p className="mt-3 text-sm text-neutral-600 max-w-md leading-relaxed">{it.description}</p>
                  </div>
                </div>

              </motion.article>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
