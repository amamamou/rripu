"use client";

import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

type Testimonial = {
  id: string;
  name: string;
  title?: string;
  org?: string;
  text: string;
  image?: string;
  rating?: number;
};

const TESTIMONIALS: Testimonial[] = [
  {
    id: "m-abdelli",
    name: "Maher Abdelli",
    title: "Professor of Computer Science",
    org: "ISET Kairouan",
    image: "/rym.jpg",
    rating: 5,
    text: "RIPU25 blended careful scholarship with quiet, meaningful conversation — sessions were curated with care and returned practical approaches I immediately applied to teaching.",
  },
  {
    id: "rym-m",
    name: "Rym Mallouli",
    title: "Learning Designer",
    org: "Université de Sousse",
    image: "/rym.jpg",
    rating: 5,
    text: "A considered programme: workshops were practical and keynotes offered clear frameworks for ethical AI in assessment. It felt refined and deeply useful.",
  },
  {
    id: "fattouma",
    name: "Fattouma Mzali",
    title: "Pedagogy Specialist",
    org: "ISET Rades",
    image: "/rym.jpg",
    rating: 5,
    text: "Softly paced, intense in ideas. Conversations matured into strategies for practice — thoughtful, professional, and quietly elegant.",
  },
  {
    id: "cxxx",
    name: "C. Xxx",
    title: "Visiting Researcher",
    org: "International Institute",
    image: "/rym.jpg",
    rating: 4,
    text: "Excellent interdisciplinary exchange and professional organisation. Curated sessions made networking purposeful and the overall tone was polished.",
  },
];

export default function VoicesFromRIPU25() {
  const inViewRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();
  const inView = useInView(inViewRef, {
    once: true,
    amount: 0.2,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  useEffect(() => {
    if (!emblaApi) return;

    const update = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    update();
    emblaApi.on("select", update);

    return () => {
      emblaApi.off("select", update);
    };
  }, [emblaApi]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section
      id="testimonials"
      ref={inViewRef}
      aria-labelledby="voices-title"
      className="relative overflow-hidden bg-[#F7F4FF] pb-32 md:pb-44"
    >

      {/* subtle atmosphere */}
      <div className="absolute bottom-[-15%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#A64DFF]/[0.04] blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">

        {/* divider continuity */}
        <div className="border-t border-[#1B1142]/[0.06] pt-24 md:pt-32">

          {/* HEADER */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">

            <div className="max-w-3xl">

              <div className="flex items-center gap-4 mb-7">

                <div className="w-8 h-px bg-[#A64DFF]/40" />

                <span className="text-[10px] uppercase tracking-[0.28em] text-[#6C2EB7]/65">
                  Témoignages
                </span>

              </div>

              <h2
                id="voices-title"
                className="text-4xl md:text-6xl font-extralight tracking-tight leading-[0.96] text-[#1B1142]"
              >
                Ce que les participants retiennent de RIPU25.
              </h2>

            </div>

            <p className="max-w-md text-sm md:text-base leading-relaxed text-[#1B1142]/52">
              Retours d’expérience autour des conférences,
              ateliers et échanges interdisciplinaires vécus durant RIPU25.
            </p>

          </div>

          {/* MOBILE CAROUSEL */}
          <div className="md:hidden mt-16">

            <div className="overflow-hidden" ref={emblaRef}>

              <div className="flex gap-5">

                {TESTIMONIALS.map((t) => (
                  <div
                    key={t.id}
                    className="min-w-[88%]"
                  >
                    <TestimonialCard testimonial={t} />
                  </div>
                ))}

              </div>

            </div>

            {/* controls */}
            <div className="flex items-center justify-center gap-3 mt-8">

              <button
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                className="w-9 h-9 rounded-full border border-[#1B1142]/10 bg-white/60 flex items-center justify-center disabled:opacity-30 transition-all duration-300"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M15 18l-6-6 6-6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button
                onClick={scrollNext}
                disabled={!canScrollNext}
                className="w-9 h-9 rounded-full border border-[#1B1142]/10 bg-white/60 flex items-center justify-center disabled:opacity-30 transition-all duration-300"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

            </div>

          </div>

          {/* DESKTOP GRID */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-7 mt-20">

            {TESTIMONIALS.map((t, index) => (
              <motion.div
                key={t.id}
                initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
                animate={
                  inView
                    ? reduceMotion
                      ? {}
                      : { opacity: 1, y: 0 }
                    : {}
                }
                transition={{
                  duration: 0.7,
                  delay: index * 0.06,
                }}
              >
                <TestimonialCard testimonial={t} />
              </motion.div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

const TestimonialCard = ({
  testimonial: t,
}: {
  testimonial: Testimonial;
}) => (
  <motion.article
    whileHover={{ y: -3 }}
    className="
      group
      relative
      overflow-hidden
      rounded-[28px]
      bg-white/55
      backdrop-blur-sm
      border border-white/60
      p-8 md:p-9
      transition-all
      duration-500
      hover:bg-white/72
      h-full
    "
  >

    {/* subtle glow */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_top_right,rgba(166,77,255,0.08),transparent_55%)]" />

    <div className="relative z-10 flex flex-col h-full">

      {/* top */}
      <div className="flex items-start justify-between gap-6">

        {/* profile */}
        <div className="flex items-center gap-4 min-w-0">

          {t.image && (
            <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 ring-1 ring-black/5">

              <Image
                src={t.image}
                alt={t.name}
                fill
                className="object-cover"
              />

            </div>
          )}

          <div className="min-w-0">

            <div className="text-[15px] text-[#1B1142]/90 truncate">
              {t.name}
            </div>

            {(t.title || t.org) && (
              <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-[#1B1142]/38 truncate">

                {[t.title, t.org]
                  .filter(Boolean)
                  .join(" · ")}

              </div>
            )}

          </div>

        </div>

        {/* elegant rating */}
        <div className="flex items-center gap-1.5 pt-1">

          {Array.from({
            length: t.rating || 5,
          }).map((_, i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-[#A64DFF]/65"
            />
          ))}

        </div>

      </div>

      {/* quote */}
      <div className="mt-10 flex-1">

        <div className="text-[#A64DFF]/35 text-4xl font-extralight leading-none mb-6">
          ”
        </div>

        <p className="text-[17px] leading-[1.75] tracking-tight text-[#1B1142]/78 font-light">

          {t.text}

        </p>

      </div>

    </div>

  </motion.article>
);