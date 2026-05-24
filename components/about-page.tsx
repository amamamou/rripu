"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const reduce = useReducedMotion();

  const fade = (delay = 0) =>
    reduce
      ? { initial: {}, animate: {} }
      : { initial: { opacity: 0, y: 16 }, animate: inView ? { opacity: 1, y: 0 } : {}, transition: { duration: 0.7, delay } };

  return (
    <main ref={ref} className="w-full bg-white text-black">
      {/* HERO / INTRO */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 py-16 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
          <motion.div {...fade(0)} className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extralight leading-tight">RIPU — Research & Innovation in Pedagogy and Universities</h1>
            <p className="mt-4 text-sm md:text-base text-neutral-600 max-w-2xl leading-relaxed">
              An annual international conference convening researchers, educators and institutional leaders
              to advance pedagogy, scholarship and higher-education practice through rigorous dialogue and
              interdisciplinary collaboration.
            </p>
          </motion.div>

          <motion.div {...fade(0.08)} className="pt-2">
            <p className="text-sm text-neutral-600 leading-relaxed max-w-md">
              RIPU brings together institutions and practitioners from around the world to share peer-reviewed
              research, keynote perspectives, and practice-focused workshops — forming a lasting archive of
              scholarship and institutional partnerships.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ABOUT RIPU (alternate tone/background) */}
      <section className="bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 md:px-10 py-12 md:py-20">
          <motion.div {...fade(0.06)}>
            <h2 className="text-2xl md:text-3xl font-light">About the conference</h2>
            <p className="mt-4 text-sm text-neutral-600 max-w-3xl leading-relaxed">
              RIPU is an institutional forum for scholarship and practice. Each edition prioritises peer-reviewed
              contributions, institutional dialogue and the translation of evidence into educational policy and practice.
              The conference is organised as an annual convening, with international participation and a rigorous review process.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONFERENCE FOCUS */}
      <section>
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-12 md:py-24">
          <motion.div {...fade(0.08)}>
            <h3 className="text-xl font-light">Conference focus</h3>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                ["Pedagogy & Learning", "Evidence-led approaches to teaching and curriculum design."],
                ["Innovation in Higher Education", "Organisational practice, leadership and institutional innovation."],
                ["Digital Education", "Hybrid learning, assessment and the ethics of educational technology."],
                ["Research & Policy", "Translating research into policy frameworks and governance."],
                ["Interdisciplinary Collaboration", "Cross-disciplinary projects that reframe pedagogical problems."],
              ].map(([title, desc]) => (
                <div key={title} className="space-y-2">
                  <div className="text-lg font-light text-black">{title}</div>
                  <div className="text-sm text-neutral-600 max-w-md">{desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTERNATIONAL COMMUNITY (alternate background) */}
      <section className="bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-12 md:py-20">
          <motion.div {...fade(0.06)}>
            <h3 className="text-xl font-light">International community</h3>
            <p className="mt-4 text-sm text-neutral-600 max-w-3xl leading-relaxed">
              RIPU gathers researchers, universities, educators and institutional leaders from diverse regions.
              The conference fosters institutional partnerships and networks that continue beyond the event — a
              durable community invested in higher-education advancement.
            </p>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-sm text-black/90 font-light">Researchers</div>
              <div className="text-sm text-black/90 font-light">Universities</div>
              <div className="text-sm text-black/90 font-light">Educators</div>
              <div className="text-sm text-black/90 font-light">Institutions</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EXPERIENCE / SOUSSE */}
      <section>
        <div className="max-w-6xl mx-auto px-4 md:px-10 py-12 md:py-20">
          <motion.div {...fade(0.08)}>
            <h3 className="text-xl font-light">Experience — Sousse</h3>
            <p className="mt-4 text-sm text-neutral-600 max-w-3xl leading-relaxed">
              Set on the Mediterranean coast, Sousse offers a calm and culturally rich setting for international
              academic exchange. The city’s history and hospitality provide a reflective backdrop that complements
              rigorous scholarly conversation and collaborative workshops.
            </p>
          </motion.div>
        </div>
      </section>

      {/* RIPU ARCHIVE SECTION */}
      <section className="bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-16 md:py-24">
          <motion.div {...fade(0.1)} className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-light">A growing archive of scholarship</h3>
              <p className="mt-4 text-sm text-neutral-600 max-w-2xl leading-relaxed">
                Each edition of RIPU contributes to a public record of peer-reviewed work, keynote conversations and
                institutional outcomes. The archive makes past editions discoverable for researchers and institutions.
              </p>
            </div>

            <div>
              <Link href="/ripu-archive" className="inline-block group">
                <span className="inline-flex items-center justify-center px-5 py-3 border border-black/10 text-sm font-medium tracking-wide text-black transition-all duration-200 hover:bg-[#7b2cbf]/6 focus:outline-none focus:ring-2 focus:ring-[#7b2cbf]/8 rounded">
                  Explore Past Editions
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CLOSING STATEMENT */}
      <section>
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-16 md:py-28">
          <motion.div {...fade(0.12)} className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight leading-tight">Committed to rigorous exchange and lasting collaboration.</h2>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
