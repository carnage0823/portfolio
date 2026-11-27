"use client";
import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import { experience } from "@/data/portfolio";
import { SectionHeading, useSpotlight } from "./ui";

function duration(start: string, end: string) {
  const parse = (s: string) => (s === "Present" ? new Date() : new Date(`1 ${s}`));
  const a = parse(start);
  const b = parse(end);
  const months = (b.getFullYear() - a.getFullYear()) * 12 + (b.getMonth() - a.getMonth()) + 1;
  const y = Math.floor(months / 12);
  const m = months % 12;
  return [y && `${y} yr${y > 1 ? "s" : ""}`, m && `${m} mo${m > 1 ? "s" : ""}`].filter(Boolean).join(" ");
}

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 50%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const spot = useSpotlight<HTMLDivElement>();

  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeading
        index="02"
        eyebrow="Experience"
        title={
          <>
            Where I&apos;ve <span className="text-gradient">worked</span>
          </>
        }
        description="Four years shipping production software — from product startups to national-scale digital public infrastructure."
      />

      <div ref={ref} className="relative">
        {/* Timeline rail */}
        <div className="absolute left-[11px] top-2 bottom-2 w-px bg-white/10 md:left-1/2" />
        <motion.div
          style={{ scaleY }}
          className="absolute left-[11px] top-2 bottom-2 w-px origin-top bg-gradient-to-b from-accent via-accent-2 to-accent-3 md:left-1/2"
        />

        <ol className="space-y-10 md:space-y-0 md:-mt-4">
          {experience.map((job, i) => {
            const left = i % 2 === 0;
            return (
              <li key={job.company} className="relative md:grid md:grid-cols-2 md:gap-16">
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="absolute left-0 top-6 z-10 grid size-6 place-items-center rounded-full border border-accent/60 bg-ink md:left-1/2 md:-translate-x-1/2"
                >
                  <span className={`size-2 rounded-full ${job.current ? "bg-emerald-400 animate-pulse" : "bg-accent"}`} />
                </motion.span>

                <motion.div
                  initial={{ opacity: 0, x: left ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className={`ml-12 md:ml-0 ${left ? "md:col-start-1" : "md:col-start-2"}`}
                >
                  <div onMouseMove={spot} className="spotlight-card rounded-2xl p-7 md:p-8">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="font-mono text-xs uppercase tracking-widest text-accent-2">
                        {job.start} — {job.end}
                      </span>
                      {job.current ? (
                        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-0.5 text-xs text-emerald-300">
                          Current
                        </span>
                      ) : (
                        <span className="text-xs text-zinc-500">{duration(job.start, job.end)}</span>
                      )}
                    </div>
                    <h3 className="mt-4 font-display text-2xl md:text-3xl font-semibold text-white">{job.role}</h3>
                    <p className="mt-1 text-lg text-zinc-300">{job.company}</p>
                    <p className="mt-4 flex items-center gap-2 text-sm text-zinc-500">
                      <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth={1.8}>
                        <path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11Z" />
                        <circle cx="12" cy="10" r="2.5" />
                      </svg>
                      {job.location}
                      {job.current && <span className="text-zinc-600">· {duration(job.start, job.end)}</span>}
                    </p>
                  </div>
                </motion.div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
