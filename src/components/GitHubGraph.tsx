"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

function generateFakeContributions() {
  const weeks: number[][] = [];
  for (let w = 0; w < 52; w++) {
    const days: number[] = [];
    for (let d = 0; d < 7; d++) {
      const rand = Math.random();
      days.push(rand < 0.35 ? 0 : rand < 0.6 ? 1 : rand < 0.8 ? 2 : rand < 0.93 ? 3 : 4);
    }
    weeks.push(days);
  }
  return weeks;
}

const levelColors = [
  "bg-[#1a1a24]",
  "bg-[#c62a88]/30",
  "bg-[#c62a88]/55",
  "bg-[#c62a88]/80",
  "bg-[#c62a88]",
];

const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

export default function GitHubGraph() {
  const weeks = useMemo(() => generateFakeContributions(), []);

  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/8 bg-[#111118] p-8"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-white font-semibold text-lg">GitHub Activity</h3>
              <p className="text-[#888899] text-sm mt-0.5">Contributions in the last year</p>
            </div>
            <a
              href="https://github.com/seugithub"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[#c62a88] hover:text-white transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              @seugithub
            </a>
          </div>

          {/* Month labels */}
          <div className="flex gap-1 mb-1 ml-0 overflow-x-auto">
            {months.map((m, i) => (
              <span key={i} className="text-[10px] text-[#888899] w-[calc((100%-11*4px)/12)] shrink-0 text-center">
                {m}
              </span>
            ))}
          </div>

          {/* Grid */}
          <div className="flex gap-1 overflow-x-auto pb-2">
            {weeks.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-1">
                {week.map((level, di) => (
                  <div
                    key={di}
                    title={`Level ${level}`}
                    className={`w-3 h-3 rounded-sm ${levelColors[level]} shrink-0 transition-colors hover:ring-1 hover:ring-[#c62a88]/60`}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex items-center justify-end gap-2 mt-3">
            <span className="text-[11px] text-[#888899]">Less</span>
            {levelColors.map((c, i) => (
              <div key={i} className={`w-3 h-3 rounded-sm ${c}`} />
            ))}
            <span className="text-[11px] text-[#888899]">More</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
