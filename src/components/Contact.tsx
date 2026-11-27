"use client";
import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";
import { profile } from "@/data/portfolio";
import { ArrowUpRight, Reveal, SectionHeading, useSpotlight } from "./ui";

type Status = { kind: "idle" | "sending" | "success" | "error"; message?: string };

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: "M4 6h16v12H4zM4 7l8 6 8-6",
  },
  {
    label: "Phone",
    value: profile.phone,
    href: profile.phoneHref,
    icon: "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z",
  },
  {
    label: "LinkedIn",
    value: "rohit-sharma",
    href: profile.linkedin,
    icon: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
  },
  {
    label: "Location",
    value: profile.location,
    icon: "M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11Z",
  },
];

function Field({
  label,
  name,
  type = "text",
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
}) {
  const cls =
    "peer w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 pt-6 pb-2 text-white placeholder-transparent outline-none transition focus:border-accent/60 focus:bg-white/[0.05] focus:ring-4 focus:ring-accent/10";
  return (
    <label className="relative block">
      {textarea ? (
        <textarea name={name} required rows={5} placeholder={label} className={`${cls} resize-none`} />
      ) : (
        <input name={name} type={type} required placeholder={label} className={cls} />
      )}
      <span className="pointer-events-none absolute left-4 top-2 text-xs text-zinc-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-accent">
        {label}
      </span>
    </label>
  );
}

export default function Contact() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const spot = useSpotlight<HTMLDivElement>();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus({ kind: "sending" });
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "ea0c1504-42d9-455b-bc1c-2ba36b56dc45");
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const data = await res.json();
      if (data.success) {
        setStatus({ kind: "success", message: "Thanks! Your message is on its way — I'll get back to you soon." });
        form.reset();
      } else {
        setStatus({ kind: "error", message: data.message ?? "Something went wrong." });
      }
    } catch {
      setStatus({ kind: "error", message: "Something went wrong. Please try again or email me directly." });
    }
  };

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-1/3 -z-10 mx-auto h-96 max-w-3xl rounded-full bg-accent/10 blur-[120px]" />
      <SectionHeading
        index="05"
        eyebrow="Contact"
        title={
          <>
            Let&apos;s build something <span className="text-gradient">great together</span>
          </>
        }
        description="Have a role, a project or just want to say hello? My inbox is always open — I'll try my best to get back to you."
      />

      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <ul className="space-y-3">
            {channels.map((c) => {
              const Inner = (
                <>
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white/[0.04] text-accent-2 transition-colors group-hover:bg-accent-2/10">
                    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinejoin="round" strokeLinecap="round">
                      <path d={c.icon} />
                    </svg>
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-mono text-[11px] uppercase tracking-widest text-zinc-500">{c.label}</span>
                    <span className="block truncate text-white">{c.value}</span>
                  </span>
                  {c.href && (
                    <ArrowUpRight className="size-4 text-zinc-500 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                  )}
                </>
              );
              return (
                <li key={c.label}>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4 transition hover:border-white/15 hover:bg-white/[0.04]"
                    >
                      {Inner}
                    </a>
                  ) : (
                    <div className="group flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4">
                      {Inner}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <div onMouseMove={spot} className="spotlight-card rounded-3xl p-6 md:p-8">
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Your name" name="name" />
                <Field label="Your email" name="email" type="email" />
              </div>
              <Field label="Your message" name="message" textarea />
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <AnimatePresence mode="wait">
                  {status.message ? (
                    <motion.p
                      key={status.kind}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className={`text-sm ${status.kind === "success" ? "text-emerald-300" : "text-rose-300"}`}
                    >
                      {status.message}
                    </motion.p>
                  ) : (
                    <span />
                  )}
                </AnimatePresence>
                <button
                  type="submit"
                  disabled={status.kind === "sending"}
                  className="group ml-auto inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-7 py-3.5 font-medium text-ink transition hover:shadow-[0_0_40px_-8px] hover:shadow-accent-2/70 disabled:opacity-60"
                >
                  {status.kind === "sending" ? "Sending…" : "Send message"}
                  <svg viewBox="0 0 24 24" className="size-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2.2}>
                    <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
