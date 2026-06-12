"use client";

import { motion, type Easing } from "framer-motion";

const ease: Easing = "easeOut";
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease },
});

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-grid"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#c62a88]/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#c62a88]/5 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Status badge */}
        <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c62a88] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c62a88]" />
          </span>
          <span className="text-sm text-[#888899] border border-white/10 rounded-full px-3 py-1">
            Available for opportunities
          </span>
        </motion.div>

        {/* Greeting */}
        <motion.p {...fadeUp(0.2)} className="text-[#c62a88] font-mono text-sm mb-3 tracking-widest uppercase">
          Hi, I&apos;m
        </motion.p>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.3)}
          className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight tracking-tight"
        >
          Seu Nome
          <span className="text-[#c62a88]">.</span>
        </motion.h1>

        {/* Role */}
        <motion.h2
          {...fadeUp(0.4)}
          className="text-xl md:text-2xl font-light text-[#888899] mb-6"
        >
          Full-Stack Developer & Problem Solver
        </motion.h2>

        {/* Tagline */}
        <motion.p
          {...fadeUp(0.5)}
          className="text-2xl md:text-4xl font-semibold text-white/90 mb-10 max-w-2xl mx-auto leading-snug"
        >
          Fast enough to{" "}
          <span className="text-[#c62a88]">ship</span>.{" "}
          Sharp enough to{" "}
          <span className="text-[#c62a88]">scale</span>.
        </motion.p>

        {/* Description */}
        <motion.p
          {...fadeUp(0.6)}
          className="text-[#888899] text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed"
        >
          I build fast, scalable, and beautiful digital products — from idea to production.
          Passionate about clean code and great user experiences.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.7)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="mailto:seu@email.com"
            className="group flex items-center gap-2 px-7 py-3.5 bg-[#c62a88] hover:bg-[#a82275] text-white rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-[#c62a88]/25"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Get in touch
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-7 py-3.5 border border-white/15 hover:border-[#c62a88]/50 text-white rounded-lg font-medium transition-all duration-200 hover:bg-white/5"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            View Resume
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-[#888899] tracking-widest">SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-8 bg-gradient-to-b from-[#c62a88] to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
