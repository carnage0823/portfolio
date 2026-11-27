"use client";
import { AnimatePresence } from "motion/react";
import { useCallback, useState } from "react";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { CursorGlow, ScrollProgress } from "@/components/Effects";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Preloader from "@/components/Preloader";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  const [ready, setReady] = useState(false);
  const onDone = useCallback(() => setReady(true), []);

  return (
    <>
      <AnimatePresence>{!ready && <Preloader key="preloader" onDone={onDone} />}</AnimatePresence>
      <ScrollProgress />
      <CursorGlow />
      <div className="noise pointer-events-none fixed inset-0 z-[1] opacity-[0.035] mix-blend-overlay" />
      <NavBar ready={ready} />
      <main className="relative z-[2]">
        <Hero ready={ready} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <div className="relative z-[2]">
        <Footer />
      </div>
    </>
  );
}
