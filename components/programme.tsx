"use client";

import { motion, useReducedMotion } from 'framer-motion';
import React from 'react';

const PURPLE = 'text-[#7b2cbf]';

function Meta({ children }: { children: React.ReactNode }) {
  return <div className="text-xs text-neutral-500 tracking-wider">{children}</div>;
}

function SessionRow({ type, day, time, room, title, speaker, excerpt }: {
  type: 'CONF' | 'WS';
  day: string;
  time: string;
  room: string;
  title: string;
  speaker: string;
  excerpt?: string;
}) {
  return (
    <article className="group flex flex-col md:flex-row md:items-start md:gap-8" tabIndex={0} aria-labelledby={title}>
      <div className="md:w-36 flex-shrink-0">
        <div className="flex items-center gap-3">
          <span className={`inline-block w-1.5 h-1.5 rounded-full ${type === 'WS' ? PURPLE : 'bg-neutral-400'} md:hidden`} aria-hidden />
          <div className="hidden md:block">
            <div className={`text-xs font-medium uppercase ${type === 'WS' ? 'text-[#6f2ab0]' : 'text-neutral-500'}`}>{type === 'CONF' ? 'Conference' : 'Workshop'}</div>
            <div className="mt-2 text-sm text-neutral-500">{day}</div>
            <div className="mt-1 text-sm text-neutral-500">{time}</div>
          </div>
        </div>
      </div>

      <div className="mt-3 md:mt-0 md:flex-1">
        <h3 className="text-lg md:text-xl font-light leading-tight text-slate-900 group-focus:underline" id={title}>
          {title}
        </h3>

        <div className="mt-2 flex items-center gap-3 text-sm text-neutral-600">
          <span className="font-medium text-neutral-700">{speaker}</span>
          <span className="hidden md:inline-block text-neutral-400">—</span>
          <Meta>{`${day} • ${time}`}</Meta>
        </div>

        {excerpt ? <p className="mt-3 text-sm text-neutral-700 max-w-prose">{excerpt}</p> : null}
      </div>
    </article>
  );
}

export default function Programme() {
  const reduce = useReducedMotion();

  const reveal = reduce
    ? { initial: {}, whileInView: {} }
    : { initial: { opacity: 0, y: 8 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.55 } };

  return (
    <section id="programme" className="mt-12">
      <motion.div {...reveal} viewport={{ once: true, amount: 0.12 }}>
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl md:text-3xl font-extralight">Workshops &amp; Conferences</h2>
          <div className="hidden md:block text-sm text-neutral-500">Sélection — RIPU 25</div>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10">
          {/* Left column: curated conference rows with ample breathing room */}
          <div className="space-y-8">
            <SessionRow
              type="CONF"
              day="Jour 1"
              time="60mn"
              room="Salle A"
              title="Impacts de l'IA générative sur les apprentissages"
              speaker="Thierry Spriet"
              excerpt="Exploration critique des effets de l'IA générative sur les approches pédagogiques et scénarios d'apprentissage." />

            <SessionRow
              type="CONF"
              day="Jour 1"
              time="60mn"
              room="Salle C"
              title="L'intelligence artificielle pour les métiers de demain"
              speaker="Nawel Souissi"
              excerpt="Discussion prospective sur les compétences émergentes et les trajectoires professionnelles façonnées par l'IA." />

            <SessionRow
              type="CONF"
              day="Jour 2"
              time="60mn"
              room="Salle A"
              title="Ressources éducatives ouvertes et intelligentes"
              speaker="Denis Gillet"
              excerpt="Présentation d'outils et ressources intégrant l'IA pour soutenir des pratiques pédagogiques transversales." />
          </div>

          {/* Right column: compact workshop program — lighter treatment */}
          <aside className="md:pt-2">
            <div className="sticky top-24">
              <div className="mb-4 text-sm uppercase tracking-wide text-neutral-500">Ateliers</div>

              <div className="space-y-6">
                <div className="group">
                  <div className="text-sm font-medium text-slate-900">IA Générative pour la Préparation des Examens</div>
                  <div className="mt-1 text-xs text-neutral-500">Jour 1 • 45mn — Sonia Sahli</div>
                </div>

                <div className="group">
                  <div className="text-sm font-medium text-slate-900">L'IAG comme assistant d'apprentissage</div>
                  <div className="mt-1 text-xs text-neutral-500">Jour 2 • 45mn — Thierry Spriet</div>
                </div>

                <div className="group">
                  <div className="text-sm font-medium text-slate-900">Collaboration Humain‑IA pour le Design Thinking</div>
                  <div className="mt-1 text-xs text-neutral-500">Jour 2 • 45mn — Denis Gillet</div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </motion.div>
    </section>
  );
}
