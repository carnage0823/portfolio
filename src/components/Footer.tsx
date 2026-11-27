"use client";
import { motion } from "motion/react";
import { navLinks, profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.07]">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">Have an idea?</p>
            <a
              href={`mailto:${profile.email}`}
              className="group mt-3 inline-block font-display text-3xl md:text-5xl font-semibold text-white"
            >
              Say hello
              <span className="text-accent-2">.</span>
              <span className="mt-2 block h-px origin-left scale-x-0 bg-gradient-to-r from-accent to-accent-2 transition-transform duration-500 group-hover:scale-x-100" />
            </a>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-400">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 select-none text-center font-display font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/15 to-transparent whitespace-nowrap text-[clamp(2rem,8.2vw,7rem)]"
        >
          {profile.name.toUpperCase()}
        </motion.p>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/[0.07] pt-8 text-sm text-zinc-500 sm:flex-row">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <a href="#top" className="inline-flex items-center gap-2 transition-colors hover:text-white">
            Back to top
            <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M12 19V5m-6 6 6-6 6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
