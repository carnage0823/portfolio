"use client";
import { motion, useMotionValue, useSpring } from "motion/react";
import React from "react";
import { additionalProjects, featuredProjects, type Project } from "@/data/portfolio";
import { ArrowUpRight, Reveal, SectionHeading, Tag, useSpotlight } from "./ui";

const gradients = [
  "from-indigo-500/30 via-sky-500/10 to-transparent",
  "from-emerald-500/25 via-cyan-500/10 to-transparent",
  "from-fuchsia-500/25 via-indigo-500/10 to-transparent",
];

function FeaturedCard({ project, i }: { project: Project; i: number }) {
  const spot = useSpotlight<HTMLDivElement>();
  const rx = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const ry = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    spot(e);
    const r = e.currentTarget.getBoundingClientRect();
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 4);
    rx.set(-((e.clientY - r.top) / r.height - 0.5) * 4);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="[perspective:1400px]"
    >
      <motion.div
        style={{ rotateX: rx, rotateY: ry }}
        onMouseMove={onMove}
        onMouseLeave={() => {
          rx.set(0);
          ry.set(0);
        }}
        className="spotlight-card group overflow-hidden rounded-3xl"
      >
        <div className={`pointer-events-none absolute -top-32 -right-32 size-96 rounded-full bg-gradient-to-br ${gradients[i % gradients.length]} blur-3xl transition-opacity duration-700 opacity-60 group-hover:opacity-100`} />

        <div className="relative grid gap-10 p-8 md:p-12 lg:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col">
            <span className="font-display text-7xl md:text-8xl font-bold text-white/[0.06] leading-none select-none">
              0{i + 1}
            </span>
            <p className="mt-4 font-mono text-xs uppercase tracking-widest text-accent-2">{project.tagline}</p>
            <h3 className="mt-3 font-display text-3xl md:text-4xl font-semibold text-white">{project.name}</h3>
            <p className="mt-5 leading-relaxed text-zinc-400">{project.description}</p>
            <div className="mt-auto flex flex-wrap gap-2 pt-8">
              {project.stack.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
          </div>

          <ul className="space-y-4 self-center">
            {project.points.map((p, k) => (
              <motion.li
                key={k}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + k * 0.08 }}
                className="flex gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-[15px] leading-relaxed text-zinc-300 transition-colors group-hover:border-white/10"
              >
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gradient-to-br from-accent to-accent-2" />
                {p}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.article>
  );
}

function SmallCard({ project }: { project: Project }) {
  const spot = useSpotlight<HTMLDivElement>();
  const Wrapper = project.link ? "a" : "div";
  return (
    <div onMouseMove={spot} className="spotlight-card group h-full rounded-2xl transition-transform duration-500 hover:-translate-y-1">
      <Wrapper
        {...(project.link ? { href: project.link, target: "_blank", rel: "noopener noreferrer" } : {})}
        className="flex h-full flex-col p-7"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">{project.tagline}</p>
            <h4 className="mt-2 font-display text-xl font-semibold text-white">{project.name}</h4>
          </div>
          {project.link && (
            <span className="grid size-9 shrink-0 place-items-center rounded-full border border-white/10 text-zinc-400 transition-all duration-300 group-hover:rotate-45 group-hover:border-accent-2/50 group-hover:bg-accent-2/10 group-hover:text-accent-2">
              <ArrowUpRight />
            </span>
          )}
        </div>
        <p className="mt-4 text-sm leading-relaxed text-zinc-400">{project.description}</p>
        {project.points.length > 0 && (
          <ul className="mt-4 space-y-2">
            {project.points.map((p, k) => (
              <li key={k} className="flex gap-3 text-sm leading-relaxed text-zinc-400">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                {p}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {project.stack.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>
      </Wrapper>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeading
        index="03"
        eyebrow="Selected Work"
        title={
          <>
            Projects with <span className="text-gradient">real-world impact</span>
          </>
        }
        description="Platforms used by financial institutions, state governments and digital commerce networks — plus products across real-time, mobile and chatbot domains."
      />

      <div className="space-y-8">
        {featuredProjects.map((p, i) => (
          <FeaturedCard key={p.name} project={p} i={i} />
        ))}
      </div>

      <Reveal className="mt-28 mb-10 flex items-end justify-between gap-6">
        <h3 className="font-display text-3xl md:text-4xl font-semibold text-white">More projects</h3>
        <span className="hidden sm:block font-mono text-xs uppercase tracking-widest text-zinc-500">
          {additionalProjects.length} builds
        </span>
      </Reveal>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {additionalProjects.map((p) => (
          <motion.div
            key={p.name}
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            <SmallCard project={p} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
