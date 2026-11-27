"use client";
import {
  AnimatePresence,
  animate,
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useTransform,
} from "motion/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import portrait from "@/assets/hero-portrait.jpeg";
import {
  additionalProjects,
  experience,
  featuredProjects,
  profile,
  skillGroups,
  yearsOfExperience,
} from "@/data/portfolio";
import ParticleField from "./ParticleField";

const ease = [0.22, 1, 0.36, 1] as const;

function SplitWord({ text, ready, delay, className }: { text: string; ready: boolean; delay: number; className?: string }) {
  return (
    <span className={`inline-flex overflow-hidden pb-[0.08em] ${className ?? ""}`} aria-label={text}>
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="inline-block"
          initial={{ y: "110%", rotate: 8 }}
          animate={ready ? { y: "0%", rotate: 0 } : undefined}
          transition={{ duration: 1, ease, delay: delay + i * 0.04 }}
        >
          {ch}
        </motion.span>
      ))}
    </span>
  );
}

function RotatingRole({ ready }: { ready: boolean }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (!ready) return;
    const t = setInterval(() => setI((v) => (v + 1) % profile.roles.length), 2600);
    return () => clearInterval(t);
  }, [ready]);
  return (
    <span className="relative inline-flex h-[1.4em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={profile.roles[i]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease }}
          className="text-gradient font-medium whitespace-nowrap"
        >
          {profile.roles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function Counter({ to, suffix = "", ready }: { to: number; suffix?: string; ready: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const text = useTransform(mv, (v) => `${Math.round(v)}${suffix}`);
  useEffect(() => {
    if (!inView || !ready) return;
    const c = animate(mv, to, { duration: 2, ease: [0.16, 1, 0.3, 1], delay: 1.6 });
    return () => c.stop();
  }, [inView, ready, mv, to]);
  return <motion.span ref={ref}>{text}</motion.span>;
}

export default function Hero({ ready }: { ready: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const imgY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  // Portrait tilt toward the cursor
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const onTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 14);
    rx.set(-((e.clientY - r.top) / r.height - 0.5) * 14);
  };
  const resetTilt = () => {
    rx.set(0);
    ry.set(0);
  };

  const yoe = yearsOfExperience();
  const projectCount = featuredProjects.length + additionalProjects.length;
  const techCount = skillGroups.reduce((n, g) => n + g.items.length, 0);
  const stats = [
    { value: yoe, suffix: "+", label: "Years experience" },
    { value: projectCount, suffix: "+", label: "Projects shipped" },
    { value: experience.length, suffix: "", label: "Companies" },
    { value: Math.floor(techCount / 10) * 10, suffix: "+", label: "Technologies" },
  ];

  return (
    <section id="top" ref={ref} className="relative min-h-[100svh] overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_50%_40%,black_10%,transparent_70%)]" />
      <div className="absolute -top-40 -left-40 size-[38rem] rounded-full bg-accent/20 blur-[120px] animate-blob" />
      <div className="absolute top-20 -right-40 size-[34rem] rounded-full bg-accent-2/15 blur-[120px] animate-blob [animation-delay:-6s]" />
      <div className="absolute bottom-0 left-1/3 size-[30rem] rounded-full bg-accent-3/10 blur-[120px] animate-blob [animation-delay:-12s]" />
      <ParticleField className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink" />

      <motion.div
        style={{ y, opacity }}
        className="relative mx-auto grid min-h-[100svh] max-w-6xl items-center gap-12 px-6 pt-32 pb-20 lg:grid-cols-[1.25fr_1fr]"
      >
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs text-zinc-300 backdrop-blur"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            {experience[0].role} @ {experience[0].company}
          </motion.div>

          <h1 className="font-display font-bold tracking-tight text-white leading-[0.95] text-[clamp(3.25rem,10vw,7.5rem)]">
            <SplitWord text={profile.firstName} ready={ready} delay={0.3} />
            <br />
            <SplitWord text={profile.lastName} ready={ready} delay={0.5} className="text-gradient" />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.8, ease, delay: 1 }}
            className="mt-8 text-xl md:text-2xl text-zinc-300"
          >
            <RotatingRole ready={ready} />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.8, ease, delay: 1.15 }}
            className="mt-5 max-w-xl text-base md:text-lg leading-relaxed text-zinc-400"
          >
            {yoe}+ years building web & mobile products with React, Next.js, React Native and Node.js —
            from regulated KYC platforms to government-scale identity systems. Based in {profile.location}.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.8, ease, delay: 1.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-accent to-accent-2 px-7 py-3.5 font-medium text-ink shadow-[0_0_40px_-8px] shadow-accent/60 transition hover:shadow-accent-2/70"
            >
              View my work
              <svg viewBox="0 0 24 24" className="size-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2.2}>
                <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 font-medium text-white backdrop-blur transition hover:border-white/30 hover:bg-white/[0.07]"
            >
              Get in touch
            </a>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          style={{ y: imgY }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={ready ? { opacity: 1, scale: 1 } : undefined}
          transition={{ duration: 1.2, ease, delay: 0.5 }}
          className="relative mx-auto hidden w-full max-w-sm lg:block [perspective:1000px]"
          onMouseMove={onTilt}
          onMouseLeave={resetTilt}
        >
          <motion.div
            style={{ rotateX: rx, rotateY: ry }}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
            className="relative"
          >
            <div className="absolute -inset-[2px] rounded-[2rem] overflow-hidden">
              <div className="absolute inset-[-50%] animate-spin-slow bg-[conic-gradient(from_0deg,transparent_0deg,#818cf8_60deg,#22d3ee_120deg,transparent_180deg,transparent_360deg)]" />
            </div>
            <div className="relative overflow-hidden rounded-[2rem] bg-ink-2">
              <Image
                src={portrait}
                alt={profile.name}
                priority
                placeholder="blur"
                className="aspect-[4/5] w-full object-cover object-[center_12%] scale-[1.45] origin-[50%_22%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                <div>
                  <p className="font-display text-lg font-semibold text-white">{profile.name}</p>
                  <p className="font-mono text-xs text-zinc-400">{profile.location}</p>
                </div>
                <span className="rounded-full border border-white/15 bg-black/40 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-emerald-300 backdrop-blur">
                  {yoe}+ yrs exp
                </span>
              </div>
            </div>
            {/* Floating chips */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-10 top-12 rounded-2xl border border-white/10 bg-ink-2/80 px-4 py-3 shadow-xl backdrop-blur-xl"
            >
              <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">Stack</p>
              <p className="text-sm font-medium text-white">React · Next · Node</p>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-8 top-1/2 rounded-2xl border border-white/10 bg-ink-2/80 px-4 py-3 shadow-xl backdrop-blur-xl"
            >
              <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">Mobile</p>
              <p className="text-sm font-medium text-white">React Native</p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.dl
          initial={{ opacity: 0, y: 30 }}
          animate={ready ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.9, ease, delay: 1.5 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:col-span-2"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-ink/80 px-6 py-6 backdrop-blur">
              <dd className="font-display text-4xl md:text-5xl font-semibold text-white">
                <Counter to={s.value} suffix={s.suffix} ready={ready} />
              </dd>
              <dt className="mt-1 text-sm text-zinc-500">{s.label}</dt>
            </div>
          ))}
        </motion.dl>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : undefined}
        transition={{ delay: 2.2 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-zinc-500 md:flex"
        aria-label="Scroll to about"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="relative h-10 w-6 rounded-full border border-white/20">
          <motion.span
            animate={{ y: [4, 18, 4] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-0 h-2 w-1 -translate-x-1/2 rounded-full bg-white/70"
          />
        </span>
      </motion.a>
    </section>
  );
}
