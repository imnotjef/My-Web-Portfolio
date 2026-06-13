"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const achievements = [
  {
    title: "1st Place — HackMIT",
    event: "HackMIT 2024",
    description: "Built an AI-powered accessibility tool for visually impaired developers. Beat 2000+ participants.",
    prize: "$5,000",
    icon: "🏆",
    difficulty: "Elite",
  },
  {
    title: "Winner — ETHGlobal",
    event: "ETHGlobal Istanbul",
    description: "DeFi protocol for micro-lending in emerging markets using smart contracts on Ethereum L2.",
    prize: "$3,000",
    icon: "⛓️",
    difficulty: "Hard",
  },
  {
    title: "Best AI Project — DevFest",
    event: "Google DevFest 2024",
    description: "Real-time sign language interpreter using computer vision and transformer models.",
    prize: "Google Cloud Credits",
    icon: "🤖",
    difficulty: "Hard",
  },
  {
    title: "Top 10 — Smart India Hackathon",
    event: "SIH 2023",
    description: "AgriTech solution for crop disease detection using satellite imagery and ML.",
    prize: "Certificate",
    icon: "🌾",
    difficulty: "Medium",
  },
  {
    title: "2nd Place — Hack The Box",
    event: "HTB CTF 2024",
    description: "Cybersecurity competition. Solved 24/30 challenges in web exploitation and reverse engineering.",
    prize: "$1,500",
    icon: "🔐",
    difficulty: "Elite",
  },
  {
    title: "Best UX — Design Hackathon",
    event: "Figma Config Hackathon",
    description: "Redesigned healthcare booking flow reducing friction by 60%. Voted best UX by panel of designers.",
    prize: "Figma Pro",
    icon: "🎨",
    difficulty: "Medium",
  },
  {
    title: "Top 50 — ICPC",
    event: "ICPC Regionals 2023",
    description: "Competitive programming contest. Solved complex algorithmic problems under time pressure.",
    prize: "Certificate",
    icon: "⚡",
    difficulty: "Elite",
  },
  {
    title: "Winner — Climate Hack",
    event: "Climate Hack 2023",
    description: "Carbon footprint tracker with gamification. Won sustainability prize at UN-backed hackathon.",
    prize: "$2,000",
    icon: "🌍",
    difficulty: "Hard",
  },
  {
    title: "Best Startup Idea — YC Hackathon",
    event: "YC Build Sprint",
    description: "Pitched SaaS product for legal document automation. Selected for Y Combinator office hours.",
    prize: "YC Mentorship",
    icon: "🚀",
    difficulty: "Hard",
  },
];

const difficultyColor: Record<string, string> = {
  Elite: "text-[#c62a88] bg-[#c62a88]/10 border-[#c62a88]/30",
  Hard: "text-orange-400 bg-orange-400/10 border-orange-400/30",
  Medium: "text-yellow-400 bg-yellow-400/10 border-yellow-400/30",
};

export default function Achievements() {
  const [current, setCurrent] = useState(0);
  const perPage = 3;
  const total = Math.ceil(achievements.length / perPage);

  const visible = achievements.slice(current * perPage, current * perPage + perPage);

  return (
    <section id="achievements" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#c62a88] font-mono text-xs tracking-widest uppercase mb-3"
        >
          05 / Achievements
        </motion.p>

        <div className="flex items-end justify-between mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-white"
          >
            Awards & Recognition
          </motion.h2>

          {/* Carousel controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCurrent((p) => Math.max(0, p - 1))}
              disabled={current === 0}
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#888899] hover:border-[#c62a88]/50 hover:text-white transition-all disabled:opacity-30"
            >
              <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="text-[#888899] text-sm font-mono">
              {current + 1} / {total}
            </span>
            <button
              onClick={() => setCurrent((p) => Math.min(total - 1, p + 1))}
              disabled={current === total - 1}
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#888899] hover:border-[#c62a88]/50 hover:text-white transition-all disabled:opacity-30"
            >
              <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.35 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {visible.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="achievement-card rounded-xl p-6 flex flex-col gap-4 hover:border-[#c62a88]/40 transition-all"
              >
                <div className="flex items-start justify-between">
                  <span className="text-3xl">{a.icon}</span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${difficultyColor[a.difficulty]}`}>
                    {a.difficulty}
                  </span>
                </div>

                <div>
                  <h3 className="text-white font-semibold text-base leading-snug mb-1">{a.title}</h3>
                  <p className="text-[#c62a88] text-xs font-mono">{a.event}</p>
                </div>

                <p className="text-[#888899] text-sm leading-relaxed flex-1">{a.description}</p>

                <div className="flex items-center justify-between pt-3 border-t border-white/5">
                  <span className="text-xs text-[#888899]">Prize</span>
                  <span className="text-white text-sm font-semibold">{a.prize}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all ${
                i === current ? "w-6 h-1.5 bg-[#c62a88]" : "w-1.5 h-1.5 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
