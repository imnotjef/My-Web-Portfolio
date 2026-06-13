"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="cta" className="py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Glow */}
        <div className="absolute left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-[#c62a88]/10 blur-[100px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          <p className="text-[#c62a88] font-mono text-xs tracking-widest uppercase mb-6">
            06 / Let&apos;s work together
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Code That{" "}
            <span className="text-gradient">Feels Right</span>
          </h2>

          <p className="text-[#888899] text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            Procurando um desenvolvedor que entregue rápido e com qualidade? Vamos
            construir algo incrível juntos.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="mailto:seu@email.com"
              className="flex items-center gap-2 px-8 py-4 bg-[#c62a88] hover:bg-[#a82275] text-white rounded-lg font-semibold transition-colors glow-burgundy"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Hire Me
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="https://github.com/seugithub"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 border border-white/15 hover:border-[#c62a88]/50 text-white rounded-lg font-semibold transition-all hover:bg-white/5"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              View GitHub
            </motion.a>
          </div>

          {/* Extra info */}
          <div className="flex items-center justify-center gap-8 mt-16 text-sm text-[#888899]">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              Available for work
            </div>
            <div className="flex items-center gap-2">
              <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
              </svg>
              Responde em 24h
            </div>
            <div className="flex items-center gap-2">
              <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
              </svg>
              Remoto / On-site
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
