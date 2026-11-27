"use client";
import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect, useState } from "react";

const ease = [0.76, 0, 0.24, 1] as const;
const NAME = "ROHIT SHARMA";

export default function Preloader({ onDone }: { onDone: () => void }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => String(Math.round(v)).padStart(3, "0"));
  const width = useTransform(count, (v) => `${v}%`);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);
    const controls = animate(count, 100, {
      duration: reduce ? 0.2 : 2,
      ease: [0.65, 0, 0.35, 1],
      onComplete: () => {
        setExiting(true);
        setTimeout(onDone, reduce ? 50 : 900);
      },
    });
    return () => {
      controls.stop();
      document.body.style.overflow = "";
    };
  }, [count, onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
      initial={{ clipPath: "inset(0 0 0% 0)" }}
      animate={exiting ? { clipPath: "inset(0 0 100% 0)" } : undefined}
      transition={{ duration: 0.9, ease }}
    >
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      <div className="relative flex overflow-hidden font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white">
        {NAME.split("").map((ch, i) => (
          <motion.span
            key={i}
            initial={{ y: "110%" }}
            animate={exiting ? { y: "-110%" } : { y: "0%" }}
            transition={{ duration: 0.8, ease, delay: exiting ? i * 0.02 : 0.15 + i * 0.045 }}
            className="inline-block"
          >
            {ch === " " ? " " : ch}
          </motion.span>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: exiting ? 0 : 1 }}
        transition={{ duration: 0.6, delay: exiting ? 0 : 0.8 }}
        className="relative mt-4 font-mono text-xs tracking-[0.4em] uppercase text-zinc-500"
      >
        Full-Stack Developer
      </motion.p>

      <div className="absolute bottom-10 left-6 right-6 sm:left-12 sm:right-12 flex items-end justify-between gap-6">
        <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">Loading experience</span>
        <motion.span className="font-display text-5xl sm:text-7xl font-semibold text-white tabular-nums">
          {rounded}
        </motion.span>
      </div>
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-accent via-accent-2 to-accent-3"
        style={{ width }}
      />
    </motion.div>
  );
}
