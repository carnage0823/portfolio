"use client";
import { motion } from "motion/react";
import { skillGroups } from "@/data/portfolio";
import { SectionHeading, useSpotlight } from "./ui";

const icons: Record<string, string> = {
  Languages: "M8 6 2 12l6 6M16 6l6 6-6 6",
  "Frontend & Mobile": "M4 5h16v11H4zM9 20h6M12 16v4",
  "State & Data": "M4 7c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3Zm0 0v10c0 1.7 3.6 3 8 3s8-1.3 8-3V7M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3",
  Backend: "M4 4h16v6H4zM4 14h16v6H4zM8 7h.01M8 17h.01",
  "Databases & ORM": "M4 7c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3Zm0 0v10c0 1.7 3.6 3 8 3s8-1.3 8-3V7",
  "Cloud & Services": "M7 18a5 5 0 1 1 1-9.9A6 6 0 0 1 19.5 10 4 4 0 0 1 18 18H7Z",
  "Real-time & Communication": "M13 2 4 14h7l-1 8 9-12h-7l1-8Z",
  "Other Integrations": "M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1",
  Tools: "M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.8-.7-.7-2.8 2.5-2.5Z",
  "AI Development": "M12 3v3M12 18v3M3 12h3M18 12h3M6 6l2 2M16 16l2 2M6 18l2-2M16 8l2-2M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z",
};

function Marquee({ items, reverse }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className={`flex shrink-0 gap-4 py-2 pr-4 ${reverse ? "animate-marquee-reverse" : "animate-marquee"} hover:[animation-play-state:paused]`}>
        {doubled.map((s, i) => (
          <span
            key={i}
            className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 font-display text-lg text-zinc-300"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

function SkillCard({ title, items }: { title: string; items: string[] }) {
  const spot = useSpotlight<HTMLDivElement>();
  return (
    <div onMouseMove={spot} className="spotlight-card h-full rounded-2xl p-6">
      <div className="flex items-center gap-3">
        <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-2/10 text-accent">
          <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
            <path d={icons[title] ?? icons.Tools} />
          </svg>
        </span>
        <h3 className="font-display text-base font-semibold text-white">{title}</h3>
      </div>
      <ul className="mt-5 flex flex-wrap gap-2">
        {items.map((s) => (
          <li
            key={s}
            className="rounded-lg border border-white/[0.07] bg-white/[0.02] px-3 py-1.5 text-sm text-zinc-300 transition-colors hover:border-accent/40 hover:text-white"
          >
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  const all = skillGroups.flatMap((g) => g.items);
  const half = Math.ceil(all.length / 2);

  return (
    <section id="skills" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="04"
          eyebrow="Skills"
          title={
            <>
              The <span className="text-gradient">toolkit</span> I build with
            </>
          }
          description="A full-stack toolbox spanning frontend, mobile, backend, databases, real-time communication and AI-assisted development."
        />
      </div>

      <div className="mb-16 space-y-4">
        <Marquee items={all.slice(0, half)} />
        <Marquee items={all.slice(half)} reverse />
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
        className="mx-auto grid max-w-6xl gap-5 px-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {skillGroups.map((g) => (
          <motion.div
            key={g.title}
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.97 },
              show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            <SkillCard title={g.title} items={g.items} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
