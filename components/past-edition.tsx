"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function PastEdition() {
  const photos = [
    { src: "/ripu.jpg", alt: "Keynote speakers on stage at RIPU25" },
    { src: "/ripu/2.png", alt: "Attendees in a workshop session" },
    { src: "/ripu/3.png", alt: "Panel discussion with international guests" },
    { src: "/ripu/p6.jpg", alt: "Networking at the conference reception" },
    { src: "/ripu/p8.jpg", alt: "Group photo of participants" },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
      },
    },
  };

  return (
    <section
      className="relative overflow-hidden bg-[#F7F4FF] py-32 md:py-44"
      aria-labelledby="past-edition"
      role="region"
    >

      {/* subtle atmosphere */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#A64DFF]/[0.05] blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">

    {/* Header */}
<div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-14">

  {/* LEFT */}
  <div className="max-w-3xl">

    <div className="flex items-center gap-4 mb-7">

      <div className="w-8 h-px bg-[#A64DFF]/40" />

      <span className="text-[10px] uppercase tracking-[0.28em] text-[#6C2EB7]/65">
        Archive · 2025
      </span>

    </div>

    <h2
      id="past-edition"
      className="text-5xl md:text-7xl font-extralight tracking-tight leading-[0.94] text-[#1B1142]"
    >
      RIPU25
    </h2>

    <p className="mt-7 text-sm md:text-base leading-relaxed text-[#1B1142]/58 max-w-2xl">
      Revivez les moments marquants de l’édition précédente —
      conférences, ateliers et rencontres.
    </p>

  </div>

  {/* RIGHT */}
  <div className="lg:pt-2 lg:min-w-[260px]">

    <div className="flex flex-col items-start lg:items-end">

      {/* metadata */}
      <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-[#6C2EB7]/60">

        <div className="w-1.5 h-1.5 rounded-full bg-[#A64DFF]" />

        30–31 Mai 2025

      </div>

      {/* subtle divider */}
      <div className="w-20 h-px bg-[#1B1142]/10 my-6" />

      {/* CTA */}
      <Link
        href="/ripu25"
        className="group inline-flex items-center gap-3"
        aria-label="Explorer l’édition complète de RIPU25"
      >

        <span className="text-sm text-[#1B1142]/85 transition-colors duration-300 group-hover:text-[#6C2EB7]">
          Explorer l’édition complète
        </span>

        <div className="flex items-center justify-center w-8 h-8 rounded-full border border-[#1B1142]/10 bg-white/70 transition-all duration-300 group-hover:border-[#A64DFF]/30 group-hover:bg-[#A64DFF]/10">

          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            className="text-[#6C2EB7] transition-transform duration-300 group-hover:translate-x-0.5"
            aria-hidden
          >
            <path
              d="M5 12h14M13 5l7 7-7 7"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

        </div>

      </Link>

    </div>

  </div>

</div>

        {/* Gallery */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-5 auto-rows-[170px] md:auto-rows-[240px]"
          role="list"
        >

          {/* Large image */}
          <motion.figure
            variants={item}
            className="col-span-2 row-span-2 relative overflow-hidden rounded-[28px]"
            role="listitem"
          >
            <img
              src={photos[0].src}
              alt={photos[0].alt}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-[1600ms] hover:scale-[1.03]"
            />
          </motion.figure>

          {/* Small images */}
          {photos.slice(1).map((photo, index) => (
            <motion.figure
              key={index}
              variants={item}
              className="relative overflow-hidden rounded-[22px]"
              role="listitem"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-[1600ms] hover:scale-[1.03]"
              />
            </motion.figure>
          ))}

        </motion.div>



      </div>

    </section>
  );
}