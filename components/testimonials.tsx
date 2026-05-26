"use client";

import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef, useState } from "react";
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
    rating: 5,
    text: "Excellent interdisciplinary exchange and professional organisation. Curated sessions made networking purposeful and the overall tone was polished.",
  },
];

const StarRating = ({ rating = 5 }: { rating: number }) => (
  <div className="flex items-center gap-1.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill={i < rating ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.5"
        className={i < rating ? "text-amber-400" : "text-neutral-200"}
      >
        <polygon points="12 2 15.09 10.26 24 10.35 17.77 16.01 20.16 24.02 12 18.77 3.84 24.02 6.23 16.01 0 10.35 8.91 10.26 12 2" />
      </svg>
    ))}
  </div>
);

const QuoteIcon = ({ color = "#2F0461" }: { color?: string }) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.2 15.4C10.2 11.8 12.3 9.3 15.7 8L16.5 9.6C14.1 10.8 13 12.5 13 14.8H16.2V21H9.8V15.4H10.2Z"
      fill={color}
    />
    <path
      d="M22.2 15.4C22.2 11.8 24.3 9.3 27.7 8L28.5 9.6C26.1 10.8 25 12.5 25 14.8H28.2V21H21.8V15.4H22.2Z"
      fill={color}
    />
  </svg>
);

export default function VoicesFromRIPU25Carousel() {
  const inViewRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();
  const inView = useInView(inViewRef, { once: true, amount: 0.2 });
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: false });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const onSelect = () => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  };

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="testimonials"
      ref={inViewRef}
      aria-labelledby="voices-title"
      className="w-full bg-background border-t border-border"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mb-14 md:mb-20">
          <div className="lg:col-span-7">
            <h2
              id="voices-title"
              className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-tight text-foreground max-w-2xl"
            >
              Trusted by satisfied participants
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col items-start lg:items-end gap-4">
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              Reflections from RIPU25 attendees: how the programme shaped practice, informed research, and built lasting professional connections across institutions.
            </p>

            <div className="flex items-center gap-3">
              <button className="inline-flex items-center px-4 py-2 border border-border rounded-full text-sm text-foreground hover:bg-secondary transition-colors duration-200">
                Register Now
                <svg
                  className="ml-2 w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M5 12h14M13 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* desktop arrows removed per request */}
            </div>
          </div>
        </div>

        {/* Mobile Carousel - visible on mobile only */}
        <div className="md:hidden">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 px-4">
              {TESTIMONIALS.map((t) => (
                <div key={t.id} className="min-w-[86%] max-w-[420px] flex-shrink-0 mx-auto">
                  <TestimonialCard testimonial={t} />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Carousel Controls */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="w-8 h-8 flex items-center justify-center border border-border hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18l-6-6 6-6"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="w-8 h-8 flex items-center justify-center border border-border hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop Grid - visible on desktop only */}
        <motion.div
          initial={reduceMotion ? undefined : "hidden"}
          animate={inView ? "show" : "hidden"}
          variants={containerVariants}
          className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {TESTIMONIALS.slice(0, 4).map((t) => (
            <motion.div key={t.id} variants={itemVariants}>
              <TestimonialCard testimonial={t} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const TestimonialCard = ({ testimonial: t }: { testimonial: Testimonial }) => (
  <motion.article
    whileHover={{ y: -4 }}
    className="group relative bg-white border border-neutral-200 overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
  >
    {/* Background Image Overlay (visible on hover) */}
    {t.image && (
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0">
        <Image
          src={t.image}
          alt={t.name}
          fill
          className="object-cover"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/45" />
      </div>
    )}

    {/* Content */}
    <div className="relative z-10 p-6 flex flex-col h-full gap-4">
      {/* Quote Icon */}
      <div className="flex-shrink-0">
        <QuoteIcon />
      </div>

      {/* Stars */}
      <div className="flex-shrink-0">
        <StarRating rating={t.rating || 5} />
      </div>

      {/* Testimonial Text */}
      <p className="text-sm leading-relaxed text-neutral-700 flex-grow group-hover:text-white transition-colors duration-300">
        {t.text}
      </p>

      {/* Author Info with Profile Image */}
      <div className="border-t border-neutral-100 group-hover:border-white/20 pt-4 transition-colors duration-300 mt-auto">
        <div className="flex items-center gap-3">
          {t.image && (
            <div className="relative w-11 h-11 rounded-md overflow-hidden flex-shrink-0">
              <Image
                src={t.image}
                alt={t.name}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className="min-w-0">
            <p className="font-semibold text-sm text-neutral-900 group-hover:text-white transition-colors duration-300 truncate">
              {t.name}
            </p>
            {t.title && (
              <p className="text-xs text-neutral-600 group-hover:text-white/70 transition-colors duration-300 truncate">
                {t.title}
              </p>
            )}
            {t.org && (
              <p className="text-xs text-neutral-500 group-hover:text-white/60 transition-colors duration-300 truncate">
                {t.org}
              </p>
            )}
          </div>
          </div>
        </div>
      </div>
  </motion.article>
);
