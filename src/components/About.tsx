"use client";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import photo from "@/assets/user-image.jpeg";
import { education, highlights, profile } from "@/data/portfolio";
import { Reveal, SectionHeading, useSpotlight } from "./ui";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const spot = useSpotlight<HTMLDivElement>();

  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeading
        index="01"
        eyebrow="About"
        title={
          <>
            Engineering products that are <span className="text-gradient">reliable, fast</span> and a joy to use.
          </>
        }
      />

      <div ref={ref} className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-white/10">
            <motion.div style={{ y: imgY }} className="scale-[1.15]">
              <Image
                src={photo}
                alt={`${profile.name} portrait`}
                placeholder="blur"
                className="aspect-[4/5] w-full object-cover object-top"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-mono text-xs uppercase tracking-widest text-accent-2">Currently</p>
              <p className="mt-1 font-display text-xl font-semibold text-white">Building at Protean eGov</p>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 -z-10 size-40 rounded-3xl bg-gradient-to-br from-accent/40 to-accent-2/30 blur-3xl" />
        </Reveal>

        <div className="flex flex-col justify-center">
          <Reveal>
            <p className="text-xl md:text-2xl leading-relaxed text-zinc-200">{profile.summary}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-zinc-400">
              I enjoy owning features end-to-end — from database schema and APIs to pixel-perfect,
              accessible interfaces — and I&apos;m comfortable working in regulated domains where security,
              compliance and correctness matter.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="mt-10 grid grid-cols-2 gap-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 text-sm text-zinc-300">
                  <span className="grid size-5 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                    <svg viewBox="0 0 24 24" className="size-3" fill="none" stroke="currentColor" strokeWidth={3}>
                      <path d="m5 12 5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.3}>
            <div
              onMouseMove={spot}
              className="spotlight-card mt-10 flex items-start gap-5 rounded-2xl p-6"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-2/20 text-accent-2">
                <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth={1.8}>
                  <path d="M22 10 12 5 2 10l10 5 10-5Z M6 12v5c3 2 9 2 12 0v-5" strokeLinejoin="round" strokeLinecap="round" />
                </svg>
              </span>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">Education</p>
                <p className="mt-1 font-display text-lg font-semibold text-white">{education.degree}</p>
                <p className="text-zinc-400">{education.school}</p>
                <p className="mt-1 font-mono text-xs text-zinc-500">
                  {education.period} · {education.location}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
